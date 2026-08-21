/* =========================================================
   FROM CHINA — WEBSITE ANIMATIONS
   Complete script.js
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------------------------------------------------------
     PAGE LOAD
  --------------------------------------------------------- */

  document.body.classList.add("page-loaded");


  /* ---------------------------------------------------------
     SCROLL REVEAL OBSERVER
  --------------------------------------------------------- */

  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("animate-in");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -60px 0px"
    }
  );


  /* ---------------------------------------------------------
     GENERAL SECTION ANIMATIONS
  --------------------------------------------------------- */

  const animatedElements = document.querySelectorAll(
    ".section, .evidence, .cta, footer"
  );

  animatedElements.forEach((element) => {

    element.classList.add("reveal");

    observer.observe(element);

  });


  /* ---------------------------------------------------------
     SERVICE ROW ANIMATIONS
  --------------------------------------------------------- */

  const services = document.querySelectorAll(".service");

  services.forEach((service, index) => {

    service.classList.add("service-reveal");

    service.style.transitionDelay = `${index * 120}ms`;

    observer.observe(service);

  });


  /* ---------------------------------------------------------
     TIMELINE ANIMATIONS
  --------------------------------------------------------- */

  const timeline = document.querySelectorAll(".timeline > div");

  timeline.forEach((step, index) => {

    step.classList.add("timeline-reveal");

    step.style.transitionDelay = `${index * 120}ms`;

    observer.observe(step);

  });


  /* ---------------------------------------------------------
     AUDIENCE CARD ANIMATIONS
  --------------------------------------------------------- */

  const audienceCards = document.querySelectorAll(
    ".audience-grid > div"
  );

  audienceCards.forEach((card, index) => {

    card.classList.add("audience-reveal");

    card.style.transitionDelay = `${index * 100}ms`;

    observer.observe(card);

  });


  /* ---------------------------------------------------------
     HERO ENTRANCE
  --------------------------------------------------------- */

  const heroContent = document.querySelector(".hero-content");

  if (heroContent) {

    heroContent.classList.add("hero-enter");

    setTimeout(() => {

      heroContent.classList.add("hero-visible");

    }, 150);

  }


  /* ---------------------------------------------------------
     HERO BACKGROUND PARALLAX
  --------------------------------------------------------- */

  const heroBackground =
    document.querySelector(".hero-bg");

  if (heroBackground) {

    window.addEventListener("scroll", () => {

      const scrollY = window.scrollY;

      if (scrollY < window.innerHeight) {

        heroBackground.style.transform =
          `scale(1.05) translateY(${scrollY * 0.12}px)`;

      }

    });

  }


  /* ---------------------------------------------------------
     EVIDENCE BACKGROUND PARALLAX
  --------------------------------------------------------- */

  const evidenceBackground =
    document.querySelector(".evidence-bg");

  if (evidenceBackground) {

    window.addEventListener("scroll", () => {

      const section =
        document.querySelector(".evidence");

      if (!section) return;

      const rect =
        section.getBoundingClientRect();

      if (
        rect.top < window.innerHeight &&
        rect.bottom > 0
      ) {

        const movement =
          rect.top * -0.08;

        evidenceBackground.style.transform =
          `scale(1.08) translateY(${movement}px)`;

      }

    });

  }


  /* ---------------------------------------------------------
     NAVBAR SCROLL EFFECT
  --------------------------------------------------------- */

  const navbar =
    document.querySelector(".nav");

  if (navbar) {

    window.addEventListener("scroll", () => {

      if (window.scrollY > 40) {

        navbar.classList.add("nav-scrolled");

      } else {

        navbar.classList.remove("nav-scrolled");

      }

    });

  }


  /* ---------------------------------------------------------
     SERVICE HOVER ARROWS
  --------------------------------------------------------- */

  services.forEach((service) => {

    const arrow =
      service.querySelector(".arrow");

    if (!arrow) return;

    service.addEventListener("mouseenter", () => {

      arrow.style.transform =
        "translateX(6px)";

    });

    service.addEventListener("mouseleave", () => {

      arrow.style.transform =
        "translateX(0)";

    });

  });


  /* ---------------------------------------------------------
     BUTTON MAGNETIC EFFECT
  --------------------------------------------------------- */

  const buttons =
    document.querySelectorAll(".btn");

  buttons.forEach((button) => {

    button.addEventListener("mousemove", (event) => {

      const rect =
        button.getBoundingClientRect();

      const x =
        event.clientX -
        rect.left -
        rect.width / 2;

      const y =
        event.clientY -
        rect.top -
        rect.height / 2;

      button.style.transform =
        `translate(${x * 0.08}px, ${y * 0.08}px)`;

    });

    button.addEventListener("mouseleave", () => {

      button.style.transform =
        "translate(0,0)";

    });

  });


  /* ---------------------------------------------------------
     SMOOTH ANCHOR SCROLL
  --------------------------------------------------------- */

  document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

      link.addEventListener("click", (event) => {

        const targetID =
          link.getAttribute("href");

        if (
          !targetID ||
          targetID === "#"
        ) return;

        const target =
          document.querySelector(targetID);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      });

    });


  /* ---------------------------------------------------------
     FLOATING HERO STAMP
  --------------------------------------------------------- */

  const stamp =
    document.querySelector(".hero-stamp");

  if (stamp) {

    let direction = 1;
    let position = 0;

    setInterval(() => {

      position +=
        0.08 * direction;

      if (position > 3) {
        direction = -1;
      }

      if (position < -3) {
        direction = 1;
      }

      stamp.style.transform =
        `translateY(${position}px)`;

    }, 30);

  }


  /* ---------------------------------------------------------
     CTA ORB MOUSE MOVEMENT
  --------------------------------------------------------- */

  const orb =
    document.querySelector(".cta-orb");

  if (orb) {

    window.addEventListener("mousemove", (event) => {

      const x =
        (event.clientX /
          window.innerWidth -
          0.5) * 25;

      const y =
        (event.clientY /
          window.innerHeight -
          0.5) * 25;

      orb.style.transform =
        `translate(${x}px, ${y}px)`;

    });

  }


  /* ---------------------------------------------------------
     MOBILE MENU
  --------------------------------------------------------- */

  const menuButton =
    document.querySelector(".menu");

  const nav =
    document.querySelector(".nav nav");

  if (menuButton && nav) {

    menuButton.addEventListener("click", () => {

      nav.classList.toggle("mobile-open");

      menuButton.classList.toggle("menu-open");

    });

  }


  /* ---------------------------------------------------------
     CLOSE MOBILE MENU AFTER CLICK
  --------------------------------------------------------- */

  if (nav) {

    nav.querySelectorAll("a").forEach((link) => {

      link.addEventListener("click", () => {

        nav.classList.remove("mobile-open");

        if (menuButton) {
          menuButton.classList.remove("menu-open");
        }

      });

    });

  }


  /* ---------------------------------------------------------
     MOUSE PARALLAX ON HERO
  --------------------------------------------------------- */

  const hero =
    document.querySelector(".hero");

  if (hero) {

    hero.addEventListener("mousemove", (event) => {

      const x =
        (event.clientX /
          window.innerWidth -
          0.5);

      const y =
        (event.clientY /
          window.innerHeight -
          0.5);

      if (heroBackground) {

        heroBackground.style.transform =
          `scale(1.05)
           translate(${x * -8}px, ${y * -8}px)`;

      }

    });

  }


  /* ---------------------------------------------------------
     BUTTON ARROW ANIMATION
  --------------------------------------------------------- */

  buttons.forEach((button) => {

    const arrow =
      button.querySelector("b");

    if (!arrow) return;

    button.addEventListener("mouseenter", () => {

      arrow.style.display = "inline-block";

      arrow.style.transform =
        "translate(3px,-3px)";

    });

    button.addEventListener("mouseleave", () => {

      arrow.style.transform =
        "translate(0,0)";

    });

  });


  /* ---------------------------------------------------------
     FINAL INITIALIZATION
  --------------------------------------------------------- */

  console.log(
    "From China website animations loaded successfully."
  );

});
