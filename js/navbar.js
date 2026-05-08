/* =========================================================
   SCROLL PROGRESS
========================================================= */

const scrollProgress =
  document.getElementById("scrollProgress");

window.addEventListener(
  "scroll",
  () => {
    const total =
      document.body.scrollHeight -
      window.innerHeight;
    const pct =
      (window.scrollY / total) * 100;
    scrollProgress.style.width =
      pct + "%";
  },
  { passive: true }
);

/* =========================================================
   NAVBAR
========================================================= */

const navbar =
  document.getElementById("navbar");
const navLinks =
  document.querySelectorAll(".nav-link");
const sections =
  document.querySelectorAll("section[id]");

window.addEventListener(
  "scroll",
  () => {

    navbar.classList.toggle(
      "scrolled",
      window.scrollY > 30
    );

    let current = "";
    sections.forEach((sec) => {
      if (
        window.scrollY >=
        sec.offsetTop - 120
      ) {
        current = sec.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (
        link.getAttribute("href") ===
        "#" + current
      ) {
        link.classList.add("active");
      }
    });
  },
  { passive: true }
);

/* =========================================================
   HAMBURGER
========================================================= */

const hamburger =
  document.getElementById("hamburger");
const navLinksEl =
  document.getElementById("navLinks");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinksEl.classList.toggle("open");
});

/* =========================================================
   CLOSE MOBILE MENU
========================================================= */

navLinksEl
  .querySelectorAll("a")
  .forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      navLinksEl.classList.remove("open");
    });
  });