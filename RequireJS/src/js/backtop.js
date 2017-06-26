define(['jquery'],function($){
     
    BackTop = function(ct) {
      this.ct = ct;
    }
    BackTop.prototype.bindEvent = function(){
      var that = this
      $(window).on('scroll',function(){
        if($(window).scrollTop()<100){
          that.ct.hide();
        }else{
           that.ct.show();
        }
      })
      this.ct.on('click',function(){
        $(window).scrollTop(0);
      })
    }
     
    return BackTop();
})



