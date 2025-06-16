// Obtiene el botón del menú de tres líneas por su ID
const menuBtn = document.getElementById("menu-btn");

// Obtiene el contenedor de los enlaces de navegación por su ID
const navLinks = document.getElementById("nav-links");

// Dentro del botón del menú, selecciona el icono (etiqueta <i>)
const menuBtnIcon = menuBtn.querySelector("i");

// Añade un listener para el evento de clic en el botón del menú
menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");  // (muestra u oculta el menú)

  const isOpen = navLinks.classList.contains("open"); // Verifica si el menú está abierto

   // Cambia el ícono: 'x' si está abierto
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Si haces clic en cualquier enlace del menú:
navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open"); // Cierra el menú eliminando la clase "open"
  menuBtnIcon.setAttribute("class", "ri-menu-line"); // Vuelve a poner el icono del menú de tres líneas
});

// Se define una configuración base para animaciones de ScrollReveal
const scrollRevealOption = {
  distance: "50px",   // Distancia desde donde aparece el elemento. Aparecen desde 50px más abajo.
  origin: "bottom",   // Dirección desde la que aparece. Animan desde abajo hacia arriba.
  duration: 1000,     // Duración de la animación en milisegundos. Duran 1 segundo.
};

// Imagen del header: aparece desde la derecha.
ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,  // Usa las opciones generales
  origin: "right",        // Anula el origen para esta animación
});

// Título principal: con retardo.
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500, // Empieza 0.5 segundos después
});

// Párrafo: retardo de 1 segundo.
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});

// Formulario: 1.5 segundos de retardo.
ScrollReveal().reveal(".header__content form", {
  ...scrollRevealOption,
  delay: 1500,
});

// Barra inferior: retardo de 2 segundos.
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
  }, 200); // Luego de 200ms, se aplica un efecto de transformación (escalar).
});

// Se asegura que el botón tenga el cursor tipo mano al pasar el mouse.
document.querySelector('form button[type="submit"]').style.cursor = "pointer";