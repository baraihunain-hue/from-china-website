/* =========================================================
   FROM CHINA
   PREMIUM WEBSITE INTERACTIONS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


  /* =======================================================
     NAVIGATION SCROLL EFFECT
  ======================================================= */

  const nav = document.querySelector(".nav");

  function updateNavbar() {

    if (!nav) return;

    if (window.scrollY > 60) {

      nav.classList.add("nav-scrolled");
      nav.classList.add("scrolled");

    } else {

      nav.classList.remove("nav-scrolled");
      nav.classList.remove("scrolled");

    }

  }

  updateNavbar();

  window.addEventListener(
    "scroll",
    updateNavbar,
    { passive: true }
  );



  /* =======================================================
     MOBILE MENU
  ======================================================= */

  const menuButton = document.querySelector(".menu");
  const navLinks = document.querySelector(".nav nav");

  if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

      const isOpen =
        navLinks.classList.toggle("mobile-open");

      menuButton.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

      menuButton.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';

    });


    /* Close mobile menu after clicking a link */

    navLinks.querySelectorAll("a").forEach(link => {

      link.addEventListener("click", () => {

        navLinks.classList.remove("mobile-open");

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );

        menuButton.innerHTML =
          '<i class="fa-solid fa-bars"></i>';

      });

    });

  }



  /* =======================================================
     SCROLL REVEAL
  ======================================================= */

  const revealElements =
    document.querySelectorAll(".reveal");


  const revealObserver =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add("revealed");
            entry.target.classList.add("animate-in");

            revealObserver.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px"
      }
    );


  revealElements.forEach(element => {

    revealObserver.observe(element);

  });



  /* =======================================================
     SERVICE STAGGER ANIMATION
  ======================================================= */

  const services =
    document.querySelectorAll(".service-reveal");


  const serviceObserver =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            const items =
              entry.target.parentElement
                ? entry.target.parentElement
                    .querySelectorAll(".service-reveal")
                : [];


            items.forEach((item, index) => {

              item.style.transitionDelay =
                `${index * 0.12}s`;

              item.classList.add(
                "animate-in"
              );

            });


            serviceObserver.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.1
      }
    );


  services.forEach(service => {

    serviceObserver.observe(service);

  });



  /* =======================================================
     TIMELINE STAGGER
  ======================================================= */

  const timelineItems =
    document.querySelectorAll(
      ".timeline-reveal"
    );


  const timelineObserver =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            const parent =
              entry.target.closest(
                ".timeline"
              );


            if (parent) {

              const items =
                parent.querySelectorAll(
                  ".timeline-reveal"
                );


              items.forEach(
                (item, index) => {

                  item.style.transitionDelay =
                    `${index * 0.12}s`;

                  item.classList.add(
                    "animate-in"
                  );

                }
              );

            }


            timelineObserver.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.1
      }
    );


  timelineItems.forEach(item => {

    timelineObserver.observe(item);

  });



  /* =======================================================
     AUDIENCE STAGGER
  ======================================================= */

  const audienceItems =
    document.querySelectorAll(
      ".audience-reveal"
    );


  const audienceObserver =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            const parent =
              entry.target.closest(
                ".audience-grid"
              );


            if (parent) {

              parent
                .querySelectorAll(
                  ".audience-reveal"
                )
                .forEach(
                  (item, index) => {

                    item.style.transitionDelay =
                      `${index * 0.1}s`;

                    item.classList.add(
                      "animate-in"
                    );

                  }
                );

            }


            audienceObserver.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.1
      }
    );


  audienceItems.forEach(item => {

    audienceObserver.observe(item);

  });



  /* =======================================================
     EVIDENCE FLOW
  ======================================================= */

  const evidenceFlow =
    document.querySelector(
      ".evidence-flow"
    );


  if (evidenceFlow) {

    const evidenceObserver =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (entry.isIntersecting) {

              evidenceFlow.classList.add(
                "revealed"
              );

              evidenceObserver.unobserve(
                evidenceFlow
              );

            }

          });

        },
        {
          threshold: 0.15
        }
      );


    evidenceObserver.observe(
      evidenceFlow
    );

  }



  /* =======================================================
     HERO STAMP
  ======================================================= */

  const heroStamp =
    document.querySelector(
      ".hero-stamp"
    );


  if (heroStamp) {

    setTimeout(() => {

      heroStamp.classList.add(
        "stamp-visible"
      );

    }, 900);

  }



  /* =======================================================
     HERO PARALLAX
  ======================================================= */

  const hero =
    document.querySelector(".hero");

  const heroBackground =
    document.querySelector(".hero-bg");


  if (
    hero &&
    heroBackground &&
    window.matchMedia(
      "(prefers-reduced-motion: no-preference)"
    ).matches
  ) {

    window.addEventListener(
      "scroll",
      () => {

        const scroll =
          window.scrollY;

        if (scroll < hero.offsetHeight) {

          heroBackground.style.transform =
            `scale(1.04) translateY(${scroll * 0.08}px)`;

        }

      },
      { passive: true }
    );

  }



  /* =======================================================
     SMOOTH ANCHOR SCROLLING
  ======================================================= */

  document
    .querySelectorAll(
      'a[href^="#"]'
    )
    .forEach(link => {

      link.addEventListener(
        "click",
        event => {

          const targetId =
            link.getAttribute("href");


          if (
            !targetId ||
            targetId === "#"
          ) {
            return;
          }


          const target =
            document.querySelector(
              targetId
            );


          if (!target) return;


          event.preventDefault();


          const navHeight =
            nav
              ? nav.offsetHeight
              : 0;


          const targetPosition =
            target.getBoundingClientRect()
              .top +
            window.scrollY -
            navHeight;


          window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
          });

        }
      );

    });



  /* =======================================================
     BUTTON MAGNETIC FEEL
  ======================================================= */

  const buttons =
    document.querySelectorAll(
      ".btn"
    );


  buttons.forEach(button => {

    button.addEventListener(
      "mousemove",
      event => {

        if (
          window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          ).matches
        ) {
          return;
        }


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

      }
    );


    button.addEventListener(
      "mouseleave",
      () => {

        button.style.transform = "";

      }
    );

  });



  /* =======================================================
     EXTERNAL LINKS
  ======================================================= */

  document
    .querySelectorAll(
      'a[target="_blank"]'
    )
    .forEach(link => {

      link.setAttribute(
        "rel",
        "noopener noreferrer"
      );

    });



  /* =======================================================
     CONSOLE MESSAGE
  ======================================================= */

  console.log(
    "%cFROM CHINA",
    "font-size:20px;font-weight:800;"
  );

  console.log(
    "Your Eyes on the Ground in China."
  );

});
