// Selecciona el elemento de la barra de navegación
const navbar = document.querySelector('.navbar');
// Selecciona el menú hamburguesa
const hamburger = document.querySelector('.hamburger');
// Selecciona el contenedor de enlaces de navegación
const navLinks = document.querySelector('.nav-links');
// Selecciona todos los elementos de lista de enlaces de navegación
const navLinksLi = document.querySelectorAll('.nav-links li');

// Añade un event listener para el evento de scroll
window.addEventListener('scroll', () => {
    // Si el desplazamiento es mayor o igual a 100px, añade la clase 'scrolled' a la barra de navegación y al menú hamburguesa
    if (this.scrollY >= 100) {
        navbar.classList.add('scrolled');
        hamburger.classList.add('scrolled');
    } else {
        // Si el desplazamiento es menor a 100px, remueve la clase 'scrolled'
        navbar.classList.remove('scrolled');
        hamburger.classList.remove('scrolled');
    }

    // Actualiza el enlace activo basado en la posición de desplazamiento
    let currentSection = ''; // Inicializa la variable para la sección actual
    const sections = document.querySelectorAll('section'); // Selecciona todas las secciones
    const scrollY = window.scrollY;// Obtiene la posición de desplazamiento actual

    // Itera sobre cada sección para determinar la sección actual
    sections.forEach(section => {
        const sectionTop = section.offsetTop; // Obtiene la posición superior de la sección
        const sectionHeight = section.clientHeight; // Obtiene la altura de la sección
        // Verifica si la sección está en la vista actual
        if (scrollY >= sectionTop - sectionHeight / 3 && scrollY < sectionTop + sectionHeight - sectionHeight / 3) {
            currentSection = section.getAttribute('id'); // Establece la sección actual
        }
    });

    // Itera sobre cada enlace de navegación para actualizar la clase 'active'
    navLinksLi.forEach(li => {
        li.classList.remove('active'); // Remueve la clase 'active' de todos los enlaces
        // Añade la clase 'active' al enlace correspondiente a la sección actual
        if (li.querySelector('a').getAttribute('href').includes(currentSection)) {
            li.classList.add('active');
        }
    });
});


// Añade un event listener para el evento de click en el menú hamburguesa
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Alterna la clase 'active' en el contenedor de enlaces de navegación
    hamburger.classList.toggle('active'); // Alterna la clase 'active' en el menú hamburguesa
});

// Itera sobre cada elemento de lista de enlaces de navegación y añade un event listener para el evento de click
navLinksLi.forEach(li => li.addEventListener('click', () => {
    navLinksLi.forEach(li => li.classList.remove('active')); // Remueve la clase 'active' de todos los enlaces
    li.classList.add('active'); // Añade la clase 'active' al enlace clicado

    hamburger.classList.remove('active'); // Remueve la clase 'active' del menú hamburguesa
    navLinks.classList.remove('active'); // Remueve la clase 'active' del contenedor de enlaces de navegación
}));

// Typed.js // Configuración para la animación de Typed.js
var options = {
    strings: [
        'Albor Ambiental',
        'Manejo de residuos industriales'
    ],
    typeSpeed: 50, // Velocidad de tipeo
    backDelay: 2000, // Retardo antes de borrar
    loop: true // Bucle infinito de la animación
};

// Inicializa la animación Typed.js con las opciones configuradas
var typed = new Typed('#hero-titles', options);
