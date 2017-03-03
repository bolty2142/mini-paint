$(document).ready(function(){

    $(".box").click(function(){
        $(this).addClass(color);
    });
    $(".box").on('dblclick', function(){
        $(this).removeClass(colors);
    });

    $("#reset").click(function(){
        $(".box").removeClass(colors)
    });
    $("#red").click(function(){
        color = "red";
    });
    $("#blue").click(function(){
        color = "blue";
    });
    $("#green").click(function (){
        color = "green";
    });
    $("#yellow").click(function (){
        color = "yellow";
    });
    $("#white").click(function(){
        color = "white";
    });
    var color = "white";
    var colors = "white green red blue yellow"

});