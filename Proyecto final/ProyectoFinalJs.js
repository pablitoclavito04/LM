// Obtiene el botón del menú de tres líneas por su ID
const menuBtn = document.getElementById("menu-btn");

// Obtiene el contenedor de los enlaces de navegación por su ID
const navLinks = document.getElementById("nav-links");

// Dentro del botón del menú, selecciona el icono (etiqueta <i>)
const menuBtnIcon = menuBtn.querySelector("i");

// Añade un listener para el evento de clic en el botón del menú
menuBtn.addEventListener("click", (e) => {
  // Alterna la clase "open" en el contenedor de enlaces (muestra u oculta el menú)
  navLinks.classList.toggle("open");

  // Verifica si el menú está abierto (tiene la clase "open")
  const isOpen = navLinks.classList.contains("open");

  // Cambia el icono según si el menú está abierto o cerrado
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Añade un listener para el clic en cualquier parte de los enlaces de navegación
navLinks.addEventListener("click", (e) => {
  // Cierra el menú eliminando la clase "open"
  navLinks.classList.remove("open");

  // Vuelve a poner el icono del menú de tres líneas
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// Opciones generales para las animaciones de ScrollReveal
const scrollRevealOption = {
  distance: "50px",   // Distancia desde donde aparece el elemento
  origin: "bottom",   // Dirección desde la que aparece
  duration: 1000,     // Duración de la animación en milisegundos
};

// Aplica ScrollReveal a la imagen del header con origen desde la derecha
ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,  // Usa las opciones generales
  origin: "right",        // Sobrescribe el origen solo para este elemento
});

// Aplica ScrollReveal al título (h1) del contenido del header con un retardo
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500, // Aparece después de 500ms
});

// Aplica ScrollReveal al párrafo del contenido del header con más retardo
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});

// Aplica ScrollReveal al formulario del header
ScrollReveal().reveal(".header__content form", {
  ...scrollRevealOption,
  delay: 1500,
});

// Aplica ScrollReveal a la barra inferior del contenido
ScrollReveal().reveal(".header__content .bar", {
  ...scrollRevealOption,
  delay: 2000,
});

// Aplica ScrollReveal a todas las tarjetas sobre la imagen del header
ScrollReveal().reveal(".header__image__card", {
  duration: 1000,  // Duración de cada animación
  interval: 500,   // Tiempo entre la aparición de cada tarjeta
  delay: 2500,     // Espera 2.5 segundos antes de comenzar
});

// ===== IMPLEMENTACIÓN PARA EL BOTÓN BUSCAR =====
// Prevenir el envío del formulario cuando se hace clic en "Buscar"
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault(); // Esto evita que el formulario se envíe
  
  setTimeout(() => {
    searchBtn.style.transform = "scale(1)";
  }, 200);
});

// Asegurar que el botón tenga el cursor pointer (por si acaso)
document.querySelector('form button[type="submit"]').style.cursor = "pointer";