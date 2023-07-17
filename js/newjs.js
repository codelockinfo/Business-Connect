$(document).ready(function () {
    $('.your-class').slick({
      infinite: true,
      arrows: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  });
  $(document).ready(function () {


    $('.connectslider').slick({
      speed: 500,
      autoplaySpeed: 2000,
      arrows: false,
      dots: false,
      infinite: false,
      slidesToShow: 4.2,
      slidesToScroll: 1,

      autoplay: true,
      //   centerMode: true,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3.8,
            slidesToScroll: 1,
            infinite: true,

          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2.8,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 620,
          settings: {
            slidesToShow: 1.8,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }

      ]
    });

    $('.card-slider').slick({
      speed: 500,
      autoplaySpeed: 2000,
      arrows: false,
      dots: true,
      infinite: false,
      slidesToShow: 4.2,
      slidesToScroll: 1,

      autoplay: true,
      //   centerMode: true,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3.8,
            slidesToScroll: 1,
            infinite: true,

          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2.8,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 620,
          settings: {
            slidesToShow: 1.8,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }

      ]
    });
  });
  //-------slick slider------
  $('.autoplay').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      }
    ]
  });
  $('.reponsive-slider').slick({
    rows: 2,
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1

  });