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



// 主選單



$('.gg-arrow-right').on('click',function(){
  $(this).siblings('.dropdown-menu').toggleClass('show')
})



$(window).on('load', function() {
  function setupDropdownBehavior() {
    if ($(window).width() >= 992) {
      // 桌機版：hover 展開子選單，點箭頭也可以展開
      $('.nav-item.dropdown, .dropdown-submenu').on('mouseenter', function() {
        $(this).addClass('show');
        $(this).find('> .dropdown-menu').addClass('show');
      }).on('mouseleave', function() {
        $(this).removeClass('show');
        $(this).find('> .dropdown-menu').removeClass('show');
      });

      // 點箭頭展開收合
      $('.dropdown-arrow').off('click').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        const $parent = $(this).closest('.dropdown-item, .dropdown-toggle-wrap').parent();
        const $submenu = $parent.find('> .dropdown-menu');

        if ($submenu.length) {
          $submenu.toggleClass('show');
          $parent.toggleClass('show');
        }
      });

    } else {
      // 手機版：禁止 hover
      $('.nav-item.dropdown, .dropdown-submenu').off('mouseenter mouseleave');

      // 點箭頭展開收合
      $('.dropdown-arrow').off('click').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        const $parent = $(this).closest('.dropdown-item, .dropdown-toggle-wrap').parent();
        const $submenu = $parent.find('> .dropdown-menu');

        if ($submenu.length) {
          $submenu.toggleClass('show');
          $parent.toggleClass('show');
        }
      });
    }

    // 無論桌機/手機，都確保點 a 會正常跳轉
    $('.dropdown-link').off('click').on('click', function(e) {
      e.stopPropagation(); 
      // 不阻止預設行為，讓 href 正常跳轉
    });
  }

  // 一開始就執行一次
  setupDropdownBehavior();

  // 窗口尺寸改變時重新設置
  $(window).on('resize', function() {
    setupDropdownBehavior();
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
