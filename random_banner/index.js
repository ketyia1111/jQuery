$(function(){
    var bannerArray = ["red","yellow","green","blue","brown"];

    var num = Math.random();

    num = num *5;

    num = Math.floor(num);

    $("aside img").attr("src","img/" + bannerArray[num] + ".jpg");
})