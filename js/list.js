// vars

var row = $('.row');
var sectionID = $('.wrapper').attr('id');
var rowID;
var dis;
var photoCount;

// events

row.click(function(e) {
  $body.toggleClass('expanded-page');

  rowID = $(this).attr('id').replace('row-', '');
  photoCount = $(this).find('.count').html();
  photoCountInt = parseInt(photoCount) + 1;

  dis = $(this);

  if ($body.hasClass('expanded-page')) {
    // expanding

    /*
    history.pushState({
        id: 'homepage'
    }, 'rgb / ' + rowID, '/temp/new/' + sectionID + '/' + rowID );
    */

    $('html, body').animate({ scrollTop: ($(this).offset().top - 52) }, 300);
    setTimeout(function(){
      var div = $('<div id="ajax-article" />');
      if (sectionID == 'design') {
        div.load('html/design/' + rowID + '.html');
      } else {
        div.load('html/photo/index.html');
      }
      dis.after(div);
      $body.addClass('hide-rows');
      $('html, body').animate({ scrollTop: 0 }, 0);

      // if they haven't scrolled down after a few seconds
      // show them there's more to see
      // little buggy
      /*
      setTimeout(function() {
        if (window.pageYOffset < 1 && $body.hasClass('expanded-page')) {
          $('html, body').animate({ scrollTop: 50 }, 1000);
        }
      }, 2000);
      */
    }, 500);

  } else {
    
    // going back to normal
    $('#ajax-article').remove();
    $body.removeClass('hide-rows');
    $('html, body').animate({ scrollTop: ($(this).offset().top - 0) }, 0);

    /*
    history.pushState({
        id: 'homepage'
    }, 'rgb / ' + sectionID, '/temp/new/' + sectionID );
    */

  }

  $(this).toggleClass('expanded-row');

  e.preventDefault();



});
