//
const slides = document.querySelectorAll('#slide--img');
const headerBg = document.getElementById('headerBg');
const logo = document.getElementById('logo');

//CHANGING HEADER ON SCROLL
window.onscroll = function() {
    if (window.scrollY > 130) {
        headerBg.style.background = 'none';
        headerBg.style.borderBottom = 'solid 1px aliceblue';
        logo.style.color = 'aliceblue';
    } else {
        headerBg.style.background = 'aliceblue';
    }
  }

//INDEX MAIN SLIDESHOW
setInterval(nextImg, 4000);

let currentImg = 0;
slides[currentImg].style.opacity = 1;

function nextImg() {
    slides[currentImg].style.opacity = 0;
    currentImg = (currentImg + 1) % slides.length;
    slides[currentImg].style.opacity = 1;
}