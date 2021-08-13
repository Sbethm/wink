//
const slides = document.querySelectorAll('#slide--img');
const headerBg = document.getElementById('headerBg');
const logo = document.getElementById('logo');

//CHANGING HEADER ON SCROLL
headerBg.addEventListener('scroll', )

//INDEX MAIN SLIDESHOW
setInterval(nextImg, 4000);

let currentImg = 0;
slides[currentImg].style.opacity = 1;

function nextImg() {
    slides[currentImg].style.opacity = 0;
    currentImg = (currentImg + 1) % slides.length;
    slides[currentImg].style.opacity = 1;
}