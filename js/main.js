$(function(){

  $('.banner-section__slider').slick({
    dots: true,
    prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 969,
        settings: {
          arrows: false
        }
      }
    ]
  });

  $('.tab').on('click', function (e) {
    e.preventDefault();

    $($(this).siblings()).removeClass('tab--active');
    $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');

    $('.products-slider').slick('setPosition');
  });

  $('.products-item__favorite').on('click', function () {
    $(this).toggleClass('products-item__favorite--active')
  });

  $('.products-slider').slick({
    slidesToShow: 4,
    prevArrow: '<button class="products-slider__slider-btn products-slider__slider-btnprev"><img src="images/arrow-black-left.svg" alt=""></button>',
    nextArrow: '<button class="products-slider__slider-btn products-slider__slider-btnnext"><img src="images/arrow-black-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false
        }
      }
    ]
  });

  $('.filter-style').styler();

  $('.filter__item-drop, .filter__extra').on('click', function () {
    $(this).toggleClass('filter__item-drop--active');
    $(this).next().slideToggle(200);
  });

  var $range = $(".js-range-slider");
    var $inputFrom = $(".js-input-from");
    var $inputTo = $(".js-input-to");
    var instance;
    var min = 0;
    var max = 1500000;
    var from = 100000;
    var to = 500000;

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        grid: false,
        min: min,
        max: max,
        from: 100000,
        to: 500000,
        onStart: updateInputs,
        onChange: updateInputs,
    });

    instance = $range.data("ionRangeSlider");

    function updateInputs (data) {
        from = data.from;
        to = data.to;

        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);
    }

    $inputFrom.on("input", function () {
        var val = $(this).prop("value");

        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }

        instance.update({
            from: val
        });
    });

    $inputTo.on("input", function () {
        var val = $(this).prop("value");

        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            to: val
        });
    });

  $('.catalog__filter-btngrid').on('click', function () {
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
    $('.products-item__wrapper').removeClass('products-item__wrapper--list');
  });

  $('.catalog__filter-btnline').on('click', function () {
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
    $('.products-item__wrapper').addClass('products-item__wrapper--list');
  });

  $(".rate-yo").rateYo({
    normalFill: "#c4c4c4",
    ratedFill: "#1C62CD",
    spacing: "7px"
  });

  $('.menu__btn').on('click', function () {
    $('.menu-mobile__list').toggleClass('menu-mobile__list--active');
  });

  $('.footer__top-drop').on('click', function () {
    $(this).toggleClass('footer__top-drop--active');
    $(this).next().toggleClass('footer-list--active');
  });

  $('.aside__btn').on('click', function () {
    $(this).next().slideToggle();
  });


});