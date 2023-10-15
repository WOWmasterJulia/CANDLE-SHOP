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
    slidesPerView: 3,
    spaceBetween: 20,
  // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        },
    breakpoints: {
     320: {
      slidesPerView: 1, 
        },
    480: {
      slidesPerView: 2,
    //   spaceBetween: 30,
        }, 
    640: {
      slidesPerView: 3,
    //   spaceBetween: 40,
    },
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

// const swiper = new Swiper(".swiper", {
//   // Default parameters
//   slidesPerView: 1,
//   spaceBetween: 10,
//   // Responsive breakpoints
//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     // when window width is >= 480px
//     480: {
//       slidesPerView: 3,
//       spaceBetween: 30,
//     },
//     // when window width is >= 640px
//     640: {
//       slidesPerView: 4,
//       spaceBetween: 40,
//     },
//   },
// });