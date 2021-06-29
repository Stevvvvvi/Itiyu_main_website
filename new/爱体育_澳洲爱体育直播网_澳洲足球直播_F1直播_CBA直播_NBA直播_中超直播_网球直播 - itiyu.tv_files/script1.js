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
  // console.log(x.id.match(/\d+/g)[0]);
  $('.slide').removeClass('active_slide');
  $(`#img_container${x.id.match(/\d+/g)[0]}`).addClass('active_slide');
  $('.slide_text').removeClass('active_text');
  x.classList.add("active_text");
  slidePlaceCounter=x.id.match(/\d+/g)[0];
}

// broadcast scroll button logic
$.fn.isScrollable = function () {
  return this[0].scrollWidth > this[0].clientWidth;
};
const cards=$(".broadcast_cards");
const sliderLeft=$('#slider_left');
const sliderRight=$('#slider_right');

function displaySlider(){
  if (cards.isScrollable()){
    if (cards.scrollLeft()==0){
      sliderLeft.hide();
      sliderRight.show();
    }else if (cards.scrollLeft() == (cards[0].scrollWidth - cards[0].clientWidth)){
      sliderRight.hide();
      sliderLeft.show();
    }else{
      sliderLeft.show();
      sliderRight.show();
    }
  }else{
    sliderLeft.hide();
    sliderRight.hide();
  };
}
displaySlider();
$(window).resize(()=>displaySlider());

sliderLeft.click(()=>{
  var postion = cards.scrollLeft()
  if (postion<260){
    cards.animate({scrollLeft:'0'},300);
   
  }else{
    cards.animate({scrollLeft:'-=260'},300);
  }
})

sliderRight.click(()=>{
  var postion = cards.scrollLeft();
  if (postion + cards[0].clientWidth + 260 > cards[0].scrollWidth){
    cards.animate({scrollLeft: cards[0].scrollWidth },300);
  }else{
    cards.animate({scrollLeft:'+=260'},300);
  }
})

cards.scroll(()=>{
  displaySlider();
})


