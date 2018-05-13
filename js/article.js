
// vars
var i = 1;
var loc = "thailand";
var count_thailand = 27;
// add counts for rest of photo sections

// onload

fillContent();

// events

function fillContent() {
  for (i = 1; i < count_thailand ; i++) {
    $('.masonry').append('<div class="item"><img src="img/photo/' + loc + '/' + i + '.jpg"></div>');

  }
}
