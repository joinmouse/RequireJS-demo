var Carousel = function(ct) {
  this.ct = ct
  this.imgCt = ct.find('.img-ct')
  this.preBtn = ct.find('.btn-pre')
  this.nextBtn = ct.find('.btn-next')
  this.cricl = ct.find('.cricl')

  //获取单个图片宽度、页面中图片的数量
  this.imgWidth = ct.find('.img-ct>li').width()
  this.imgLength = ct.find('.img-ct>li').length
  
  this.pageIdx = 0;
  this.isAnimate = false;

  this.init()
  this.bind()
}
Carousel.prototype.init = function() {
var $imgCt = this.imgCt
var $preBtn = this.preBtn
var $nextBtn = this.nextBtn
var $cricl = this.cricl


var $firstImg = $imgCt.find('li').first()
var $lastImg = $imgCt.find('li').last()


//为前后copy标签
$imgCt.prepend($lastImg.clone())
$imgCt.append($firstImg.clone())

//计算整个图片的宽度，设定初始图片
$imgCt.width(this.imgWidth * (this.imgLength+2))
$imgCt.css('left',-this.imgWidth + 'px')
}
//绑定事件的方法 
Carousel.prototype.bind = function() {
  var that = this
  this.preBtn.on('click',function(e){
    e.preventDefault()
    that.playPre();
  })
  this.nextBtn.on('click',function(e){
    e.preventDefault()
    that.playNext();
  })
}

//定义向前滚动方法
Carousel.prototype.playPre = function() {
var that = this
if(this.isAnimate) return;     //状态锁

  this.isAnimate = true;
  this.imgCt.animate({
    left: '+=960'
  },function(){
    that.pageIdx--
    if(that.pageIdx < 0){
      that.imgCt.css('left',-that.imgWidth*(that.imgLength) + 'px')
      that.pageIdx = that.imgLength-1;
    }
    that.setCricl();
    that.isAnimate = false;
  })
}
//定义向后滚动方法
Carousel.prototype.playNext = function() {
var that = this
if(this.isAnimate) return;     //状态锁，防止重复点击

  this.isAnimate = true;
  this.imgCt.animate({
    left: '-=960'
  },1000,function(){
    that.pageIdx++
    console.log(that.pageIdx)
    if(that.pageIdx === that.imgLength){
      that.imgCt.css('left',-that.imgWidth + 'px')
      that.pageIdx = 0
    }
    that.setCricl();
    that.isAnimate = false;
  })
}


Carousel.prototype.setCricl = function() {
  //console.log(this.pageIdx)
  this.cricl.children().removeClass('active')
            .eq(this.pageIdx).addClass('active')
}

var appleCarousel = new Carousel($('.carousel'));
//appleCarousel.playNext()

