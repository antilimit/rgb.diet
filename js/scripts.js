
// vars

var $body = $('body');
var $navLink = $('nav a');
var $ajax = $('#ajax');



// onload
$ajax.load('html/design.html');




// events

$navLink.click(function() {
  $navLink.removeClass('selected');
  $(this).addClass('selected');
  $body.removeClass('expanded-page');
  console.log('generic');
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
  $ajax.load('html/design.html');
  console.log('specific');
  return false;
  /*
  window.history.pushState('design', 'rgb /design', '/design');
  return false;
  */
});
$('.nav-photography').click(function() {
  $('#ajax').load('html/photography.html');
  console.log('specific');
  return false;
});
$('.nav-resume').click(function() {
  $('#ajax').load('html/resume.html');
  console.log('specific');
  return false;
});
$('.nav-about').click(function() {
  $('#ajax').load('html/about.html');
  console.log('specific');    
  return false;
});
