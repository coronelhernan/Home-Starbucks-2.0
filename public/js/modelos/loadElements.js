// Funcion para cargar los elementos con un tiempo de retraso
export function loadElementsWithDelay() {
  const elements = [
    document.getElementById("Logo"),
    document.querySelector(".nav-bar"),
    document.querySelector(".title-section"),
    document.querySelector(".main-text"),
    document.querySelector(".buttons"),
    document.querySelector(".carousel"),
    document.getElementById("producto"),
    document.getElementById("name-product")
  ];

  let initialDelay = 400; 
  let delayIncrement = 200; 

  elements.forEach((element, index) => {
    if (element) {
      setTimeout(() => {
        element.classList.add("visible");
      }, initialDelay + delayIncrement * index);
    }
  });
}