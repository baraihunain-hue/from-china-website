document.addEventListener("DOMContentLoaded", () => {

  /* =========================================
     MOBILE MENU
  ========================================== */

  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".nav");

  if (menu && nav) {
    menu.addEventListener("click", () => {
      nav.classList.toggle("menu-open");
    });

    document.querySelectorAll(".nav nav a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("menu-open");
      });
    });
  }


  /* =========================================
     SCROLL NAVIGATION EFFECT
  ========================================== */

  const header = document.querySelector(".nav");

  function updateHeader() {
    if (!header) return;

    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", updateHeader);
  updateHeader();


  /* =========================================
     REVEAL ELEMENTS ON SCROLL
  ========================================== */

  const revealElements = document.querySelectorAll(
    ".section, .service, .timeline > div, .audience-grid > div, .evidence-content, .evidence-flow, .cta-inner"
  );

  revealElements.forEach(element => {
    element.classList.add("reveal");
  });


  const revealObserver = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          revealObserver.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );


  revealElements.forEach(element => {
    revealObserver.observe(element);
  });


  /* =========================================
     SERVICE STAGGER ANIMATION
  ========================================== */

  const services = document.querySelectorAll(".service");

  services.forEach((service, index) => {
    service.style.transitionDelay = `${index * 100}ms`;
  });


  /* =========================================
     TIMELINE STAGGER
  ========================================== */

  const timelineItems = document.querySelectorAll(".timeline > div");

  timelineItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 120}ms`;
  });


  /* =========================================
     AUDIENCE STAGGER
  ========================================== */

  const audienceItems = document.querySelectorAll(".audience-grid > div");

  audienceItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 100}ms`;
  });


  /* =========================================
     PARALLAX HERO BACKGROUND
  ========================================== */

  const heroBg = document.querySelector(".hero-bg");

  if (heroBg) {

    window.addEventListener("scroll", () => {

      const scroll = window.scrollY;

      if (scroll < window.innerHeight) {
        heroBg.style.transform =
          `scale(1.06) translateY(${scroll * 0.12}px)`;
      }

    });

  }


  /* =========================================
     HERO CONTENT ENTRANCE
  ========================================== */

  const heroContent = document.querySelector(".hero-content");

  if (heroContent) {

    setTimeout(() => {
      heroContent.classList.add("hero-visible");
    }, 150);

  }


  /* =========================================
     HERO STAMP
  ========================================== */

  const heroStamp = document.querySelector(".hero-stamp");

  if (heroStamp) {

    setTimeout(() => {
      heroStamp.classList.add("stamp-visible");
    }, 700);

  }


  /* =========================================
     SMOOTH ANCHOR SCROLL
  ========================================== */

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

      const target = document.querySelector(this.getAttribute("href"));

      if (!target) return;

      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });


  /* =========================================
     MOUSE MOVEMENT EFFECT
  ========================================== */

  const hero = document.querySelector(".hero");

  if (hero && window.innerWidth > 850) {

    hero.addEventListener("mousemove", event => {

      const x =
        (event.clientX / window.innerWidth - 0.5) * 10;

      const y =
        (event.clientY / window.innerHeight - 0.5) * 10;

      if (heroBg) {
        heroBg.style.transform =
          `scale(1.05) translate(${x}px, ${y}px)`;
      }

    });

    hero.addEventListener("mouseleave", () => {

      if (heroBg) {
        heroBg.style.transform =
          "scale(1.05) translate(0,0)";
      }

    });

  }


  /* =========================================
     BUTTON MAGNETIC EFFECT
  ========================================== */

  const buttons = document.querySelectorAll(".btn");

  buttons.forEach(button => {

    button.addEventListener("mousemove", event => {

      if (window.innerWidth <= 850) return;

      const rect = button.getBoundingClientRect();

      const x =
        event.clientX - rect.left - rect.width / 2;

      const y =
        event.clientY - rect.top - rect.height / 2;

      button.style.transform =
        `translate(${x * 0.08}px, ${y * 0.08}px)`;

    });

    button.addEventListener("mouseleave", () => {

      button.style.transform = "";

    });

  });


  /* =========================================
     SERVICE HOVER ARROW
  ========================================== */

  document.querySelectorAll(".service").forEach(service => {

    const arrow = service.querySelector(".arrow");

    if (!arrow) return;

    service.addEventListener("mouseenter", () => {
      arrow.style.transform = "translate(5px,-5px)";
    });

    service.addEventListener("mouseleave", () => {
      arrow.style.transform = "";
    });

  });


  /* =========================================
     ACTIVE NAV LINK
  ========================================== */

  const sections = document.querySelectorAll(
    "#services, #process, #contact"
  );

  const navLinks = document.querySelectorAll(".nav nav a");

  const sectionObserver = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        navLinks.forEach(link => {
          link.classList.remove("active");
        });

        const activeLink =
          document.querySelector(
            `.nav nav a[href="#${entry.target.id}"]`
          );

        if (activeLink) {
          activeLink.classList.add("active");
        }

      });

    },
    {
      threshold: 0.45
    }
  );

  sections.forEach(section => {
    sectionObserver.observe(section);
  });


  /* =========================================
     CURRENT YEAR
  ========================================== */

  const year = document.querySelector("footer p:last-child");

  if (year) {
    year.textContent = `© ${new Date().getFullYear()} From China`;
  }


  /* =========================================
     CONSOLE BRAND MESSAGE
  ========================================== */

  console.log(
    "%cFROM CHINA",
    "font-size:28px;font-weight:bold;"
  );

  console.log(
    "%cYour eyes on the ground in China.",
    "font-size:14px;"
  );

});
