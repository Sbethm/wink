//
const slides = document.querySelectorAll('#slide--img');

//
setInterval(nextImg, 3000);

//

let currentImg = 0;
slides[currentImg].style.opacity = 1;

function nextImg() {
    

    slides[currentImg].style.opacity = 1;
}