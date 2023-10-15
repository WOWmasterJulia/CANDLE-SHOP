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


const swiperTwo = new Swiper(".sertificates__slider", {
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