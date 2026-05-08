/* =========================================================
   CARD TILT EFFECT
========================================================= */

document
  .querySelectorAll(
    ".skill-card, .project-card, .exp-card"
  )
  .forEach((card) => {

    /* MOUSE MOVE */
    card.addEventListener(
      "mousemove",
      (e) => {
        const rect =
          card.getBoundingClientRect();
        const x =
          e.clientX - rect.left;
        const y =
          e.clientY - rect.top;
        const cx =
          rect.width / 2;
        const cy =
          rect.height / 2;
        const rotX =
          ((y - cy) / cy) * -5;
        const rotY =
          ((x - cx) / cx) * 5;
        card.style.transform =
          `
          perspective(800px)
          rotateX(${rotX}deg)
          rotateY(${rotY}deg)
          translateY(-6px)
          `;
      }
    );

    /* RESET */
    card.addEventListener(
      "mouseleave",
      () => {
        card.style.transform = "";
      }
    );
  });