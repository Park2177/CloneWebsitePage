$(function () {
  const header = $('#header');
  const menuBtn = $('#header .menu_btn');
  const gnb = $('#header .gnb_wrap .gnb');
  const langBtn = $('#header .login_wrap .lang_btn');
  const mGnbArea = $('#header .m_gnb_area');
  let mainSlider2 = null;
  let total = $(
    '.main_slider2 .swiper-slide:not(.swiper-slide-duplicate)'
  ).length;
  gnb.on('mouseenter', function () {
    $('#header').addClass('on');
  });

  header.on('mouseleave', function () {
    $('#header').removeClass('on');
  });
  langBtn.on('mouseenter', function () {
    $(this).parent().addClass('on');
  });

  $('#header .login_wrap .lang_wrap').on('mouseleave', function () {
    $(this).removeClass('on');
  });

  menuBtn.on('click', function () {
    $(this).toggleClass('on');
    $('#header .m_gnb_area, #header .dimm, body').toggleClass('on');
  });

  $('#header .m_gnb>li').on('clcik', function () {
    $(this).addClass('on');
  });
  $('#header .m_gnb>li>a').on('click', function () {
    $(this).parent().toggleClass('on').siblings().removeClass('on');
  });
  $('#header .m_gnb_area .lang_wrap .lang_btn').on('click', function () {
    $(this).parent().addClass('on');
  });

  $('#quickMenu').on('click', function () {
    $(this).toggleClass('on');
  });

  // 메인슬라이더
  let mainSlider = new Swiper('.main_slider .swiper', {
    loop: true,
    autoplay: {
      disableOnInteraction: false,
      delay: 3000,
    },
    speed: 1000,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  let pagingSwiper = new Swiper('.main_slider .swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination2',
      type: 'fraction',
      renderFraction: (currentClass, totalClass) => {
        return (
          '<span class="' +
          currentClass +
          '"></span>' +
          '<span>-</span>' +
          '<span class="' +
          totalClass +
          '"></span>'
        );
      },
    },
  });
  mainSlider.controller.control = pagingSwiper;

  // 페이지네이션 재생 정지버튼
  var stop = 0;
  $('.swiper .swiper_btn').on('click', function () {
    if (stop == 0) {
      $(this).addClass('on');
      mainSlider.autoplay.stop();
      stop = 1;
    } else {
      $(this).removeClass('on');
      mainSlider.autoplay.start();
      stop = 0;
    }
  });

  // 메인슬라이더2
  $(window)
    .on('resize', function () {
      let w = $(this).outerWidth();

      if (w >= 768) {
        if (mainSlider2) mainSlider2.destroy(true, true);

        mainSlider2 = new Swiper('.main_slider2 .swiper', {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 25,
          loop: true,
          speed: 1000,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
            clickable: true,
          },

          navigation: {
            nextEl: '.swiper-button-prev-main_slider2',
            prevEl: '.swiper-button-prev-main_slider2',
          },
        });
        Math.round($('.main_slider2 .total_num').text(total / 2));
        mainSlider2.on('slideChange', function () {
          $('.main_slider2 .active_num').text(
            Math.round((mainSlider2.realIndex + 1) / 2)
          );
        });
      } else {
        if (mainSlider2) mainSlider2.destroy(true, true);

        mainSlider2 = new Swiper('.main_slider2 .swiper', {
          slidesPerView: 1,
          spaceBetween: 25,
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          speed: 1000,
          centeredSlides: true,
          pagination: {
            el: '.swiper-button-prev-main_slider2',
            type: '.swiper-button-prev-main_slider2',
          },
        });
        $('.main_slider2 .total_num').text(total);
        mainSlider2.on('slideChange', function () {
          $('.main_slider2 .active_num').text(mainSlider2.realIndex + 1);
        });
      }
    })
    .trigger('resize');

  let toggleSwiper = true;

  $('.main_slider2 .toggle_btn').on('click', function () {
    $(this).toggleClass('on');

    if (toggleSwiper) {
      mainSlider2.autoplay.stop();
      toggleSwiper = false;
    } else {
      mainSlider2.autoplay.start();
      toggleSwiper = true;
    }
  });

  // 메인슬라이더3
  let mainSlider3 = new Swiper('.main_slider3 .swiper', {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 300,
    slidesPerView: 'auto',
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // $(window)
  //   .on('resize', function () {
  //     let w = $(this).outerWidth();

  //     if (w >= 768) {
  //       if (mainSlider3) mainSlider3.destroy(true, true);

  //       mainSlider3 = new Swiper('.main_slider3 .swiper', {
  //         loop: true,
  //         autoplay: {
  //           delay: 4000,
  //         },
  //         speed: 300,
  //         slidesPerView: 'auto',
  //         centeredSlides: true,
  //         navigation: {
  //           nextEl: '.swiper-button-next',
  //           prevEl: '.swiper-button-prev',
  //         },
  //       });
  //     } else {
  //       if (mainSlider3) mainSlider3.destroy(true, true);

  //       mainSlider3 = new Swiper('.main_slider3 .swiper', {
  //         loop: true,
  //         autoplay: {
  //           delay: 4000,
  //         },
  //         speed: 300,
  //         slidesPerView: 5,
  //         centeredSlides: true,
  //       });
  //     }
  //   })
  //   .trigger('resize');

  // 메인슬라이더4
  function changeSwiperopt() {
    if (!$('.main_use').length) return;

    let mainUse = null;
    let toggleSwiper = true;

    $(window)
      .on('resize', function () {
        let w = $(this).outerWidth();

        if (w >= 768) {
          if (mainUse) mainUse.destroy(true, true);

          mainUse = new Swiper('.main_use .swiper', {
            slidesPerView: 3,
            spaceBetween: 24,
            pagination: {
              el: '.swiper-pagination',
            },
          });
        } else {
          if (mainUse) mainUse.destroy(true, true);

          mainUse = new Swiper('.main_use .swiper', {
            loop: true,
            slidesPerView: 'auto',
            centeredSlides: true,
            autoplay: {
              delay: 2000,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination',
              type: 'progressbar',
            },
          });

          let total = $(
            '.main_use .swiper-slide:not(.swiper-slide-duplicate)'
          ).length;
          $('.main_use .total_num').text(total);

          mainUse.on('slideChange', function () {
            $('.main_use .active_num').text(mainUse.realIndex + 1);
          });

          if (!toggleSwiper) {
            mainUse.autoplay.stop();
          }
        }
      })
      .trigger('resize');

    $('.main_use .toggle_btn').on('click', function () {
      $(this).toggleClass('on');

      if (toggleSwiper) {
        mainUse.autoplay.stop();
        toggleSwiper = false;
      } else {
        mainUse.autoplay.start();
        toggleSwiper = true;
      }
    });
  }
  changeSwiperopt();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 900) {
      $('.top_btn').fadeIn();
    } else {
      $('.top_btn').fadeOut();
    }
  });

  $('#footer .top_btn').on('click', function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });
});
