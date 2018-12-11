$('.li_wrap > li').on('mouseover',function(){
  let tarArr = document.querySelectorAll('.li_wrap > li')
  let $width = $(this).width() 
  let $mountLeft = 0;
  for(let i = 0 ; i < $(this).index();i++){
    $mountLeft += tarArr[i].offsetWidth;
  }
  // console.log($mountLeft)
  let $left = ($(this).index()*$width)+"px";
  $('.bar').css({"left":$mountLeft,"width":$width})
  // console.log($(this))
})

$('overview-ani').attr('src', './../Style/Img/Page/galaxy-watch_highlights_overview.jpg');