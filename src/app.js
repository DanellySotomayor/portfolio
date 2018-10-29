document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

$(document).ready(function () {
  $('.navbar-toggler').on('click', function () {
    $('.animated-icon4').toggleClass('open');
  });

  $(window).scroll(function(){
    $('.navbar').toggleClass('scrolled', $(this).scrollTop() > 200);
  });

  $('body').scrollspy({
		target: '#mainNav',
		offset: 0,
    });

});

