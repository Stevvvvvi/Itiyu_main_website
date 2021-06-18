// header 的 scroll 特效
function headerScrollAnmiation(){
    var scrollPosition=0;
    $(window).on('scroll', function(){
      $('.header_content').toggleClass('hide', $(window).scrollTop()>scrollPosition);
      scrollPosition=$(window).scrollTop();
    })
}
headerScrollAnmiation();

// hamburger bar
function toggleMenuShow(x) {
  if (x.classList.contains("change")){
    x.classList.remove("change")
  }else{
    x.classList.add("change")
  }
}