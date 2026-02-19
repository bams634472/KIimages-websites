const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");


menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());


//Initial Swipper
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
     763: {
      slidesPerView: 2,
    },
     1024: {
      slidesPerView: 3,
    },
  }
});


function displaynone(){
  const element = document.querySelector(".")
}

 const navbar = document.querySelector(".navbar");
  const linktop = document.querySelector(".top-link");

  console.log(navbar)
  

 window.addEventListener("scroll", function () {
    const scroll = window.pageYOffset;
    const navbarHeight = navbar.getBoundingClientRect().height;
    
    if(scroll > navbarHeight) {
      navbar.classList.add("fixed-nav")
    }
    else {
      navbar.classList.remove("fixed-nav");
    }

    if(scroll > 500) {
      linktop.classList.add("show-link")
    }
    else {
      linktop.classList.remove("show-link");

      
    }
  })