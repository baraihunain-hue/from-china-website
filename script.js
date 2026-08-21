/* =========================================
   FROM CHINA — INTERACTIONS
========================================= */

document.addEventListener("DOMContentLoaded", () => {


  /* =========================================
     MOBILE MENU
  ========================================= */

  const menuButton = document.querySelector(".menu");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {

      menuButton.classList.toggle("active");
      mobileMenu.classList.toggle("active");

      document.body.classList.toggle("menu-open");

    });


    document.querySelectorAll(".mobile-menu a").forEach(link => {

      link.addEventListener("click", () => {

        menuButton.classList.remove("active");
        mobileMenu.classList.remove("active");

        document.body.classList.remove("menu-open");

      });

    });

  }


  /* =========================================
     NAVBAR SCROLL EFFECT
  ========================================= */

  const navbar = document.querySelector(".nav");

  const updateNavbar = () => {

    if (!navbar) return;

    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

  };

  window.addEventListener("scroll", updateNavbar, {
    passive: true
  });

  updateNavbar();


  /* =========================================
     SCROLL REVEAL ANIMATIONS
  ========================================= */

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(

      (entries, observer) => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

          }

        });

      },

      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px"
      }

    );


    revealElements.forEach(element => {

      observer.observe(element);

    });

  } else {

    revealElements.forEach(element => {

      element.classList.add("visible");

    });

  }


  /* =========================================
     SERVICE HOVER / POINTER EFFECT
  ========================================= */

  const services = document.querySelectorAll(".service");

  services.forEach(service => {

    service.addEventListener("mousemove", event => {

      const rect = service.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      service.style.setProperty("--mouse-x", `${x}px`);
      service.style.setProperty("--mouse-y", `${y}px`);

    });

  });


  /* =========================================
     SMOOTH ANCHOR SCROLLING
  ========================================= */

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      const navHeight = navbar
        ? navbar.offsetHeight
        : 0;

      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });

    });

  });


  /* =========================================
     BUTTON RIPPLE
  ========================================= */

  document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", event => {

      const ripple = document.createElement("span");

      ripple.classList.add("button-ripple");

      const rect = button.getBoundingClientRect();

      ripple.style.left =
        `${event.clientX - rect.left}px`;

      ripple.style.top =
        `${event.clientY - rect.top}px`;

      button.appendChild(ripple);

      setTimeout(() => {

        ripple.remove();

      }, 600);

    });

  });


  /* =========================================
     CONTACT CARD MICRO ANIMATION
  ========================================= */

  document.querySelectorAll(".contact-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

      card.classList.add("contact-hover");

    });

    card.addEventListener("mouseleave", () => {

      card.classList.remove("contact-hover");

    });

  });


  /* =========================================
     SOCIAL LINK EXTERNAL INDICATOR
  ========================================= */

  document.querySelectorAll(".social-links a").forEach(link => {

    link.addEventListener("click", () => {

      link.classList.add("clicked");

      setTimeout(() => {

        link.classList.remove("clicked");

      }, 500);

    });

  });


  /* =========================================
     PARALLAX HERO
  ========================================= */

  const heroBackground = document.querySelector(".hero-bg");

  if (heroBackground) {

    window.addEventListener("scroll", () => {

      const scrollY = window.scrollY;

      if (scrollY < window.innerHeight) {

        heroBackground.style.transform =
          `scale(1.05) translateY(${scrollY * 0.08}px)`;

      }

    }, {
      passive: true
    });

  }


  /* =========================================
     EVIDENCE FLOW ANIMATION
  ========================================= */

  const evidenceItems =
    document.querySelectorAll(".evidence-flow div");

  if ("IntersectionObserver" in window) {

    const evidenceObserver =
      new IntersectionObserver(

        entries => {

          entries.forEach(entry => {

            if (entry.isIntersecting) {

              evidenceItems.forEach((item, index) => {

                setTimeout(() => {

                  item.classList.add("active");

                }, index * 180);

              });

              evidenceObserver.disconnect();

            }

          });

        },

        {
          threshold: 0.3
        }

      );

    const evidenceFlow =
      document.querySelector(".evidence-flow");

    if (evidenceFlow) {

      evidenceObserver.observe(evidenceFlow);

    }

  }


  /* =========================================
     ESCAPE KEY CLOSES MOBILE MENU
  ========================================= */

  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

      if (menuButton) {
        menuButton.classList.remove("active");
      }

      if (mobileMenu) {
        mobileMenu.classList.remove("active");
      }

      document.body.classList.remove("menu-open");

    }

  });


});
