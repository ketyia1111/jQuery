$(function(){
    $("td").hover(function(){
        $(this).parent().addClass("target");

        var myIndex = $(this).index();

        myIndex ++;

        $("td:nth-child(" + myIndex + ")").addClass("target");

    },function(){
        $(".target").removeClass("target");
    })
})