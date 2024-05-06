const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector(".header__menu-list");

menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('menu--open');
});



const swiperOne = new Swiper(".feedback__slider", {
  // Optional parameters
//   direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

  // And if we need scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
});


const swiperTwo = new Swiper(".certificates__slider", {
  // Optional parameters
//   direction: "vertical",
    loop: true,
    // slidesPerView: 3,
    spaceBetween: 20,
  // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        },
    breakpoints: {
     640: {
      slidesPerView: 3, 
        },
    480: {
      slidesPerView: 2,
    //   spaceBetween: 30,
        }, 
    320: {
      slidesPerView: 1,
    //   spaceBetween: 40,
    },
  },
});


const accordeon = document.querySelector('.accordeon');
const accordeonTitles = accordeon.querySelectorAll('.accordeon__title');

accordeonTitles.forEach.call(accordeonTitles, function (accordeonTitle) {
  accordeonTitle.addEventListener('click', function () {
    
    const currentText = accordeonTitle.parentElement.querySelector('.accordeon__text');

    accordeonTitle.classList.toggle('accordeon__title--active');
    currentText.classList.toggle('accordeon__text--visible');

    if (currentText.classList.contains('accordeon__text--visible')) {
      currentText.style.maxHeight = currentText.scrollHeight + 'px'
    } else {
      currentText.style.maxHeight = null;
    }
    
  });
});


// ANIMATION
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active');
      } else {
        if (!animItem.classList.contains("_anim-no-hide")) {
          animItem.classList.remove("_active");
        }
          
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  setTimeout(() => {
    animOnScroll();
  }, 300);  
}