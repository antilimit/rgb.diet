
// vars

// elements
var $body = $('body');
var $navLink = $('nav a');
var $ajax = $('#ajax');
var $back = $('.back');

// photo counts
/*
var count_amsterdam = 26;
var count_austin = 67;
var count_barcelona = 18;
var count_bigbend = 13;
var count_cambodia = 125;
var count_chicago = 10;
var count_copenhagen = 32;
var count_dallas = 4;
var count_florida = 13;
var count_hawaii = 3;
var count_houston = 23;
var count_japan = 8;
var count_lasvegas = 9;
var count_london = 61;
var count_madrid = 30;
var count_malaysia = 17;
var count_newmexico = 17;
var count_newyork = 10;
var count_paris = 44;
var count_puertorico = 39;
var count_sanantonio = 10;
var count_sanfrancisco = 13;
var count_santodomingo = 61;
var count_seattle = 10;
var count_singapore = 60;
var count_stlouis = 12;
var count_switzerland = 12;
var count_thailand = 27;
var count_yellowstone = 8;
*/

var i = 1;
var loc;



// onload

$ajax.load('html/design.html');
/*
history.pushState({
    id: 'homepage'
}, 'rgb / design', '/temp/new/design');
*/


// navigation events

$navLink.hover(
  function() {
    $navLink.addClass('hovered');
    $(this).addClass('focused');
  }, function() {
    $navLink.removeClass('hovered');
    $navLink.removeClass('focused');
  }
);

$('.nav-design').click(function(e) {
  tapNav();
  $(this).addClass('selected');
  $ajax.load('html/design.html');
  e.preventDefault();
  /*
  window.history.pushState('design', 'rgb /design', '/design');
  */
});

$('.nav-photo').click(function(e) {
  tapNav();
  $(this).addClass('selected');
  $ajax.load('html/photo.html');
  e.preventDefault();
});

$('.nav-resume').click(function(e) {
  tapNav();
  $(this).addClass('selected');
  $ajax.load('html/resume.html');
  e.preventDefault();
});

$('.nav-about').click(function(e) {
  tapNav();
  $(this).addClass('selected');
  $ajax.load('html/about.html');
  e.preventDefault();
});

$back.click(function(e) {
  $('#ajax-article').remove();
  $body.removeClass('hide-rows');
  $body.removeClass('expanded-page');
  $('html, body').animate({ scrollTop: ($('.expanded-row').offset().top - 0) }, 0);
  $('.expanded-row').removeClass('expanded-row');

  e.preventDefault();

});




// functions

function tapNav() {
  $navLink.removeClass('selected');
  $body.removeClass('expanded-page');
  $body.removeClass('hide-rows');
}
