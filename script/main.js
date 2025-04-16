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
  document
    .querySelectorAll(".nested-dropdown-menu .dropdown-toggle")
    .forEach((dropdown) => {
      dropdown.addEventListener("click", (event) => {
        // 避免打開內部下拉選單，外部被關閉
        event.stopPropagation();
      });

      dropdown.addEventListener("hidden.bs.dropdown", (event) => {
        const subDropdown =
          event.target.parentElement.querySelector(".dropdown-submenu");

        // 如果是關閉下拉選單，子下拉選單也一併關閉
        subDropdown.querySelectorAll(".show").forEach(
          /** @param {HTMLElement} element */ (element) => {
            element.classList.remove("show");
          }
        );
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
