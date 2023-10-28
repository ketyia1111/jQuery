$(function(){
    $(".alert").hide();

    $("#submitBtn").click(function(){
        var sendFlag = true;

        if(!$("#text").val()){
            $("#textSection .alert").show();
            sendFlag = false;
        }else{
            $("#textSection .alert").hide();
        }

        var radiochk = $('input[name="radio"]:checked').length;

        if(radiochk == 0){
            $("#radioSection .alert").show();
            
            sendFlag = false;
        }else{
            $("#radioSection .alert").hide();
        
        }
        var checkchk = $('input[name="checkbox"]:checked').length;

        if(checkchk == 0){
            $("#checkboxSection .alert").show();
            
            sendFlag = false;
        }else{
            $("#checkboxSection .alert").hide();
        }


        if($("select").val() == "none"){
            $("#selectSection .alert").show();
            sendFlag = false;
        }else{
            $("#selectSection .alert").hide();
        }


        if(!$("#textarea").val()){
            $("#textareaSection .alert").show();
            sendFlag = false;
        }else{
            $("#textareaSection .alert").hide();
        }

        if(sendFlag == false){
            return false;
        }


    })
})