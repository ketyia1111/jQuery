$(function(){
    var h = 0;

    $("main div").each(funciton(){
        if($(this).height() > h){
            h = $(this).height();
        }
    });

    $("main div").css("height",h + "px");
})