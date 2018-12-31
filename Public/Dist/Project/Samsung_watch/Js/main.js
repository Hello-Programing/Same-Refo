'use strict';

function menuFunc() {
  var tarArr = document.querySelectorAll('.li_wrap > li');
  $('.bar').css({ "left": 10, "width": 96 });
  // 

  $('.li_wrap > li').on('mouseover', function () {
    var $width = $(this).width();
    var $mountLeft = 10;
    for (var i = 0; i < $(this).index(); i++) {
      $mountLeft += tarArr[i].clientWidth;
    }
    $('.bar').css({ "left": $mountLeft, "width": $width });
  });
}

var hamburger = document.getElementsByClassName('hamburger')[0];
var navBox = document.getElementById('navBox');
hamburger.addEventListener('click', function () {
  navBox.classList.add('navBoxActive');
});

var navBoxClose = document.getElementById('navBoxClose');
navBoxClose.addEventListener('click', function () {
  navBox.classList.remove('navBoxActive');
});

menuFunc();

$('overview-ani').attr('src', './../Style/Img/Page/galaxy-watch_highlights_overview.jpg');