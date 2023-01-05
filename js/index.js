const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const darkModeBtn = document.querySelector('.dark-mode-btn');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})
