/* =========================================================
   COUNT UP FUNCTION
========================================================= */

function countUp(
  el,
  target,
  duration = 1200
) {
  let start = 0;
  const isFloat =
    target % 1 !== 0;
  const hasPlus =
    el.textContent.includes("+");
  const step = (timestamp) => {
    if (!start) {
      start = timestamp;
    }
    const progress =
      Math.min(
        (timestamp - start) / duration,
        1
      );
    const val =
      isFloat
        ? (progress * target).toFixed(2)
        : Math.floor(progress * target);
    el.textContent =
      hasPlus
        ? val + "+"
        : val;

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent =
        hasPlus
          ? target + "+"
          : (
              isFloat
                ? target.toFixed(2)
                : target
            );
    }
  };
  requestAnimationFrame(step);
}

/* =========================================================
   INTERSECTION OBSERVER
========================================================= */

const statsObserver =
  new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const nums =
            entry.target.querySelectorAll(
              ".stat-num"
            );
          nums.forEach((numEl) => {
            const raw =
              numEl.textContent.trim();
            const n =
              parseFloat(raw);
            if (
              !isNaN(n) &&
              n > 1
            ) {
              countUp(numEl, n);
            }
          });
          statsObserver.unobserve(
            entry.target
          );
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

/* =========================================================
   OBSERVE STATS
========================================================= */

const statsSection =
  document.querySelector(
    ".about-stats"
  );
if (statsSection) {
  statsObserver.observe(
    statsSection
  );
}