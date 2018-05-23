
// vars

// elements
var $body = $('body');
var $navLink = $('nav a');
var $ajax = $('#ajax');
var $back = $('.back');

var sectionID;
var rowID;
var pageState;

var root = 'http://rgb.diet/temp/new/'


// onload



$ajax.load(root + 'html/design.html');
pageState = 'list';

console.log(pageState);
console.log(rowID);
console.log(sectionID);


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
  var pageState = 'list';
  console.log(pageState);
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
