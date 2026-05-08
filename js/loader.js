/* =========================================================
   LOADER
========================================================= */

const loaderPercent =
  document.getElementById("loaderPercent");
let count = 0;
const loaderInterval = setInterval(() => {
  count++;
  loaderPercent.textContent = count + "%";
  if (count >= 100) {
    clearInterval(loaderInterval);
  }
}, 15);

/* =========================================================
   HIDE LOADER
========================================================= */

window.addEventListener("load", () => {
  setTimeout(() => {
    document
      .getElementById("loader")
      .classList.add("hidden");
  }, 1700);
});