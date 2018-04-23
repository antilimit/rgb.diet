// vars

var $row = $('.row');
var $body = $('body');
var $navLink = $('nav a');



// events & clicks

$row.click(function() {
  $body.toggleClass('expanded-page');
  $(this).toggleClass('expanded-row');
});

$navLink.click(function() {
  $navLink.removeClass('selected');
  $(this).addClass('selected');
  return false;
});

$('.nav-design').click(function() {
  $('#ajax').load('design.html');
});
$('.nav-photography').click(function() {
  $('#ajax').load('photography.html');
});
$('.nav-resume').click(function() {
  $('#ajax').load('resume.html');
});
$('.nav-about').click(function() {
  $('#ajax').load('about.html');
});



// ajax page loading

/*
$('#design').load('design.html');
$('#photography').load('photography.html');
$('#resume').load('resume.html');
$('#about').load('about.html');
*/
