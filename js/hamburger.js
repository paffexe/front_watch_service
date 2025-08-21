document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".navbar__hamburger");
  const mobileMenu = document.querySelector(".navbar__mobile-menu");
  const body = document.body;

  if (!hamburger || !mobileMenu) {
    console.error("Hamburger menu elements not found");
    return;
  }

  function toggleMobileMenu() {
    const isActive = hamburger.classList.contains("active");

    if (isActive) {
      hamburger.classList.remove("active");
      mobileMenu.classList.remove("active");
      body.classList.remove("menu-open");
    } else {
      hamburger.classList.add("active");
      mobileMenu.classList.add("active");
      body.classList.add("menu-open");
    }
  }

  function closeMobileMenu() {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
    body.classList.remove("menu-open");
  }

  hamburger.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    toggleMobileMenu();
  });

  mobileMenu.addEventListener("click", function (e) {
    if (e.target === mobileMenu) {
      closeMobileMenu();
    }
  });

  const mobileMenuLinks = mobileMenu.querySelectorAll(".navbar__item a");
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      closeMobileMenu();
    });
  });

  const mobileMenuIcons = mobileMenu.querySelectorAll(".navbar__icon");
  mobileMenuIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      closeMobileMenu();
    });
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 767) {
      closeMobileMenu();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && mobileMenu.classList.contains("active")) {
      closeMobileMenu();
    }
  });

  function preventScroll(e) {
    if (body.classList.contains("menu-open") && window.innerWidth <= 767) {
      e.preventDefault();
    }
  }

  document.addEventListener("touchmove", preventScroll, { passive: false });

  console.log("Hamburger menu initialized successfully");
  console.log("Hamburger element:", hamburger);
  console.log("Mobile menu element:", mobileMenu);
});
