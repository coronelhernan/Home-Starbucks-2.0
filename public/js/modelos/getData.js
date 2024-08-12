// Funcion para cargar los productos desde el archivo Json
export function loadProductData() {
  const product = document.getElementById("producto");
  const productElement = document.querySelectorAll(".product-item");
  const nameProduct = document.getElementById("name-product");

  fetch("public/data/data.json")
    .then((response) => response.json())
    .then((data) => {
      let productosDisponibles = [...data.productos];
      const indexRandom = getIndexRandom(productosDisponibles.length);
      const productoPrincipalSeleccionado = productosDisponibles[indexRandom];
      
      product.src = productoPrincipalSeleccionado.src;
      nameProduct.textContent = productoPrincipalSeleccionado.name;
      productosDisponibles.splice(indexRandom, 1);

      function getIndexRandom(max) {
        return Math.floor(Math.random() * max);
      }

      // Mostrando los Productos para seleccionar
      productElement.forEach((product) => {
        // Si no hay producto disponible, salir del loop
        if (productosDisponibles.length === 0) {
          return; 
        }

        const indexRandom = getIndexRandom(productosDisponibles.length); 
        const productoSeleccionado = productosDisponibles[indexRandom];

        // Crear contenido del producto
        const imgProduct = document.createElement("img");
        imgProduct.src = productoSeleccionado.src;
        imgProduct.classList.add("product-img");
        imgProduct.dataset.name = productoSeleccionado.name; 
        product.appendChild(imgProduct);

        // Quitar productos repetidos
        productosDisponibles.splice(indexRandom, 1);
      });

      // Agregar evento Clic a las imágenes generadas
      document.querySelectorAll(".product-img").forEach((img) => {
        img.addEventListener("click", () => {
          product.src = img.src;
          nameProduct.textContent = img.dataset.name;
        });
      });
    })
    .catch((error) => console.error("Error al cargar el JSON:", error));
}