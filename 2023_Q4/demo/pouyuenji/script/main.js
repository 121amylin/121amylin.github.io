function init(){
  // add in Scrollbar
  // https://github.com/idiotWu/smooth-scrollbar/issues/49
  const fixedElem = document.querySelector('.header')
  const scrollbar = Scrollbar.init(
    document.querySelector("#scrollbar")
  );


  //https://www.youtube.com/watch?v=D0LgR6yUgbM
  //https://greensock.com/forums/topic/24610-scrolltrigger-with-smooth-scrollbar/
  //https://codepen.io/mikeK/pen/abNGeKZ
  ScrollTrigger.scrollerProxy(document.body, {
    scrollTop(value) {
      if (arguments.length) {
        scrollbar.scrollTop = value;
      }
      return scrollbar.scrollTop;
    },
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    }
  });
  scrollbar.addListener(ScrollTrigger.update);


  // fixed menu
  const header=document.querySelector('.header')
  scrollbar.addListener(function(status) {
    const offset = status.offset;
    fixedElem.style.top = offset.y + 'px';
    fixedElem.style.left = offset.x + 'px';
    if(status.offset.y>100){
      header.classList.add('leave_top')
    }else{
      header.classList.remove('leave_top')
    }
  });


  // scroll to about
  // https://github.com/idiotWu/smooth-scrollbar/blob/7d4057dee4f83672cda89544b658f06fe1295470/docs/api.md#scrollbarscrollto
  const scrollEl=document.querySelector('.scroll_el')
  scrollEl.addEventListener('click',function(){
    const toPosition=document.querySelector('.about').offsetTop*.55
    scrollbar.scrollTo(0, toPosition, 2000)
  })


  // set swiper height
  const bannerHeight =document.querySelector(".banner_swiper").offsetHeight;
  const bannerItem = document.querySelectorAll(".banner_swiper .item");
  bannerItem.forEach((item) => {
    item.style.height = bannerHeight + "px";
  });


  // add in banner swiper
  const swiper = new Swiper(".banner_swiper", {
    effect: "fade",
    centeredSlides: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    // pagination: {
    //   el: ".line",
    //   clickable: true,
    //   bulletActiveClass: "active",
    // },
  });


  // =================== gsap start===================
  // header
  // gsap.to(".menu_item", {
  //   duration:1,
  //   y:0,
  //   opacity:1,
  //   stagger: .05,
  //   // stagger:{
  //   //   from: "start",
  //   //   each: 0.1,
  //   // },
  //   ease: "expo.out",
  //   scrub: 1,
  //   delay:.1
  // });

  // gsap.to(".logo", {
  //   duration:1,
  //   rotationY: 0,
  //   opacity:1,
  //   scrub: 1,
  // });

  gsap.to(".menu_item", {
    duration:.5,
    opacity:1,
    scrub: 1,
  });

    gsap.to(".logo", {
    duration:.5,
    opacity:1,
    scrub: 1,
  });

  gsap.to(".sec_nav", {
    duration:.5,
    opacity:1 ,
    scrub: 1
  });

  gsap.to(".banner .mid_fz", {
    duration:.8,
    opacity:1 ,
    scrub: 1
  });

  gsap.to(".banner .line", {
    duration:.8,
    opacity:1 ,
    scrub: 1
  });

    gsap.to(".aid_area", {
    duration:.8,
    opacity:1 ,
    scrub: 1
  });


  //banner
  gsap.to(".gsap_banner_text_rotation_l", {
    duration:1.5,
    x:0,
    rotationY: 0,
    opacity:1 ,
    stagger: 0.4,
    scrub: 1,
    delay:.4
  });

  gsap.to(".gsap_banner_text_rotation_s", {
    duration:1.5,
    x:'+=1rem',
    rotationY: 0,
    opacity:1 ,
    scrub: 1,
    delay:.6
  });

  gsap.to(".banner_pic", {
    duration:1,
    y:0,
    scrub: 1,
    delay:1
  });


  gsap.to(".aid_area", {
    keyframes: [
      { duration:1,
        opacity:0 ,
        y:'60%' },
      { display: 'none' }
    ],
    scrollTrigger: {
      trigger: ".aid_area",
      start: "top 24%",
      end: "top 90%",
      scrub: 1,
      direction:1
    },
  });

    gsap.to(".aid_area", {
    keyframes: [
      { duration:1,
        opacity:1 ,
        y:0 },
      { display: 'block'}
    ],
    scrollTrigger: {
      trigger: ".aid_area",
      start: "bottom 80%",
      end: "top 70%",
      scrub: 1,
      // markers:true,
      direction:-1
    },
  });

  
  gsap.to('.gsap_banner_pic_move_b',{
    duration:1,
    // y:'-60%',
    marginTop: '-60%',
    scrollTrigger: {
      trigger: ".gsap_banner_pic_move_b",
      start: "top center",
      end: "bottom top",
      scrub: 2,
    }
  })


  //swiper_banner
  gsap.to('.about',{
    duration:1,
    scrollTrigger: {
      trigger: ".about",
      start: "top 80%",
      end: "bottom top",
      onEnter:(function(){
        document.querySelector('.banner_swiper').classList.add('is-show')
        swiper.autoplay.start()
      }),
    }
  })


  //pic_area
  // pic_item pic_item_1
  gsap.to(".pic_item_1", {
    duration:1,
    marginTop:'-=20%',
    scrollTrigger: {
      trigger: ".pic_area ",
      start: "top bottom",
      end: "bottom top",
      scrub: 2,
    // markers:true
    },
  });

  gsap.to(".pic_item_3", {
    duration:1,
    marginTop:'-=20%',
    scrollTrigger: {
      trigger: ".pic_area ",
      start: "top bottom",
      end: "bottom top",
      scrub: 2,
    // markers:true
    },
  });

  gsap.to(".pic_item_4", {
    duration:1,
    y:'-=20%',
    scrollTrigger: {
      trigger: ".pic_area ",
      start: "top bottom",
      end: "bottom top",
      scrub: 2,
    // markers:true
    },
  });



  //people into
  gsap.to('.into',{
    duration:1,
    scrollTrigger: {
      trigger: ".pic_area",
      start: "30% center",
      end: "bottom top",
      onEnter:(function(){
        console.log(1)
        document.querySelector('.into').classList.add('is-show')
      }),
      // markers:true
    }
  })


  gsap.from(".gsap_into_pic", {
    duration:1,
    marginTop:'+=9%',
    scrollTrigger: {
      trigger: ".pic_area",
      start: "30% center",
      end: "bottom top",
      scrub: 2,
    }
  });


  // =================== gsap end===================
}


window.addEventListener('load',function(){
  document.documentElement.classList.add("loading"),
  setTimeout(function() {
      document.documentElement.classList.remove("loading")
      init()
  }, 3000)
})