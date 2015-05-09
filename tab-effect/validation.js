(function($){
    $ .tab=function(options){
        var settings={
            tabdom:".tab",
            tiggerType:"click",
            effect:"none",
            autoplay:true,
            interval:2000
        }
        var opts = $.extend({},settings,options);
        var $tabdom=$(opts.tabdom);
        var effe=opts.effect;
        var auto=opts.autoplay;
        var time=opts.interval;
        var type=opts.tiggerType;
        $tabdom.find("ul").children().eq(0).addClass("on");
        $tabdom.find("ul").siblings().children().eq(0).show();
        if (type == "click") {
            $tabdom.find("ul").children().bind(type,function(){
                var index = $(this).index();
                $(this).addClass("on").siblings().removeClass('on');
                if(effe == "fade"){
                        $(".tab ul").siblings().children().eq(index).fadeIn().siblings().hide();
                }else if(effe == "none"){
                        $(".tab ul").siblings().children().eq(index).show().siblings().hide();
                }
            })
        }
        else if(type == "mouseover") {
            $tabdom.find("ul").children().bind(type,function(){
                var index = $(this).index();
                $(this).addClass("on").siblings().removeClass('on');
                    if(effe == "fade"){
                        $(".tab ul").siblings().children().eq(index).fadeIn().siblings().hide();
                    }else if(effe == "none"){
                        $(".tab ul").siblings().children().eq(index).show().siblings().hide();
                    }
            })
        }
        if(auto ==true){
            var number = 0;
            var maxNumber =$tabdom.find("ul").children().length;
            function autotab(){
                number++;
                number == maxNumber? number = 0 : number;
                $tabdom.find("ul").children().eq(number).addClass('on').siblings().removeClass('on');
                $tabdom.find("ul").siblings().children().eq(number).fadeIn().siblings().hide();
            }
            var tabChange = setInterval(autotab,time);
            $tabdom.find("ul").children().mouseover(function(){
                clearInterval(tabChange);
            });
            $tabdom.find("ul").children().mouseout(function(){
                tabChange = setInterval(autotab,time);
            });
        }  
    };
})( jQuery); 