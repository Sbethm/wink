//
const slides = document.querySelectorAll('#slide--img');

//
setInterval(nextImg, 3000);

//

let currentImg = 0;
slides[currentImg].style.opacity = 1;

function nextImg() {
    
    currentImg = (currentImg + 1) % slides.length;
    slides[currentImg].style.opacity = 1;
}