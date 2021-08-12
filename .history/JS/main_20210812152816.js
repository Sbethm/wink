//
const slides = document.querySelectorAll('#slide--img');

//
setInterval(nextImg, 3000);

//
slides

function nextImg() {
    let currentImg = 0;

    slides[currentImg].style.zIndex = 1;
}