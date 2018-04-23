
// vars

var $body = $('body');
var $navLink = $('nav a');



// onload
$('#ajax').load('html/design.html');




// events

$navLink.click(function() {
  $navLink.removeClass('selected');
  $(this).addClass('selected');
  return false;
});

$navLink.hover(
  function() {
    $navLink.addClass('hovered');
    $(this).addClass('focused');
  }, function() {
    $navLink.removeClass('hovered');
    $navLink.removeClass('focused');
  }
);


$('.nav-design').click(function() {
  $('#ajax').load('html/design.html');
  /*
  window.history.pushState('design', 'rgb /design', '/design');
  return false;
  */
});
$('.nav-photography').click(function() {
  $('#ajax').load('html/photography.html');
});
$('.nav-resume').click(function() {
  $('#ajax').load('html/resume.html');
});
$('.nav-about').click(function() {
  $('#ajax').load('html/about.html');
});
