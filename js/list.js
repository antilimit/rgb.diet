// vars

var $row = $('.row');

// events

$row.click(function(e) {
  $body.toggleClass('expanded-page');

  var rowID = $(this).attr('id').replace('row-', '');
  var dis = $(this);

  if ($body.hasClass('expanded-page')) {
    // expanding
    $('html, body').animate({ scrollTop: ($(this).offset().top - 52) }, 300);
    setTimeout(function(){
      var div = $('<div id="ajax-article" />');
      div.load('html/design/' + rowID + '.html');
      dis.after(div);
      // $ajax.load('html/design/' + $(this).attr('id').replace('row-', '') + '.html').delay(1000);
      $body.addClass('hide-rows');
      $('html, body').animate({ scrollTop: 0 }, 0);
    }, 500);
  } else {
    // going back to normal
    $('#ajax-article').remove();
    $body.removeClass('hide-rows');
    $('html, body').animate({ scrollTop: ($(this).offset().top - 0) }, 0);
  }

  $(this).toggleClass('expanded-row');

  e.preventDefault();



});
