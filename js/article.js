
// vars

pageState = 'article';

// onload

/*
for (i = 1; i < photoCountInt ; i++) {
  $('.masonry').append('<a class="item" href="#"><img src="photo/' + rowID + '/' + i + '.jpg"></a>');
}
*/


if (sectionID == 'design') {

}


if (sectionID == 'photo') {

  var dir = 'photo/' + rowID + '/';
  var fileextension = ".jpg";

  $.ajax({
      // This will retrieve the contents of the folder if the folder is configured as 'browsable'
      url: dir,
      success: function (data) {
          // List all .png file names in the page
          $(data).find("a:contains(" + fileextension + ")").each(function () {
              // domain path update
              var filename = this.href.replace(window.location, "").replace("http://rgb.diet/", "");
              var year = this.href.split('-')[1].replace(".jpg", "");
              $('.masonry').append('<a class="item" href="#"><img src="' + dir + filename + '" /><span class="year">' + year + '</span></a>');
          });
      }
  });

}



// events

// for enlarging any non 1 column images
// need to do a scroll-height check to focus on top of tapped image and go there


$(document).on('click','.masonry .item', function(e){
  // $(this).toggleClass('expanded-item');
  /*
  if ($(this).parent().hasClass('zoomed')) {
    $(this).parent().removeClass('zoomed');
  } else {
    $(this).parent().addClass('zoomed');
  }
  */
  e.preventDefault();
});
