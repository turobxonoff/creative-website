const menuBtn = document.querySelector('#menu-icon');
const block = document.querySelector('.box');
const darkMode = document.getElementById('darkmode');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    block.classList.toggle('active');
}

window.onscroll = () => {
    menuBtn.classList.remove("fa-times");
    block.classList.remove("active");
}

darkMode.addEventListener('click', () => {
    darkMode.classList.toggle('fa-moon')
    document.body.classList.toggle('active');
})

// Scroll Reveal
const sr = ScrollReveal( {
    origin: 'left',
    distance: '40px',
    duration: 1000,
    reset: true
});
sr.reveal('.heading, .home .content, .services .service-items .service-item, .about .content, .watchingVideo p, .features-item, .pricing p, .contact h4, .share a', {interval:200});