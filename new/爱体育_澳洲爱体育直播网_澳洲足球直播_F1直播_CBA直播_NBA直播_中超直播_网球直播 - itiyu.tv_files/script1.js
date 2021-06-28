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

// head slide automated change and click event
var slidePlaceCounter=1;
setInterval(function(){
  let willChangeSlide=document.getElementById("slide_text"+slidePlaceCounter)
  toggleSlide(willChangeSlide);
  slidePlaceCounter++;
  if( slidePlaceCounter> 3){
    slidePlaceCounter=1;
  }
},5000);


function toggleSlide(x){
  console.log(x.id.match(/\d+/g)[0]);
  $('.slide').removeClass('active_slide');
  $(`#img_container${x.id.match(/\d+/g)[0]}`).addClass('active_slide');
  $('.slide_text').removeClass('active_text');
  x.classList.add("active_text");
  slidePlaceCounter=x.id.match(/\d+/g)[0];
}

