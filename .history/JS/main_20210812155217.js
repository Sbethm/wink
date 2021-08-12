//
const slides = document.querySelectorAll('#slide--img');

//
setInterval(nextImg, 3500);

//

let currentImg = 0;
slides[currentImg].style.opacity = 1;

function nextImg() {
    slides[currentImg].style.opacity = 0;
    currentImg = (currentImg + 1) % slides.length;
    slides[currentImg].style.opacity = 1;
}