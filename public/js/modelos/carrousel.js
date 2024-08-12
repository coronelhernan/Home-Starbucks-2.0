// Funcion para inicializar el carousel
export function initCarrousel() {
  const prevButton = document.getElementById("prev-slide");
  const nextButton = document.getElementById("next-slide");
  const carouselInner = document.querySelector(".carousel-inner");
  const items = document.querySelectorAll(".carousel-item");
  const itemWidth = items[0].getBoundingClientRect().width; // Obtén el ancho de un ítem
  let index = 0;

  // Funcion para actualizar el carousel
  function updateCarousel() {
    const offset = -index * itemWidth; // Usa el ancho del ítem para calcular el desplazamiento
    carouselInner.style.transform = `translateX(${offset}px)`; // Usa píxeles para el desplazamiento

    // Oculta o muestra los botones según la posición
    prevButton.style.display = index === 0 ? "none" : "block";
    nextButton.style.display = index === items.length - 1 ? "none" : "block";
  }

  nextButton.addEventListener("click", () => {
    index = (index + 1) % items.length; // Avanza al siguiente ítem
    updateCarousel();
  });

  prevButton.addEventListener("click", () => {
    index = (index - 1 + items.length) % items.length; // Retrocede al ítem anterior
    updateCarousel();
  });

  // Inicializa el carrusel con la visibilidad correcta de los botones
  updateCarousel();
}