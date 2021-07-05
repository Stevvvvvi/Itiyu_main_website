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


// logic for menu placement
$('.weeks').click(function(){
  $('.weeks').removeClass('active');
  $(this).addClass('active');
  // $('html, body').animate({
  //           scrollTop: $(this.id).position().top
  //       }, 400);
  //       return false;
  $('.weekly_wrapper').addClass("hide");
  // $(this.id).fadeIn();
  $(this.id).removeClass("hide");
  displaySlider();
})

// backtoTop button logic
$(window).scroll(()=>{
  if($(window).scrollTop()>400){
    $('.fixed_button').removeClass('disactive');
  }else{
    $('.fixed_button').addClass('disactive');
  }
});
$(".fixed_button")
$('#backtotop').click((e)=>{
  e.preventDefault();
  $('html, body').animate({ scrollTop:0 }, 'slow');
  removePortal()
})

// portal text display
function hoverPortal(htmlElement,text){
  const rect=htmlElement.getBoundingClientRect();
  const portal=$(".fixed_portal");
  portal.html(text);
  portal.css({top:`${rect.top+10}px`,left:`${rect.left-90}px`,visibility:'visible',transform:'scale(1)'});

}  

function removePortal(){
  $(".fixed_portal").css({visibility:'hidden',transform:'scale(0.1)'});
}

