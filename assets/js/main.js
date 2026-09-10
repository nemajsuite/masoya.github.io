(() => {
  "use strict";

  /* =========================================================
     ELEMENTS
  ========================================================== */

  const menuToggle =
    document.querySelector(".menu-toggle");

  const mobileMenu =
    document.querySelector("#mobile-menu");

  const year =
    document.querySelector("#year");

  /* =========================================================
     FOOTER YEAR
  ========================================================== */

  if (year) {
    year.textContent =
      new Date().getFullYear();
  }

  /* =========================================================
     MOBILE MENU
  ========================================================== */

  if (menuToggle && mobileMenu) {

    menuToggle.addEventListener(
      "click",
      () => {

        const isOpen =
          mobileMenu.classList.toggle("open");

        menuToggle.setAttribute(
          "aria-expanded",
          String(isOpen)
        );

        menuToggle.setAttribute(
          "aria-label",
          isOpen
            ? "Close menu"
            : "Open menu"
        );
      }
    );

    mobileMenu
      .querySelectorAll("a")
      .forEach((link) => {

        link.addEventListener(
          "click",
          () => {

            mobileMenu.classList.remove(
              "open"
            );

            menuToggle.setAttribute(
              "aria-expanded",
              "false"
            );

            menuToggle.setAttribute(
              "aria-label",
              "Open menu"
            );
          }
        );
      });
  }

  /* =========================================================
     REVEAL ANIMATION
  ========================================================== */

  const revealItems =
    document.querySelectorAll(".reveal");

  if (
    "IntersectionObserver" in window
  ) {

    const observer =
      new IntersectionObserver(
        (entries, obs) => {

          entries.forEach((entry) => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                "is-visible"
              );

              obs.unobserve(
                entry.target
              );
            }

          });

        },
        {
          threshold: 0.12
        }
      );

    revealItems.forEach(
      (item) =>
        observer.observe(item)
    );

  } else {

    revealItems.forEach(
      (item) =>
        item.classList.add(
          "is-visible"
        )
    );
  }

  /* =========================================================
     CLOSE MOBILE MENU WITH ESC
  ========================================================== */

  document.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key === "Escape" &&
        mobileMenu &&
        mobileMenu.classList.contains("open")
      ) {

        mobileMenu.classList.remove(
          "open"
        );

        if (menuToggle) {

          menuToggle.setAttribute(
            "aria-expanded",
            "false"
          );

          menuToggle.setAttribute(
            "aria-label",
            "Open menu"
          );
        }
      }

    }
  );

})();
