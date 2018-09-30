

$(document).ready(function () {
  $('.navbar-toggler').on('click', function () {
    $('.animated-icon4').toggleClass('open');
  });

  $(window).scroll(function(){
    $('.navbar').toggleClass('scrolled', $(this).scrollTop() > 0);
  });
});

