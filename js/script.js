let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('open')
};

const sr = ScrollReveal ({
    distance: '40px',
    duration: 2500,
    reset: true
});

sr.reveal('.logo',{delay:200, origin: 'left'});
sr.reveal('.navbar',{delay:300, origin: 'top'})
sr.reveal('.menu-btn',{delay:500, origin: 'right'});

sr.reveal('.home-text span',{delay:580, origin: 'top'});
sr.reveal('.home-text h1',{delay:650, origin: 'left'});
sr.reveal('.home-text p',{delay:700, origin: 'right'});
sr.reveal('.main-btn',{delay:790, origin: 'left'});

sr.reveal('.share',{delay:890, origin: 'buttom'});

sr.reveal('.home-img',{delay:950, origin: 'right'});