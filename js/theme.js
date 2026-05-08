/* =========================================================
   THEME TOGGLE
========================================================= */

const themeToggle =
  document.getElementById("themeToggle");
const themeIcon =
  document.getElementById("themeIcon");
const html =
  document.documentElement;

/* =========================================================
   LOAD SAVED THEME
========================================================= */

let savedTheme =
  localStorage.getItem("theme") ||
  "light";
html.setAttribute(
  "data-theme",
  savedTheme
);
themeIcon.className =
  savedTheme === "dark"
    ? "fas fa-sun"
    : "fas fa-moon";

/* =========================================================
   TOGGLE THEME
========================================================= */

themeToggle.addEventListener(
  "click",
  () => {
    const currentTheme =
      html.getAttribute("data-theme");
    const newTheme =
      currentTheme === "dark"
        ? "light"
        : "dark";
    html.setAttribute(
      "data-theme",
      newTheme
    );
    themeIcon.className =
      newTheme === "dark"
        ? "fas fa-sun"
        : "fas fa-moon";
    localStorage.setItem(
      "theme",
      newTheme
    );
  }
);