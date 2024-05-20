document.getElementById('burger-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('menu').classList.toggle('active');
});

function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}
