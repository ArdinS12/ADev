// Hamburger menu toggle script
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    menuToggle.classList.toggle('active');
});

// Optional: Close menu when link clicked (on mobile)
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 700) {
            navMenu.classList.remove('open');
            menuToggle.classList.remove('active');
        }
    });
});
