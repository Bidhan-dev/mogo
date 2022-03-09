$(function(){
    $('.banner_image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        speed:1000,
      });
    $('.item_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        speed:1000,
        pauseOnHover:false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2, 
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1, 
            }
          },
        ]
      });
    $('.team_slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        speed:1000,
        pauseOnHover:false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2, 
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1, 
            }
          },
        ]
      }); 
    $('.comment_main_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:true,
        speed:1000,
        pauseOnHover:false,
        nextArrow:".rights",
        prevArrow:".lefts ",
      }); 

      $('.counter').counterUp({
        delay: 10,
        time: 2500
    });


    $(window).scroll(function(){
      var box = $(this).scrollTop()
      if(box > 300){
        $(".navbar").addClass("shadow_menu")
      }
        else{
          $(".navbar").removeClass("shadow_menu") 
      } 
      
      if(box > 300){
        $(".back_to_top").fadeIn(300)
      }
      else{
        $(".back_to_top").fadeOut(300)
      }
    })

    $(".back_to_top").click(function(){
      $("html,body").animate({scrollTop: 0},1000)
    })


    new VenoBox({
      selector: '.my-image-links',
      numeration: true,
      infinigall: true,
      share: true,
      spinner: 'rotating-plane'
    });
    new VenoBox({
      selector: '.my-video-links',
      numeration: true,
      infinigall: true,
      share: true,
      spinner: 'rotating-plane'
    });
    
    // $('#pagepiling').pagepiling();





     //scroll-spy & Smooth-scrolling
    var scrollLink = $('.scroll-link');
    $(scrollLink).on('click', function (event) {
      event.preventDefault();
      $('html,body').animate({
        scrollTop: $(this.hash).offset().top - 10
      }, 1000);
    });
    $(window).on('scroll', function () {
      var scrollTop = $(this).scrollTop();
      scrollLink.each(function () {
        var sectionhead = $(this.hash).offset().top - 40;
        if (scrollTop >= sectionhead) {
          $(this).parent().addClass('active');
          $(this).parent().siblings().removeClass('active');
        }
      });
    });


// 3d slider start here
    
var rev = $('.main_three_d_slider');
rev.on('init', function(event, slick, currentSlide) {
    var
        cur = $(slick.$slides[slick.currentSlide]),
        next = cur.next(),
        next2 = cur.next().next(),
        prev = cur.prev(),
        prev2 = cur.prev().prev();
    prev.addClass('slick-sprev');
    next.addClass('slick-snext');
    prev2.addClass('slick-sprev2');
    next2.addClass('slick-snext2');
    cur.removeClass('slick-snext').removeClass('slick-sprev').removeClass('slick-snext2').removeClass('slick-sprev2');
    slick.$prev = prev;
    slick.$next = next;
}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    console.log('beforeChange');
    var
        cur = $(slick.$slides[nextSlide]);
    console.log(slick.$prev, slick.$next);
    slick.$prev.removeClass('slick-sprev');
    slick.$next.removeClass('slick-snext');
    slick.$prev.prev().removeClass('slick-sprev2');
    slick.$next.next().removeClass('slick-snext2');
    next = cur.next(),
        prev = cur.prev();
    //prev2.prev().prev();
    //next2.next().next();
    prev.addClass('slick-sprev');
    next.addClass('slick-snext');
    prev.prev().addClass('slick-sprev2');
    next.next().addClass('slick-snext2');
    slick.$prev = prev;
    slick.$next = next;
    cur.removeClass('slick-next').removeClass('slick-sprev').removeClass('slick-next2').removeClass('slick-sprev2');
});

rev.slick({
    speed: 2000,
    arrows: true,
    dots: false,
    autoplay: true,
    focusOnSelect: true,
    centerMode: true,
    slidesPerRow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    infinite: true,
    nextArrow:".i_left",
    prevArrow:".i_right",
}); 

// 3d slider end here 



})


// hamburger js start here 
$(() => {
  $('.hamburger').on('click', () => {
    $('.hamburger').toggleClass('active');
  })
})
// hamburger js end here 

