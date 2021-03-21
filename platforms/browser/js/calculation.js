$(document).ready(function(){

    $(".mt_calculation").on("click","#mt_cm1_1",function(){
        var getCurrentDate = new Date();
        var getPlaceholderDate = new Date();
        var cal_1 = 508 - parseFloat($(this).val());
        var cal_2 = cal_1 * 50.67;
        var cal_3 = cal_2 + 1700;
        var answer = cal_3;
        var getFirstTwo = parseInt(answer.toString().substring(0,2));
        getPlaceholderDate.setHours(getPlaceholderDate.getHours() + getFirstTwo / parseFloat($('#mt_line').val()));
        var customeFormat = getPlaceholderDate.getDate() + "/" + (getPlaceholderDate.getMonth() + 1) + "/" + getPlaceholderDate.getFullYear()+", "+getPlaceholderDate.toLocaleTimeString();
        $('#mt_time_1').val(getCurrentDate.toLocaleTimeString());
        $('#mt_time_2').val(customeFormat);
    });

    $('#mt_cm1_1').change(function(){
        var getCurrentDate = new Date();
        var getPlaceholderDate = new Date();
        var cal_1 = 508 - parseFloat($(this).val());
        var cal_2 = cal_1 * 50.67;
        var cal_3 = cal_2 + 1700;
        var answer = cal_3;
        var getFirstTwo = parseInt(answer.toString().substring(0,2));
        getPlaceholderDate.setHours(getPlaceholderDate.getHours() + getFirstTwo / parseFloat($('#mt_line').val()));
        var customeFormat = getPlaceholderDate.getDate() + "/" + (getPlaceholderDate.getMonth() + 1) + "/" + getPlaceholderDate.getFullYear()+", "+getPlaceholderDate.toLocaleTimeString();
        $('#mt_m1_1').val(answer.toFixed(4));
        $('#mt_time_1').val(getCurrentDate.toLocaleTimeString());
        $('#mt_time_2').val(customeFormat);
    });

    $('#mt_m1_1').change(function(){
        var getCurrentDate = new Date();
        var getPlaceholderDate = new Date();
        var cal_1 = parseFloat($(this).val()) - 1700;
        var cal_2 = cal_1 / 50.67;
        var cal_3 = 508 - cal_2;
        var answer = cal_3;
        var getFirstTwo = parseInt(answer.toString().substring(0,2));
        getPlaceholderDate.setHours(getPlaceholderDate.getHours() + getFirstTwo / parseFloat($('#mt_line').val()));
        var customeFormat = getPlaceholderDate.getDate() + "/" + (getPlaceholderDate.getMonth() + 1) + "/" + getPlaceholderDate.getFullYear()+", "+getPlaceholderDate.toLocaleTimeString();
        $('#mt_cm1_1').val(answer.toFixed(4));
        $('#mt_time_1').val(getCurrentDate.toLocaleTimeString());
        $('#mt_time_2').val(customeFormat);
    });

    $('#mt_cm2_1').change(function(){
        var cal_1 = 508 - parseFloat($(this).val());
        var cal_2 = cal_1 * 50.67;
        var cal_3 = cal_2 + 1700;
        var answer = cal_3;
        $('#mt_m2_1').val(answer.toFixed(4));
    });

    $('#mt_m2_1').change(function(){
        var cal_1 = parseFloat($(this).val()) - 1700;
        var cal_2 = cal_1 / 50.67;
        var cal_3 = 508 - cal_2;
        var answer = cal_3;
        $('#mt_cm2_1').val(answer.toFixed(4));
    });

    $('#mt_line').change(function(){
        var getCurrentDate = new Date();
        var getPlaceholderDate = new Date();
        var cal_1 = 508 - parseFloat($(this).val());
        var cal_2 = cal_1 * 50.67;
        var cal_3 = cal_2 + 1700;
        var answer = cal_3;
        var getFirstTwo = parseInt(answer.toString().substring(0,2));
        getPlaceholderDate.setHours(getPlaceholderDate.getHours() + getFirstTwo / parseFloat($('#mt_line').val()));
        var customeFormat = getPlaceholderDate.getDate() + "/" + (getPlaceholderDate.getMonth() + 1) + "/" + getPlaceholderDate.getFullYear()+", "+getPlaceholderDate.toLocaleTimeString();
        $('#mt_time_1').val(getCurrentDate.toLocaleTimeString());
        $('#mt_time_2').val(customeFormat);
    });

    $('#mt_m1_1').change(function(){
        var mt_m1_1 = parseFloat($('#mt_m1_1').val());
        var mt_v1_1 = parseFloat($('#mt_v1_1').val());
        var mt_m2_1 = parseFloat($('#mt_m2_1').val());
        var mt_v2_1 = parseFloat($('#mt_v2_1').val());
        if(!isNaN(mt_m1_1) && !isNaN(mt_m2_1) && !isNaN(mt_v2_1)){
            cal_1 = mt_m2_1 * mt_v2_1;
            answer = cal_1 / mt_m1_1;
            $('#mt_v1_1').val(answer.toFixed(4));
        }
        if(!isNaN(mt_m1_1) && !isNaN(mt_v1_1) && !isNaN(mt_v2_1)){
            cal_1 = mt_m1_1 * mt_v1_1;
            answer = cal_1 / mt_v2_1;
            $('#mt_m2_1').val(answer.toFixed(4));
        }
        if(!isNaN(mt_m1_1) && !isNaN(mt_v1_1) && !isNaN(mt_m2_1)){
            cal_1 = mt_m1_1 * mt_v1_1;
            answer = cal_1 / mt_m2_1;
            $('#mt_v2_1').val(answer.toFixed(4));
        }
    });


    $(".mt_calculation").on("click","#mt_m1_1, #mt_v1_1, #mt_m2_1, #mt_v2_1",function(){
        if($('#mt_m1_1').is(":disabled") === false && 
            $('#mt_v1_1').is(":disabled") === false && 
            $('#mt_m2_1').is(":disabled") === false &&
            $('#mt_v2_1').is(":disabled") === false){
                var getAnswer = confirm("Find This?");
                if(getAnswer === true){
                    $(this).prop("disabled", true);
                }else if(getAnswer === false){
                    $(this).prop("disabled", false);
                }
        }

        if($('#mt_m1_1').val() !== "" && 
            $('#mt_v1_1').val() !== "" && 
            $('#mt_m2_1').val() !== "" &&
            $('#mt_v2_1').val() !== ""){
                var getAnswer = confirm("Find This?");
                if(getAnswer === true){
                    $('#mt_m1_1').prop("disabled", false);
                    $('#mt_v1_1').prop("disabled", false);
                    $('#mt_m2_1').prop("disabled", false);
                    $('#mt_v2_1').prop("disabled", false);
                    $(this).val("");
                    $(this).prop("disabled", true);
                }else if(getAnswer === false){
                    $(this).prop("disabled", false);
                }
        }
    });
    $('#mt_v1_1').change(function(){
        var mt_m1_1 = parseFloat($('#mt_m1_1').val());
        var mt_v1_1 = parseFloat($('#mt_v1_1').val());
        var mt_m2_1 = parseFloat($('#mt_m2_1').val());
        var mt_v2_1 = parseFloat($('#mt_v2_1').val());
        if(!isNaN(mt_v1_1) && !isNaN(mt_m2_1) && !isNaN(mt_v2_1)){
            cal_1 = mt_m2_1 * mt_v2_1;
            answer = cal_1 / mt_v1_1;
            $('#mt_m1_1').val(answer.toFixed(4));
        }
        if(!isNaN(mt_m1_1) && !isNaN(mt_v1_1) && !isNaN(mt_v2_1)){
            cal_1 = mt_m1_1 * mt_v1_1;
            answer = cal_1 / mt_v2_1;
            $('#mt_m2_1').val(answer.toFixed(4));
        }
        if(!isNaN(mt_m1_1) && !isNaN(mt_v1_1) && !isNaN(mt_m2_1)){
            cal_1 = mt_m1_1 * mt_v1_1;
            answer = cal_1 / mt_m2_1;
            $('#mt_v2_1').val(answer.toFixed(4));
        }
        if(!isNaN(mt_m1_1) && !isNaN(mt_m2_1)){
            answer = mt_m2_1 - mt_m1_1;
            $('#mt_m2_m1_1').val(answer);
        }
    });

    $('#mt_m2_1').change(function(){
        var mt_m1_1 = parseFloat($('#mt_m1_1').val());
        var mt_v1_1 = parseFloat($('#mt_v1_1').val());
        var mt_m2_1 = parseFloat($('#mt_m2_1').val());
        var mt_v2_1 = parseFloat($('#mt_v2_1').val());
        if(!isNaN(mt_v1_1) && !isNaN(mt_m2_1) && !isNaN(mt_v2_1)){
            cal_1 = mt_m2_1 * mt_v2_1;
            answer = cal_1 / mt_v1_1;
            $('#mt_m1_1').val(answer.toFixed(4));
        }
        if(!isNaN(mt_m1_1) && !isNaN(mt_m2_1) && !isNaN(mt_v2_1)){
            cal_1 = mt_m2_1 * mt_v2_1;
            answer = cal_1 / mt_m1_1;
            $('#mt_v1_1').val(answer.toFixed(4));
        }
        if(!isNaN(mt_m1_1) && !isNaN(mt_v1_1) && !isNaN(mt_m2_1)){
            cal_1 = mt_m1_1 * mt_v1_1;
            answer = cal_1 / mt_m2_1;
            $('#mt_v2_1').val(answer.toFixed(4));
        }
        if(!isNaN(mt_m1_1) && !isNaN(mt_m2_1)){
            answer = mt_m2_1 - mt_m1_1;
            $('#mt_m2_m1_1').val(answer);
        }
    });

    $('#mt_v2_1').change(function(){
        var mt_m1_1 = parseFloat($('#mt_m1_1').val());
        var mt_v1_1 = parseFloat($('#mt_v1_1').val());
        var mt_m2_1 = parseFloat($('#mt_m2_1').val());
        var mt_v2_1 = parseFloat($('#mt_v2_1').val());
        if(!isNaN(mt_v1_1) && !isNaN(mt_m2_1) && !isNaN(mt_v2_1)){
            cal_1 = mt_m2_1 * mt_v2_1;
            answer = cal_1 / mt_v1_1;
            $('#mt_m1_1').val(answer.toFixed(4));
        }
        if(!isNaN(mt_m1_1) && !isNaN(mt_m2_1) && !isNaN(mt_v2_1)){
            cal_1 = mt_m2_1 * mt_v2_1;
            answer = cal_1 / mt_m1_1;
            $('#mt_v1_1').val(answer.toFixed(4));
        }
        if(!isNaN(mt_m1_1) && !isNaN(mt_v1_1) && !isNaN(mt_v2_1)){
            cal_1 = mt_m1_1 * mt_v1_1;
            answer = cal_1 / mt_v2_1;
            $('#mt_m2_1').val(answer.toFixed(4));
        }
        if(!isNaN(mt_m1_1) && !isNaN(mt_m2_1)){
            answer = mt_m2_1 - mt_m1_1;
            $('#mt_m2_m1_1').val(answer);
        }
    });

    $(".mt_calculation").on("click","#mt_m2_m1_1",function(){
        var mt_m1_1 = parseFloat($('#mt_m1_1').val());
        var mt_m2_1 = parseFloat($('#mt_m2_1').val());
        if(!isNaN(mt_m1_1) && !isNaN(mt_m2_1)){
            answer = mt_m2_1 - mt_m1_1;
            $('#mt_m2_m1_1').val(answer);
        }
    });

    $('#mt_clear').click(function(){
        $('#mt_m1_1').prop("disabled", false);
        $('#mt_m1_1').val("");

        $('#mt_v1_1').prop("disabled", false);
        $('#mt_v1_1').val("");

        $('#mt_m2_1').prop("disabled", false);
        $('#mt_m2_1').val("");

        $('#mt_v2_1').prop("disabled", false);
        $('#mt_v2_1').val("");

        $('#mt_m2_m1_1').val("");
    });
});