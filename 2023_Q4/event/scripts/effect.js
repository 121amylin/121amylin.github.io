// 輪播圖
$('.fade').slick({
  dots: false,
  // infinite: true,
  speed: 1000,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 7000,
});
$('.fade2').slick({
  dots: false,
  // infinite: true,
  speed: 600,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 3500,
});

// 主選單

// e.preventDefualt();
$('.lgShow .menu li a').click(function (e) {
  // window.console.log($($(this).data('scroll')).offset().top);
  e.preventDefault();
  $('body, html').animate({
    scrollTop: ($($(this).data('scroll')).offset().top) + 1
  }, 1000);

  // add now class to links
  $(this).addClass('now').parent().siblings().find('a').removeClass('now');
});
//  calculate the body padding depends on nav 
// $('body').css('paddingTop', $('.lgShow').innerHeight());

// sync navbar links with section

$(window).scroll(function () {
  $('.section').each(function () {
    if ($(window).scrollTop() > $(this).offset().top) {
      var sectionId = $(this).attr('id');
      $('.lgShow .menu li a').removeClass('now');
      $('.lgShow .menu li a[data-scroll="#' + sectionId + '"]').addClass('now');
    }
  });
});

var ms = ($('.aboutA').offset().top);
$(window).on('scroll', function () {
  var nowTop = $(window).scrollTop();

  if (nowTop >= ms) {
    $('.lgShow .menu').fadeIn(500);
  } else {
    $('.lgShow .menu').fadeOut(500);
  };
});




// 行動版漢堡選單
$(".menuButton > a,.mobileMenu a").click(function () {
  $(".menuButton > a").toggleClass("change");
  $(".menu").slideToggle("slow");
  $(window).scrollTop(0); 
});



// 頁籤
// https://www.webdesigns.com.tw/jquery_tab.asp
// var $li = $('ul.tab-title li');
// $($li.eq(0).addClass('active').find('a').attr('href')).siblings('.tab-inner').hide();

// $li.click(function () {
//   $($(this).find('a').attr('href')).show().siblings('.tab-inner').hide();
//   $(this).addClass('active').siblings('.active').removeClass('active');
// });


$('ul.tab-title li').click(function () {
  var tab_id = $(this).attr('data-tab');

  $('ul.tab-title li').removeClass('active');
  $('.tab-inner').removeClass('active');

  $(this).addClass('active');
  $("#" + tab_id).addClass('active');
})