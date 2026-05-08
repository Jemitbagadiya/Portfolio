/* =========================================================
   MOBILE EMAIL FIX
========================================================= */

document
  .querySelectorAll(
    'a[href*="mail.google.com"]'
  )

  .forEach((link) => {
    link.addEventListener(
      "click",
      function (e) {
        const isMobile =
          /Android|iPhone|iPad|iPod/i
          .test(navigator.userAgent);

        if (isMobile) {
          e.preventDefault();
          window.location.href =
            "mailto:jemitbagadiya5823@gmail.com?subject=Portfolio Contact";
        }
      }
    );
  });