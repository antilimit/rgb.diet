
// vars

// elements
var $body = $('body');
var $navLink = $('nav a');
var $ajax = $('#ajax');
var $back = $('.back');

var sectionID;
var rowID;
var pageState;

// domain path update
var root = 'http://rgb.diet/'


// onload



$ajax.load(root + 'design/index.html');
pageState = 'list';

console.log(pageState);
console.log(rowID);
console.log(sectionID);


/*
history.pushState({
    id: 'design'
}, 'rgb / design', root + 'design');
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
  $ajax.load(root + 'design/index.html');

  /*
  history.pushState({
      id: 'design'
  }, 'rgb / design', root + 'design');
  */

  e.preventDefault();

});

$('.nav-photo').click(function(e) {
  tapNav();
  $(this).addClass('selected');
  $ajax.load(root + 'photo/index.html');

  /*
  history.pushState({
      id: 'photo'
  }, 'rgb / photo', root + 'photo');
  */

  e.preventDefault();
});

$('.nav-resume').click(function(e) {
  tapNav();
  $(this).addClass('selected');
  $ajax.load(root + 'resume/index.html');

  /*
  history.pushState({
      id: 'resume'
  }, 'rgb / resume', root + 'resume');
  */

  e.preventDefault();
});

$('.nav-about').click(function(e) {
  tapNav();
  $(this).addClass('selected');
  $ajax.load(root + 'about/index.html');

  /*
  history.pushState({
      id: 'about'
  }, 'rgb / about', root + 'about');
  */

  e.preventDefault();
});

$back.click(function(e) {
  var pageState = 'list';
  console.log(pageState);
  $('#ajax-article').remove();
  $body.removeClass('hide-rows');
  $body.removeClass('expanded-page');
  $('html, body').animate({ scrollTop: (
    $('.expanded-row').offset().top - 0) }, 0
  );
  $('.expanded-row').removeClass('expanded-row');

  e.preventDefault();

});




// functions

function tapNav() {
  $navLink.removeClass('selected');
  $body.removeClass('expanded-page');
  $body.removeClass('hide-rows');
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
