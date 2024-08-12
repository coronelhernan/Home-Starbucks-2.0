export function applyTheme(theme) {
  const body = document.body;
  const nav = document.querySelector(".nav-bar");
  const section = document.querySelector(".main");
  const btnToggle = document.getElementById("toggleTheme");

  if (theme === "dark") {
    body.classList.add("theme-dark");
    body.classList.remove("theme-light");
    nav.classList.add("theme-dark");
    nav.classList.remove("theme-light");
    section.classList.add("theme-dark");
    section.classList.remove("theme-light");
    btnToggle.classList.remove("bi-moon");
    btnToggle.classList.add("bi-brightness-low-fill");
  } else {
    body.classList.add("theme-light");
    body.classList.remove("theme-dark");
    nav.classList.add("theme-light");
    nav.classList.remove("theme-dark");
    section.classList.add("theme-light");
    section.classList.remove("theme-dark");
    btnToggle.classList.remove("bi-brightness-low-fill");
    btnToggle.classList.add("bi-moon");
  }
}