//配置
requirejs.config({
  baseUrl:'src/js' 
})


//导入

require(['jquery','backtop','carousel'],function($,backtop,carousel){
  var backTop = new BackTop($('.back-top'));
  backTop.bindEvent();
  console.log(2)
  var appleCarousel = new Carousel($('.carousel'));
  appleCarousel.init()
  appleCarousel.bind();
  console.log(3)
  //appleCarousel.init();
  //appleCarousel.bind();
})
