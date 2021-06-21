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

// change slide video preview image's height to half of the 100% width
$(window).on( 'resize', function () {
  $('.slide').height( $(this).width() / 6 -8);
}).resize();


// logic of image preview change event
const videoData=[
  {
    src:"./爱体育_澳洲爱体育直播网_澳洲足球直播_F1直播_CBA直播_NBA直播_中超直播_网球直播 - itiyu.tv_files/60caad625cd40.jpg",
    name:"2020欧洲杯",
    match:"意大利 VS 瑞士",
    state:"全场录像",
    href:"http://www.iyingshi9.tv/play/83396-0-1.html",
  },
  {
    src:"./爱体育_澳洲爱体育直播网_澳洲足球直播_F1直播_CBA直播_NBA直播_中超直播_网球直播 - itiyu.tv_files/60caad105e475.jpg",
    name:"2020欧洲杯",
    match:"土耳其 VS 威尔士",
    state:"全场录像",
    href: "http://www.iyingshi9.tv/play/83395-0-1.html",
  },
  {
    src:"./爱体育_澳洲爱体育直播网_澳洲足球直播_F1直播_CBA直播_NBA直播_中超直播_网球直播 - itiyu.tv_files/60caac6c8edd6.jpg",
    name:"2020欧洲杯",
    match:"芬兰 VS 俄罗斯",
    state:"全场录像",
    href:"http://www.iyingshi9.tv/play/83394-0-1.html",
  },
  {
    src:"./爱体育_澳洲爱体育直播网_澳洲足球直播_F1直播_CBA直播_NBA直播_中超直播_网球直播 - itiyu.tv_files/60caac11e2a2b.jpg",
    name:"2020欧洲杯",
    match:"意大利 VS 瑞士",
    state:"全场录像",
    href:"http://www.iyingshi9.tv/play/83393-0-1.html",
  },
  {
    src:"./爱体育_澳洲爱体育直播网_澳洲足球直播_F1直播_CBA直播_NBA直播_中超直播_网球直播 - itiyu.tv_files/60caa64226de8.jpg",
    name:"2020欧洲杯",
    match:"土耳其 VS 威尔士",
    state:"全场录像",
    href:"http://www.iyingshi9.tv/play/83392-0-1.html",
  },
  {
    src:"./爱体育_澳洲爱体育直播网_澳洲足球直播_F1直播_CBA直播_NBA直播_中超直播_网球直播 - itiyu.tv_files/60caa4b8cb1c5.jpg",
    name:"2020欧洲杯",
    match:"芬兰 VS 俄罗斯",
    state:"全场录像",
    href:"http://www.iyingshi9.tv/play/83391-0-1.html",
  },
];

function changeMainVideo(v){
  $('#video_main_link').css('background-image', `url("${videoData[v].src}")`);
  $('#video_class_name').html(`${videoData[v].name}`);
  $('#video_match_name').html(`${videoData[v].match}`);
  $('#video_state').html(`${videoData[v].state}`)
  $('#video_main_href').attr("href",`${videoData[v].href}`)
}
$('input[type=radio][name="radio-btn"]').change(function() {
  changeMainVideo(this.value)
});