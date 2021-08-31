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
        headerBg.style.borderBottom = 'solid 1px rgb(13, 81, 139)';
        logo.style.color = 'rgb(13, 81, 139)';
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

//FADE-IN
const scrollElements = document.querySelectorAll(".js--scroll");
const fromLeftElements = document.querySelectorAll(".img--set--left");

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
    const shiftOnScreen = () => {
        fromLeftElements.forEach((el) => {
            el.classList.add('shifted--from--left'); 
        })    
    }
    const shiftOffScreen = () => {
        fromLeftElements.forEach((el) => {
            el.classList.remove('shifted--from--left');
        })    
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

const handleShiftAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el)) {
        shiftOnScreen(el);
    } else if (elementOutofView(el)) {
        shif
    }
  })
}

window.addEventListener("scroll", () => { 
    handleOpacityAnimation();
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