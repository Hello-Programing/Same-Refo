'use strict';

$('.li_wrap > li').on('mouseover', function () {
  var tarArr = document.querySelectorAll('.li_wrap > li');
  var $width = $(this).width();
  var $mountLeft = 0;
  for (var i = 0; i < $(this).index(); i++) {
    $mountLeft += tarArr[i].offsetWidth;
  }
  // console.log($mountLeft)
  var $left = $(this).index() * $width + "px";
  $('.bar').css({ "left": $mountLeft, "width": $width });
  // console.log($(this))
});

$('overview-ani').attr('src', './../Style/Img/Page/galaxy-watch_highlights_overview.jpg');