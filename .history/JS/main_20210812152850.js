//
const slides = document.querySelectorAll('#slide--img');

//
setInterval(nextImg, 3000);

//
slides[currentImg].style.opacity = 0;

function nextImg() {
    let currentImg = 0;

    slides[currentImg].style.opacity = 1;
}