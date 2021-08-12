//
const slides = document.querySelectorAll('#slide--img');

//
setInterval(nextImg, 3000);

//
slides[currentImg].style.opacity

function nextImg() {
    let currentImg = 0;

    slides[currentImg].style.opacity = 1;
}