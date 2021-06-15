$(document).ready(function(){
    var bageArea = $(".container");
    var bageHeight = bageArea.height();
    var bageWidth = bageArea.width();
    var flag = false;
    var color = 1; 

    //点击发射弹幕按钮
    $("#emit").click(function(){
        var bageContent = $(".emit_content").val();
        // $('.emit_content').val("");
        var textobj = $("<span>"+bageContent+"</span>");
        bageArea.append(textobj);
        textobj.css({
            position: "absolute"
        }); 
        textobj.css({
            color: getRandomColor,
            fontSize: fontSize
        });
        var begin = bageWidth-textobj.width();
        textobj.css({
            top: top(textobj.height()),
            left: bageWidth,
            width: textobj.width()
        })
        if(flag){
            $("span").css("opacity",0.3);
        }
        var time = 10000 + 20000*Math.random();
        textobj.animate({
            left:"-"+begin
        },time,function(){
            textobj.remove();
        });
       
    });

    //设置透明度
    $("#transparent").click(function() {
        flag = !flag;
        if(flag){
            $("span").css("opacity",0.3);
        }else{
            $("span").css("opacity",1);
        }
    })

    //回车事件
    $(".emit_content").keyup(function(e){
        if(e.keyCode == 13) {
            $("#emit").click();
        }
　　});
        
    //清屏事件
    $("#clear").click(function(){
        bageArea.empty();
    })

    //动态获取弹幕距离容器的顶部
    var top = function(h) {
        return Math.floor((Math.random()*(bageHeight-h))+1);
    }

    //动态获取弹幕颜色
    var getRandomColor = function() {
        return '#'+('00000'+(Math.random()*0xffffff <<0).toString(16)).substr(-6); 
    }

    //动态获取弹幕字体大小
    var fontSize = function() {
        return Math.floor((Math.random()*40)+12);
    }
})
