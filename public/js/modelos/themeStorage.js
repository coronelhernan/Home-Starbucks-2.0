// Funcion para guardar el tema en localStorage
export function saveThemeToLocalStorage(theme) {
  localStorage.setItem("theme", theme);
}

// Funcion para cargar el tema desde localStorage
export function loadThemeFromLocalStorage() {
  const theme = localStorage.getItem("theme");
  return theme ? theme : "light"; // Devuelve 'light' si no hay tema guardado
}