//
const slides = document.querySelectorAll('#slide--img');

//
setInterval(nextImg, 3000);

//
function nextImg() {
    let currentImg = 0;

    slides[currentImg].style.zIndex = 1;
}