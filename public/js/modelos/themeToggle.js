import { loadThemeFromLocalStorage, saveThemeToLocalStorage } from './themeStorage.js';
import { applyTheme } from './themeUtils.js';

// Función para alternar entre el tema claro y oscuro al hacer clic en el botón
export function themeToggle() {
  const btnToggle = document.getElementById('toggleTheme');

  // Cargar el tema desde localStorage al iniciar
  applyTheme(loadThemeFromLocalStorage());

  btnToggle.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('theme-light') ? 'light' : 'dark';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    // Aplicar el nuevo tema y guardar en localStorage
    applyTheme(newTheme);
    saveThemeToLocalStorage(newTheme);
  });
}