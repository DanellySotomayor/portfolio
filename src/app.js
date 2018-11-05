document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
<<<<<<< HEAD

const TypeWriter = function(txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 8);
  this.type();
  this.isDeleting = false;
}

// Type method
TypeWriter.prototype.type = function() {
  // Current index
  const current = this.wordIndex % this.words.length;
  const fullTxt = this.words[current];
  if(this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  //Insert txt
  this.txtElement.innerHTML = `<span class="text">${this.txt}</span>`;
// speed
  let typeSpeed = 100;
=======
>>>>>>> e589fa5b003426bc871651001798c24815ff23cf

  if (this.isDeleting) {
    typeSpeed /= 2;
  }

//If word is complete
  if(!this.isDeleting && this.txt === fullTxt) {
    typeSpeed = this.wait;
    this.isDeleting = true;
  } else if(this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.wordIndex++;
    typeSpeed = 200;
  }
  setTimeout(() => this.type(), typeSpeed);
}
// Init DOM
document.addEventListener('DOMContentLoaded', init);
// Init app
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
// Init typewriter
  new TypeWriter(txtElement, words, wait);
}

//Jquery Bootstrap functions
$(document).ready(function () {
  $('.navbar-toggler').on('click', function () {
    $(this).toggleClass('active');
  });

  $(window).scroll(function(){
<<<<<<< HEAD
    $('.navbar').toggleClass('scrolled', $(this).scrollTop() > 100);
=======
    $('.navbar').toggleClass('scrolled', $(this).scrollTop() > 200);
>>>>>>> e589fa5b003426bc871651001798c24815ff23cf
  });

  $('body').scrollspy({
		target: '#mainNav',
<<<<<<< HEAD
		offset: 1200,
=======
		offset: 0,
>>>>>>> e589fa5b003426bc871651001798c24815ff23cf
    });

});

