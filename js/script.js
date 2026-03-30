if ("scrolRestoration" in history) {
  history.scrolRestoration = "manual";
}

// 👉 Adds background to navbar on scroll
const navbar = document.querySelector(".navbar");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const navLogo = document.querySelector(".nav-logo");

let heroIntroFinished = false;
let lastScrollY = window.scrollY;
let scrollDirection = "down";

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    scrollDirection = "down";
  } else {
    scrollDirection = "up";
  }

  lastScrollY = window.scrollY;

  if (window.scrollY > 8) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// 👉 Adds open / close menu

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navLinks.classList.toggle("active");

  const isOpen = navToggle.classList.contains("active");
  navToggle.setAttribute("aria-expanded", isOpen);
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("active");
    navLinks.classList.remove("active");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

if (navLogo && navToggle && navLinks) {
  navLogo.addEventListener("click", () => {
    navToggle.classList.remove("active");
    navLinks.classList.remove("active");
    navToggle.setAttribute("aria-expanded", "false");
  });
}

// 👉 close menu when clicking on hero button

document.querySelectorAll(".hero-button").forEach((btn) => {
  btn.addEventListener("click", () => {
    navToggle.classList.remove("active");
    navLinks.classList.remove("active");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// 👉 Hide preloader after page loads + start intro animations
const heroSubtitle = document.querySelector(".hero-subtitle");
const heroTitle = document.querySelector(".hero-title");
const heroButton = document.querySelector(".hero-button");

window.addEventListener("load", () => {
  window.scrollTo(0, 0);

  const preloader = document.querySelector(".preloader");

  if (preloader) {
    setTimeout(() => {
      preloader.classList.add("hide");

      setTimeout(() => {
        navbar.classList.add("intro-show");
      }, 150);

      setTimeout(() => {
        heroSubtitle?.classList.add("intro-show");
      }, 350);

      setTimeout(() => {
        heroTitle?.classList.add("intro-show");
      }, 550);

      setTimeout(() => {
        heroButton?.classList.add("intro-show");
        heroIntroFinished = true;
      }, 800);
    }, 1500);
  }
});

// 👉 Hero content scroll back animations
const heroSection = document.querySelector(".hero");
let heroSubtitleTimeout;
let heroTitleTimeout;
let heroButtonTimeout;

const heroObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!heroIntroFinished) return;

      clearTimeout(heroSubtitleTimeout);
      clearTimeout(heroTitleTimeout);
      clearTimeout(heroButtonTimeout);

      if (entry.isIntersecting) {
        heroSubtitleTimeout = setTimeout(() => {
          heroSubtitle?.classList.add("intro-show");
        }, 120);

        heroTitleTimeout = setTimeout(() => {
          heroTitle?.classList.add("intro-show");
        }, 280);

        heroButtonTimeout = setTimeout(() => {
          heroButton?.classList.add("intro-show");
        }, 460);
      } else {
        heroSubtitle?.classList.remove("intro-show");
        heroTitle?.classList.remove("intro-show");
        heroButton?.classList.remove("intro-show");
      }
    });
  },
  {
    threshold: 0.35,
  },
);

if (heroSection) {
  heroObserver.observe(heroSection);
}

// 👉 Archive section reveal animations on scroll
const archiveTopText = document.querySelector(".featured-work .section-text");
const archiveCards = document.querySelectorAll(".featured-work .media-card");
const archiveBottomText = document.querySelector(
  ".featured-work .section-text-right",
);
const archiveFullMedia = document.querySelector(".featured-work .media-full");

if (archiveCards[0]) {
  archiveCards[0].classList.add("reveal-left");
}

if (archiveCards[1]) {
  archiveCards[1].classList.add("reveal-right");
}

if (archiveTopText) {
  archiveTopText.classList.add("reveal-top");
}

if (archiveBottomText) {
  archiveBottomText.classList.add("reveal-up");
}

if (archiveFullMedia) {
  archiveFullMedia.classList.add("reveal-scale");
}

const archiveRevealItems = [
  archiveTopText,
  ...archiveCards,
  archiveBottomText,
  archiveFullMedia,
].filter(Boolean);

const archiveObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("scroll-back");
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");

        if (scrollDirection === "up") {
          entry.target.classList.add("scroll-back");
        } else {
          entry.target.classList.remove("scroll-back");
        }
      }
    });
  },
  {
    threshold: 0.18,
  },
);

archiveRevealItems.forEach((item) => {
  archiveObserver.observe(item);
});

// 👉 Vision section reveal animations on scroll
const visionLabel = document.querySelector(".vision-label");
const visionTitle = document.querySelector(".vision-title");
const visionSubtext = document.querySelector(".vision-subtext");
const visionMedia = document.querySelector(".vision-media");

if (visionLabel) {
  visionLabel.classList.add("vision-fade");
}

if (visionTitle) {
  visionTitle.classList.add("vision-rise");
}

if (visionSubtext) {
  visionSubtext.classList.add("vision-fade");
}

if (visionMedia) {
  visionMedia.classList.add("vision-scale");
}

const visionRevealItems = [
  visionLabel,
  visionTitle,
  visionSubtext,
  visionMedia,
].filter(Boolean);

const visionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("scroll-back");
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");

        if (scrollDirection === "up") {
          entry.target.classList.add("scroll-back");
        } else {
          entry.target.classList.remove("scroll-back");
        }
      }
    });
  },
  {
    threshold: 0.2,
  },
);

visionRevealItems.forEach((item) => {
  visionObserver.observe(item);
});

// 👉 Connect section reveal animations on scroll
const connectLabel = document.querySelector(".connect-label");
const connectTitle = document.querySelector(".connect-title");
const connectText = document.querySelector(".connect-text");
const connectEmail = document.querySelector(".connect-email");
const connectLinks = document.querySelectorAll(".connect-links a");
const footer = document.querySelector(".footer");

if (connectLabel) {
  connectLabel.classList.add("connect-fade-top");
}

if (connectTitle) {
  connectTitle.classList.add("connect-rise");
}

if (connectText) {
  connectText.classList.add("connect-soft");
}

if (connectEmail) {
  connectEmail.classList.add("connect-pop");
}

connectLinks.forEach((link) => {
  link.classList.add("connect-link-reveal");
});

if (footer) {
  footer.classList.add("footer-reveal");
}

const connectRevealItems = [
  connectLabel,
  connectTitle,
  connectText,
  connectEmail,
  ...connectLinks,
  footer,
].filter(Boolean);

const connectObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("scroll-back");
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");

        if (scrollDirection === "up") {
          entry.target.classList.add("scroll-back");
        } else {
          entry.target.classList.remove("scroll-back");
        }
      }
    });
  },
  {
    threshold: 0.2,
  },
);

connectRevealItems.forEach((item) => {
  connectObserver.observe(item);
});
