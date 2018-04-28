// vars

var $row = $('.row');


// events

$row.click(function() {
  $body.toggleClass('expanded-page');
  /*
  $(this).css({
    "position": "absolute",
    "top": $(this).offset().top
  });
  */

  console.log($(this).offset().top);

  $(this).toggleClass('expanded-row');
});
