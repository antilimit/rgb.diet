// vars

var $row = $('.row');

// events

$( window ).scroll(function() {
  console.log($('.content').offset().top);
  console.log($('#ajax').offset().top);
  console.log($('.wrapper').offset().top);  


});

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
      $body.addClass('hide-rows');
      $('html, body').animate({ scrollTop: 0 }, 0);

      // if they haven't scrolled down after a few seconds
      // show them there's more to see
      setTimeout(function() {
        console.log(dis.offset());
        if (dis.offset().top < 1) {
          alert('go niga');
          // $('html, body').animate({ scrollTop: 100 }, 1500);
        }
      }, 2000);

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
