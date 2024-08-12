import { loadProductData } from './modelos/getData.js';
import { initCarrousel } from './modelos/carrousel.js';
import { themeToggle } from './modelos/themeToggle.js';
import { loadElementsWithDelay } from './modelos/loadElements.js';

document.addEventListener("DOMContentLoaded", () => {
  themeToggle();
  loadProductData();
  initCarrousel();
  loadElementsWithDelay();
});
