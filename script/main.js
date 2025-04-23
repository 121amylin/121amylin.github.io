function handleCase_h() {
  let case_h = $(".caseSwiper .swiper-wrapper .swiper-slide").height() * 2 + 40;
  $(".caseSwiper .swiper-wrapper").height(case_h);
}

const bannerSwiper = new Swiper(".bannerSwiper", {
  pagination: {
    el: ".bannerSwiper .swiper-pagination",
    clickable: true,
  },
});

const bannerSwiper_pr = new Swiper(".bannerSwiper_pr", {
  pagination: {
    el: ".bannerSwiper_pr .swiper-pagination",
    type: "fraction",
    clickable: true,
  },
});

var caseSwiper = new Swiper(".caseSwiper", {
  slidesPerView: 2,
  grid: {
    rows: 2,
  },
  spaceBetween: 16,
  navigation: {
    nextEl: ".arrow-right",
    prevEl: ".arrow-left",
  },
  pagination: {
    el: ".caseSwiper .swiper-pagination",
    clickable: true,
  },
});

$(".popup-link").magnificPopup({ type: "image" });

new WOW().init();

//   $("#menu_default").simplemenu({});

// 主選單
window.addEventListener("load", () => {
  // 處理所有 dropdown
  document.querySelectorAll(".nav-item.dropdown").forEach((dropdown) => {
    dropdown.addEventListener("mouseenter", () => {
      const menu = dropdown.querySelector(".dropdown-menu");
      if (menu) {
        menu.classList.add("show");
        dropdown.classList.add("show");
      }
    });

    dropdown.addEventListener("mouseleave", () => {
      const menu = dropdown.querySelector(".dropdown-menu");
      if (menu) {
        menu.classList.remove("show");
        dropdown.classList.remove("show");

        // 移除所有子選單的 show
        menu.querySelectorAll(".dropdown-menu").forEach((submenu) => {
          submenu.classList.remove("show");
          submenu.parentElement?.classList.remove("show");
        });
      }
    });
  });

  // 處理所有子下拉選單（第二層）
  document.querySelectorAll(".dropdown-submenu").forEach((submenuWrapper) => {
    const parent = submenuWrapper.parentElement;

    parent?.addEventListener("mouseenter", () => {
      submenuWrapper.classList.add("show");
      parent.classList.add("show");
    });

    parent?.addEventListener("mouseleave", () => {
      submenuWrapper.classList.remove("show");
      parent.classList.remove("show");
    });
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  grid: {
    rows: 2,
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

handleCase_h();

$(window).on("resize", function () {
  handleCase_h();
});
