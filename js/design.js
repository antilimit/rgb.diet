var $row = $('.row');


$row.click(function() {
  $body.toggleClass('expanded-page');
  $(this).toggleClass('expanded-row');
});
