$(document).ready(function(){
    var bageArea = $(".container");
    var bageHeight = bageArea.height();
    var bageWidth = bageArea.width();

    //点击发射弹幕按钮
    $("#emit").click(function(){
        var bageContent = $(".emit_content").val();
        // $('.emit_content').val("");
        var textobj = $("<div>"+bageContent+"</div>");
        bageArea.append(textobj);
        textobj.css({
            display: "inline",
            position: "absolute"
        }); 
        textobj.css({
            color: getRandomColor,
            fontSize: fontSize
        });
        var begin = bageWidth-textobj.width();
        textobj.css({
            top: top(textobj.height()),
            left: begin
        })
        var time = 10000 + 20000*Math.random();
        textobj.animate({
            left:"-"+begin
        },time,function(){
            textobj.remove();
        });
       
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