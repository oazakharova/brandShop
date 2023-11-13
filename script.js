'use strict';

let sloganDark = document.querySelector('.slogan-dark');
let navLogo = document.querySelector('.navLogo');
let menuClose = document.querySelector('.menuClose');

function toggleMenu() {
    sloganDark.classList.toggle('hidden');
}

navLogo.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);