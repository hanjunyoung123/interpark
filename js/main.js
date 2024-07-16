window.onload = function () {
  // 상단의 마이페이지리스트 기능
  const mypageBt = document.querySelector(".mypage-bt");
  const mypageList = document.querySelector(".mypage-list");
  mypageBt.addEventListener("click", function () {
    mypageList.classList.toggle("showMypage");
  });
  // swiper ================
  // 프로모션 스와퍼기능
  const swPromotion = new Swiper(".sw-promotion", {
    slidesPerView: 1,
    spaceBetween: 24,
    breakpoints: {
      760: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 2,
      },
    },
    navigation: {
      nextEl: ".promotion .sw-next",
      prevEl: ".promotion .sw-prev",
    },
    pagination:{
      el:".sw-promotion-pg",
      clickable:true,
    },
    loop: true,
  });

 // 쇼핑의 스와이퍼 기능적용 
const swShopping = new Swiper(".sw-shopping" ,{
  navigation: {
    nextEl: ".shopping .sw-next",
    prevEl: ".shopping .sw-prev",
  },
  loop:true,
  slidesPerView: 1.8,
  grid:{
    rows:1,
    fill:"row",
  },
  spaceBetween:10,

  breakpoints: {
    320: {
      spaceBetween: 32,
        slidesPerView: 1.2,
        slidesPerGroup: 1,
        grid:{
          rows:1,
          fill:"row"
        },
    },
    900: {
      spaceBetween: 32,
        slidesPerView: 2,
        slidesPerGroup: 3,
        grid:{
          rows:2,
          fill:"row"
        },
    },
    1024:{
      spaceBetween: 32,
        slidesPerView: 3,
        slidesPerGroup: 3,
        grid:{
          rows:1,
          fill:"row"
        },
    },
    1280:{
      spaceBetween: 26,
        slidesPerView: 4,
        slidesPerGroup: 3,
        grid:{
          rows:1,
          fill:"row"
        },
    },
  }
})
const swTour = new Swiper(".sw-tour" ,{
    slidesPerView: 3,
  navigation: {
    nextEl: ".tour .sw-next",
    prevEl: ".tour .sw-prev",
  },

  loop:true,
  grid:{
    rows:2,
    fill:"row",
  },
  breakpoints: {
    320: {
      spaceBetween: 32,
        slidesPerView:1.2,
        grid:{
          rows:2,
          fill:"row"
        },
    },
    900: {
      spaceBetween: 32,
        slidesPerView:2,
        grid:{
          rows:6,
          fill:"row"
        },
    },
    1024:{
      spaceBetween: 32,
        slidesPerView: 2,
        slidesPerGroup: 3,
        grid:{
          rows:1,
          fill:"row"
        },
    },
    1280:{
      spaceBetween: 26,
        slidesPerView: 3,
        slidesPerGroup: 3,
        grid:{
          rows:1,
          fill:"row"
        },
    },
  }
});
// 티켓 스와이퍼
const swTikcet = new Swiper(".sw-ticket" ,{
    slidesPerView: 3,
  navigation: {
    nextEl: ".ticket .sw-next",
    prevEl: ".ticket .sw-prev",
  },
  loop:true,
  grid:{
    rows:2,
    fill:"row"
  },
  breakpoints: {
    320: {
      spaceBetween: 32,
        slidesPerView:1.2,
        grid:{
          rows:2,
          fill:"row"
        },
    },
    900: {
      spaceBetween: 32,
        slidesPerView:2,
        grid:{
          rows:6,
          fill:"row"
        },
    },
    1024:{
      spaceBetween: 32,
        slidesPerView: 2,
        slidesPerGroup: 3,
        grid:{
          rows:1,
          fill:"row"
        },
    },
    1280:{
      spaceBetween: 26,
        slidesPerView: 3,
        slidesPerGroup: 3,
        grid:{
          rows:1,
          fill:"row"
        },
    },
  }
});
}
