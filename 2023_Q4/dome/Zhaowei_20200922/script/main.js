$(function () {
  // ==========================loading動畫引用==========================
  $("#loading-custom-overlay").loading({
    overlay: $("#loading-custom-overlay"),
  });
  setTimeout(function () {
    $("#loading-custom-overlay").loading("stop");
  }, 3000);


  // ==========================fullpage引用==========================


  function detectmob() {
    if ($(window).width() >= 1040) {
      //  console.log('桌機')
      $("#fullpage").fullpage({
        menu: "#menu",
        verticalCentered: true,
        anchors: ["area1", "area2", "area3", "area4", "area5"],
        scrollOverflow: true,
        autoScrolling: true,

        // 動畫
        onLeave: function (origin, destination, direction) {
          console.log("onLeave" + destination.anchor);
          

          if (destination.anchor == "area2") {
            $(".unit_ttit2").addClass("animated zoomIn").css({ "animation-duration": "1s", "animation-delay": "0.5s" });

            $(".about_container").addClass("animated bounceInUp").css({ "animation-duration": "1.5s", "animation-delay": "1s" });
          };

          if (destination.anchor == "area3") {
            $(".unit_ttit3").addClass("animated zoomIn").css({ "animation-duration": "1s", "animation-delay": "0.5s" });
            $(".server_item1 .server_text_box_l").addClass("animated fadeInLeftBig").css("animation-delay", "1s");
            $(".server_item1 .server_pic_box_r").addClass("animated fadeInRightBig").css("animation-delay", "1s");

            $(".server_item2 .server_pic_box_l").addClass("animated fadeInLeftBig").css("animation-delay", "2s");
            $(".server_item2 .server_text_box_r").addClass("animated fadeInRightBig").css("animation-delay", "2s");

            $(".server_item3 .server_text_box_l").addClass("animated fadeInLeftBig").css("animation-delay", "3s");
            $(".server_item3 .server_pic_box_r").addClass("animated fadeInRightBig").css("animation-delay", "3s");

            $(".server_item4 .server_pic_box_l").addClass("animated fadeInLeftBig").css("animation-delay", "4s");
            $(".server_item4 .server_text_box_r").addClass("animated fadeInRightBig").css("animation-delay","4s");
          };

          if (destination.anchor == "area4") {
            $(".unit_ttit4").addClass("animated zoomIn").css({ "animation-duration": "1s", "animation-delay": "0.5s" });

            $(".product_swiper_box").addClass("animated bounceInUp").css({ "animation-duration": "1.5s", "animation-delay": "1s" });
          };

          if (destination.anchor == "area5") {
            $(".unit_ttit5").addClass("animated zoomIn").css({ "animation-duration": "1s", "animation-delay": "0.5s" });
            $(".contact_text").addClass("animated fadeInDown").css({ "animation-duration": "1s", "animation-delay": "0.5s"});
            $(".contact_btn").addClass("animated zoomInDown").css("animation-delay", "1s");
          }
        }




      });
    } else {
      // console.log('手機')
      $(window).on('scroll', function () {
        var bottom_of_window = $(window).scrollTop();
        var bottom_of_object2 = $('.section.about').offset().top - $(window).height();
        var bottom_of_object3 = $('.section.server').offset().top - $(window).height();
        var bottom_of_object4 = $('.section.product').offset().top - $(window).height();
        var bottom_of_object5 = $('.section.contact').offset().top - $(window).height();

        // console.log(bottom_of_window)
        // console.log(bottom_of_object4)


        if (bottom_of_window > bottom_of_object2) {
          $(".unit_ttit2").addClass("animated zoomIn").css({
            "animation-duration": "1s",
            "animation-delay": "0.5s"
          });

          $(".about_container").addClass("animated bounceInUp").css({
            "animation-duration": "1.5s",
            "animation-delay": "1s"
          });
        }


        if (bottom_of_window > bottom_of_object3) {
          $(".unit_ttit3").addClass("animated zoomIn").css({
            "animation-duration": "1s",
            "animation-delay": "0.5s"
          });
          $(".server_item1 .server_text_box_l").addClass("animated fadeInLeftBig").css("animation-delay", "1s");
          $(".server_item1 .server_pic_box_r").addClass("animated fadeInRightBig").css("animation-delay", "1s");

          $(".server_item2 .server_pic_box_l").addClass("animated fadeInLeftBig").css("animation-delay", "2s");
          $(".server_item2 .server_text_box_r").addClass("animated fadeInRightBig").css("animation-delay", "2s");

          $(".server_item3 .server_text_box_l").addClass("animated fadeInLeftBig").css("animation-delay", "3s");
          $(".server_item3 .server_pic_box_r").addClass("animated fadeInRightBig").css("animation-delay", "3s");

          $(".server_item4 .server_pic_box_l").addClass("animated fadeInLeftBig").css("animation-delay", "4s");
          $(".server_item4 .server_text_box_r").addClass("animated fadeInRightBig").css("animation-delay", "4s");
        }


        if (bottom_of_window > bottom_of_object4) {
          $(".unit_ttit4").addClass("animated zoomIn").css({
            "animation-duration": "1s",
            "animation-delay": "0.5s"
          });

          $(".product_swiper_box").addClass("animated bounceInUp").css({
            "animation-duration": "1.5s",
            "animation-delay": "1s"
          });
        }


        if (bottom_of_window > bottom_of_object5) {
          $(".unit_ttit5").addClass("animated zoomIn").css({
            "animation-duration": "1s",
            "animation-delay": "0.5s"
          });
          $(".contact_text").addClass("animated fadeInDown").css({
            "animation-duration": "1s",
            "animation-delay": "0.5s"
          });
          $(".contact_btn").addClass("animated zoomInDown").css("animation-delay", "1s");

        }




      });
    }
  };

  detectmob();


  // ==========================responsiveTabs引用==========================
  $("#horizontalTab").responsiveTabs({
    // Start with the panels collapsed if the view is currently accordion based
    startCollapsed: "accordion",
    // Tabs can be collapsed
    // collapsible:true,
    // Tabs auto rotate
    rotate: false,
  });

  // 預設賭場介紹手機版第一項展開
  $('.r-tabs-accordion-title:first-child').addClass('r-tabs-state-active');
  $('#tab-1').addClass('r-tabs-state-active');
  $('#horizontalTab').on("click",function(){
    $('.r-tabs-state-default').removeClass('r-tabs-state-active')
  })

  // ==========================timelinr引用==========================

  
  $().timelinr({
    arrowKeys: "true",
  });


  //箭頭樣式

  $('.timeline_box').on('click',function(){
    $('.first_dates_a').hasClass('selected') ? $('#prev').addClass('opacitydown') : $('#prev').removeClass('opacitydown');

    $('.last_dates_a').hasClass('selected') ? $('#next').addClass('opacitydown') : $('#next').removeClass('opacitydown');
      
  })


  // ==========================fatNav引用==========================
  $.fatNav();

  // ==========================時間軸、頁籤區塊顯示隱藏切換==========================

  $(".timeline_btn").on("click", function () {
    event.preventDefault()
    $(".horizontalTab_btn").removeClass("now");
    $(this).addClass("now");
    $(".box1").addClass("now");
    $(".box2").removeClass("now");
  });  
  
  $(".horizontalTab_btn").on("click", function () {
    event.preventDefault()
    $(".timeline_btn").removeClass("now");
    $(this).addClass("now");
    $(".box2").addClass("now");
    $(".box1").removeClass("now");
  });


  // ==========================swiper載入==========================
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    // spaceBetween: 20,
    slidesPerGroup: 3,
    // loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 0,
        slidesPerGroup: 2,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    }
});



  // ==========================product翻牌==========================
  var cardChange = true;

  $('.card-wrap').on({
    click: function () {
      if (cardChange == true) {
        $(this).find(".card").addClass('show');
        cardChange = !cardChange;
        console.log(cardChange)
      } else {
        $(this).find(".card").removeClass('show');
        cardChange = !cardChange;
        console.log(cardChange)
      }
    },
    mouseenter: function (event) {
      event.stopPropagation();
      $(this).find(".card").addClass('show');

    },
    mouseleave: function (event) {
      event.stopPropagation();
      $(this).find(".card").removeClass('show');
    }

  });


  // ==========================banner 按鈕效果==========================
  // $(".banner_btn").on({
  //   mouseenter: function () {
  //     $(this).css("transform", "scale(1.1)").find('img').removeClass('have_an')
  //   },
  //   mouseleave: function () {
  //     $(this).css("transform", "scale(1)").find('img').addClass('have_an')
  //   }
  // })


  $('.sec-menu .mbtn1').click(function () {
    $("html, body").scrollTop($("#mbtn1").offset().top);
    return false;
  });

  $('.sec-menu .mbtn2').click(function () {
    $("html, body").scrollTop($("#mbtn2").offset().top);
    return false;
  });

  $('.sec-menu .mbtn3').click(function () {
    $("html, body").scrollTop($("#mbtn3").offset().top);
    return false;
  });

  $('.sec-menu .mbtn4').click(function () {
    $("html, body").scrollTop($("#mbtn4").offset().top);
    return false;
  });

  $('.sec-menu .mbtn5').click(function () {
    $("html, body").scrollTop($("#mbtn5").offset().top);
    return false;
  });



  


});



