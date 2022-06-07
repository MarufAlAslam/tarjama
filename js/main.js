$('.hasSubmenu').click(function(e){
    e.preventDefault()
    $(this).parent().children(".submenu").toggle()
    $(this).children('.fa-angle-down').toggleClass('active')
})

$('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
  });