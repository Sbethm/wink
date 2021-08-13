//
const slides = document.querySelectorAll('#slide--img');
const headerBG = document.getElementById('headerBg');
const logo = document.getElementById('logo');

//CHANGING HEADER ON SCROLL
headerBg

//INDEX MAIN SLIDESHOW
setInterval(nextImg, 4000);

let currentImg = 0;
slides[currentImg].style.opacity = 1;

function nextImg() {
    slides[currentImg].style.opacity = 0;
    currentImg = (currentImg + 1) % slides.length;
    slides[currentImg].style.opacity = 1;
}