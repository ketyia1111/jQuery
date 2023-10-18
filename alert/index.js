$(function(){
    $("#bg").hide();

    $("#click").click(function(){
        $("#bg").fadeIn(300);
    });

    $("#OK").click(function(){
        $("#bg").fadeOut(300)
    })
})