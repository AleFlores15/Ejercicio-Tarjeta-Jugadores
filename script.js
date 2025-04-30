// Obtener elementos del DOM
const verDetallesButton = document.getElementById('verDetalles');
const volverButton = document.getElementById('volver');
const tarjeta = document.querySelector('.tarjeta');

// Función para mostrar cara posterior
verDetallesButton.addEventListener('click', () => {
  tarjeta.classList.add('girada');
});

// Función para volver a la cara frontal
volverButton.addEventListener('click', () => {
  tarjeta.classList.remove('girada');
});
