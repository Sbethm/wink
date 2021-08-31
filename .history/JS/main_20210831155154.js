//
const slides = document.querySelectorAll('#slide--img');
const headerBg = document.getElementById('headerBg');
const logo = document.getElementById('logo');

//CHANGING HEADER ON SCROLL
window.onscroll = function() {
    if (window.scrollY > 130) {
        headerBg.style.background = 'rgb(13, 81, 139)';
        headerBg.style.borderBottom = 'solid 1px rgb(13, 81, 139)';
        logo.style.color = 'rgb(13, 81, 139)';
    } else {
        headerBg.style.background = 'none';
        headerBg.style.borderBottom = 'solid 1px rgb(234, 240, 241)';
        logo.style.color = 'rgb(234, 240, 241)';
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

//SCROLL ANIMATIONS
const scrollElements = document.querySelectorAll(".js--scroll");
const fromLeftElements = document.querySelectorAll(".img--set--left");
const fromRightElements = document.querySelectorAll(".img--set--right");

    //When element is on screen or off scree
    const elementInView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight));
    };

    const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
    };

    //Fade-In & Fade-out functions
    const displayScrollElement = (element) => {
    element.classList.add("scrolled");
    };

    const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
    };

    //Shift left functions
    const shiftOnScreenLeft = (el) => {
        el.classList.add('shifted--from--left'); 
    }
    const shiftOffScreenLeft = (el) => {
        el.classList.remove('shifted--from--left');    
    }

    //Shift right functions
    const shiftOnScreenRight = (el) => {
        el.classList.add('shifted--from--right'); 
    }
    const shiftOffScreenRight = (el) => {
        el.classList.remove('shifted--from--right');    
    }


const handleOpacityAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el)) {
        displayScrollElement(el);
    } else if (elementOutofView(el)) {
        hideScrollElement(el)
    }
  })
}

const handleShiftAnimationLeft = () => {
    fromLeftElements.forEach((el) => {
    if (elementInView(el)) {
        shiftOnScreenLeft(el)
    } else if (elementOutofView(el)) {
        shiftOffScreenLeft(el)
    }
  })
}

const handleShiftAnimationRight = () => {
    fromRightElements.forEach((el) => {
    if (elementInView(el)) {
        shiftOnScreenRight(el)
    } else if (elementOutofView(el)) {
        shiftOffScreenRight(el)
    }
  })
}

window.addEventListener("scroll", () => { 
    handleOpacityAnimation();
    handleShiftAnimationLeft();
    handleShiftAnimationRight();
})

// const fadeEl = document.querySelectorAll('.js--scroll');

// fadeEl.forEach((el) => {
//     el.style.opacity = '0';
// });

// const elInView = (el) => {
//     const elementTop = el.getBoundingClientRect().top;
//     return (elementTop <= window.innerHeight || document.documentElement.clientHeight);
// }

// const displayElement = (el) => {
//     el.classList.add('scrolled');
// }

// const scrollAnimation = () => {
//     fadeEl.forEach((el) => {
//         if(elInView(el, 100)){
//             displayElement(el);
//         }
//     })
// }

// window.addEventListener("scroll", () => { 
//     scrollAnimation();
//   });

//SLIDE-IN