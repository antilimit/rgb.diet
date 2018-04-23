// vars

var $row = $('.row');


// events

$row.click(function() {
  $body.toggleClass('expanded-page');
  $(this).toggleClass('expanded-row');
});
