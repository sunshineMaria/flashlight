/**
 * this问题
 * 清楚定时器，timer一开始写到函数里面，每次都不能清除，所以会出现超过最大的那种错误
 */
;(function(){
    var config = {
        'duration': 200,
        'top': 200
    }
    $.fn.goTop = function(conf){
        conf = $.extend({}, config, conf)
        return this.each(function(){
            // each里面返回的是dom对象
            var $this = $(this)
            var $container = conf.container ? $(conf.container) : $('body')
            var $wrapper = conf.container ? $(conf.container) : $(window)
            var timer;
            $wrapper.scroll(function(){
                // 防止高频率触发
                clearInterval(timer)
                timer = setInterval(function(){
                    if($container.scrollTop() >= conf.top){
                        $this.fadeIn()
                    }else{
                        $this.fadeOut()
                    }
                }, 100)
            })
            $this.on('click', function(){
                if(conf.duration){
                    $('body').animate({
                        scrollTop: 0
                    }, conf.duration)
                }else{
                    $('body').scrollTop(0)
                }
            })
        })
    }
})()

$('.goTop').goTop();