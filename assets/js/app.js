const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksLi = document.querySelectorAll('.nav-links li');

window.addEventListener('scroll', () => {
    if (this.scrollY >= 100) {
        navbar.classList.add('scrolled');
        hamburger.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
        hamburger.classList.remove('scrolled');
    }

    // Update active link based on scroll position
    let currentSection = '';
    const sections = document.querySelectorAll('section');
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 3 && scrollY < sectionTop + sectionHeight - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinksLi.forEach(li => {
        li.classList.remove('active');
        if (li.querySelector('a').getAttribute('href').includes(currentSection)) {
            li.classList.add('active');
        }
    });
});

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

navLinksLi.forEach(li => li.addEventListener('click', () => {
    navLinksLi.forEach(li => li.classList.remove('active'));
    li.classList.add('active');

    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
}));

// Typed.js
var options = {
    strings: [
        'Albor Ambiental',
        'Manejo de residuos industriales'
    ],
    typeSpeed: 50,
    backDelay: 2000,
    loop: true
};

var typed = new Typed('#hero-titles', options);
