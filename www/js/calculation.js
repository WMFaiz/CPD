$(document).ready(function(){

    // Mixing Tank
    $(".mt_calculation").on("click","#mt_cm_1",function(){
        var getCurrentDate = new Date();
        var getPlaceholderDate = new Date();
        var cal_1 = 508 - parseFloat($(this).val());
        var cal_2 = cal_1 * 50.67;
        var cal_3 = cal_2 + 1700;
        var answer = cal_3;
        var getFirstTwo = 0;
        if(answer >= 1000 && answer < 9999){
            getFirstTwo = parseInt(answer.toString().substring(0,1));
        }else if(answer > 9999){
            getFirstTwo = parseInt(answer.toString().substring(0,2));
        }
        getPlaceholderDate.setHours(getPlaceholderDate.getHours() + getFirstTwo / parseFloat($('#mt_line').val()));
        var customeFormat = getPlaceholderDate.getDate() + "/" + (getPlaceholderDate.getMonth() + 1) + "/" + getPlaceholderDate.getFullYear()+", "+getPlaceholderDate.toLocaleTimeString();
        $('#mt_time_1').val(getCurrentDate.toLocaleTimeString());
        $('#mt_time_2').val(customeFormat);
    });

    // 25048.2952
    // 47.2087
    $(".mt_calculation").on("click","#mt_kg_1",function(){
        var getCurrentDate = new Date();
        var getPlaceholderDate = new Date();
        var answer = parseFloat($(this).val());
        var getFirstTwo = 0;
        if(answer >= 1000 && answer < 9999){
            getFirstTwo = parseInt(answer.toString().substring(0,1));
        }else if(answer > 9999){
            getFirstTwo = parseInt(answer.toString().substring(0,2));
        }
        getPlaceholderDate.setHours(getPlaceholderDate.getHours() + getFirstTwo / parseFloat($('#mt_line').val()));
        var customeFormat = getPlaceholderDate.getDate() + "/" + (getPlaceholderDate.getMonth() + 1) + "/" + getPlaceholderDate.getFullYear()+", "+getPlaceholderDate.toLocaleTimeString();
        $('#mt_time_1').val(getCurrentDate.toLocaleTimeString());
        $('#mt_time_2').val(customeFormat);
    });

    $('#mt_kg_1').change(function(){
        var getCurrentDate = new Date();
        var getPlaceholderDate = new Date();
        var getCurrentKg = parseFloat($(this).val());
        var cal_1 = getCurrentKg - 1700;
        var cal_2 = cal_1 / 50.67;
        var cal_3 = 508 - cal_2;
        var answer = cal_3;
        var getFirstTwo = 0;
        if(getCurrentKg >= 1000 && getCurrentKg < 9999){
            getFirstTwo = parseInt(getCurrentKg.toString().substring(0,1));
        }else if(getCurrentKg > 9999){
            getFirstTwo = parseInt(getCurrentKg.toString().substring(0,2));
        }
        getPlaceholderDate.setHours(getPlaceholderDate.getHours() + getFirstTwo / parseFloat($('#mt_line').val()));
        var customeFormat = getPlaceholderDate.getDate() + "/" + (getPlaceholderDate.getMonth() + 1) + "/" + getPlaceholderDate.getFullYear()+", "+getPlaceholderDate.toLocaleTimeString();
        $('#mt_cm_1').val(answer.toFixed(4));
        $('#mt_time_1').val(getCurrentDate.toLocaleTimeString());
        $('#mt_time_2').val(customeFormat);
    });

    $('#mt_cm_1').change(function(){
        var getCurrentDate = new Date();
        var getPlaceholderDate = new Date();
        var cal_1 = 508 - parseFloat($(this).val());
        var cal_2 = cal_1 * 50.67;
        var cal_3 = cal_2 + 1700;
        var answer = cal_3;
        var getFirstTwo = 0;
        if(answer >= 1000 && answer < 9999){
            getFirstTwo = parseInt(answer.toString().substring(0,1));
        }else if(answer > 9999){
            getFirstTwo = parseInt(answer.toString().substring(0,2));
        }
        getPlaceholderDate.setHours(getPlaceholderDate.getHours() + getFirstTwo / parseFloat($('#mt_line').val()));
        var customeFormat = getPlaceholderDate.getDate() + "/" + (getPlaceholderDate.getMonth() + 1) + "/" + getPlaceholderDate.getFullYear()+", "+getPlaceholderDate.toLocaleTimeString();
        $('#mt_kg_1').val(answer.toFixed(4));
        $('#mt_time_1').val(getCurrentDate.toLocaleTimeString());
        $('#mt_time_2').val(customeFormat);
    });

    $('#mt_cm2_1').change(function(){
        if($('#mt_m2_1').is(":disabled") === false){
            var cal_1 = 508 - parseFloat($(this).val());
            var cal_2 = cal_1 * 50.67;
            var cal_3 = cal_2 + 1700;
            var answer = cal_3;
            $('#mt_m2_1').val(answer.toFixed(4));
        }
    });

    $('#mt_m2_1').change(function(){
        var cal_1 = parseFloat($(this).val()) - 1700;
        var cal_2 = cal_1 / 50.67;
        var cal_3 = 508 - cal_2;
        var answer = cal_3;
        $('#mt_cm2_1').val(answer.toFixed(4));
    });

    $('#mt_cm1_1').change(function(){
        if($('#mt_m1_1').is(":disabled") === false){
            var cal_1 = 508 - parseFloat($(this).val());
            var cal_2 = cal_1 * 50.67;
            var cal_3 = cal_2 + 1700;
            var answer = cal_3;
            $('#mt_m1_1').val(answer.toFixed(4));
        }
    });

    $('#mt_m1_1').change(function(){
        var cal_1 = parseFloat($(this).val()) - 1700;
        var cal_2 = cal_1 / 50.67;
        var cal_3 = 508 - cal_2;
        var answer = cal_3;
        $('#mt_cm1_1').val(answer.toFixed(4));
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

    var clickCount_m1_mt = 0;
    var clickCount_v1_mt = 0;
    var clickCount_m2_mt = 0;
    var clickCount_v2_mt = 0;

    $(".mt_calculation").on("click","#mt_m1_1",function(){
        clickCount_m1_mt += 1;
        clickCount_v1_mt = 0;
        clickCount_m2_mt = 0;
        clickCount_v2_mt = 0;
        if(clickCount_m1_mt >= 2){
            if($('#mt_m1_1').is(":disabled") === false && 
                $('#mt_v1_1').is(":disabled") === false && 
                $('#mt_m2_1').is(":disabled") === false &&
                $('#mt_v2_1').is(":disabled") === false){
                    $(this).prop("disabled", true);
                    $(this).css("background-color", " rgb(0, 255, 145)");
                    clickCount_m1_mt = 0;
                    clickCount_v1_mt = 0;
                    clickCount_m2_mt = 0;
                    clickCount_v2_mt = 0;
            }else if($('#mt_m1_1').is(":disabled") === true || 
                $('#mt_v1_1').is(":disabled") === true || 
                $('#mt_m2_1').is(":disabled") === true ||
                $('#mt_v2_1').is(":disabled") === true){
                    $('#mt_m1_1').prop("disabled", false);
                    $('#mt_m1_1').css("background-color", "rgb(128, 255, 212)");

                    $('#mt_v1_1').prop("disabled", false);
                    $('#mt_v1_1').css("background-color", "rgb(128, 255, 212)");

                    $('#mt_m2_1').prop("disabled", false);
                    $('#mt_m2_1').css("background-color", "rgb(128, 255, 212)");

                    $('#mt_v2_1').prop("disabled", false);
                    $('#mt_v2_1').css("background-color", "rgb(128, 255, 212)");

                    $(this).val("");
                    $(this).prop("disabled", true);
                    $(this).css("background-color", " rgb(0, 255, 145)");
                    clickCount_m1_mt = 0;
                    clickCount_v1_mt = 0;
                    clickCount_m2_mt = 0;
                    clickCount_v2_mt = 0;
            }
        }
    });

    $(".mt_calculation").on("click","#mt_v1_1",function(){
        clickCount_m1_mt = 0;
        clickCount_v1_mt += 1;
        clickCount_m2_mt = 0;
        clickCount_v2_mt = 0;
        if(clickCount_v1_mt >= 2){
            if($('#mt_m1_1').is(":disabled") === false && 
                $('#mt_v1_1').is(":disabled") === false && 
                $('#mt_m2_1').is(":disabled") === false &&
                $('#mt_v2_1').is(":disabled") === false){
                    $(this).prop("disabled", true);
                    $(this).css("background-color", " rgb(0, 255, 145)");
                    clickCount_m1_mt = 0;
                    clickCount_v1_mt = 0;
                    clickCount_m2_mt = 0;
                    clickCount_v2_mt = 0;
            }else if($('#mt_m1_1').is(":disabled") === true || 
                $('#mt_v1_1').is(":disabled") === true || 
                $('#mt_m2_1').is(":disabled") === true ||
                $('#mt_v2_1').is(":disabled") === true){
                    $('#mt_m1_1').prop("disabled", false);
                    $('#mt_m1_1').css("background-color", "rgb(128, 255, 212)");

                    $('#mt_v1_1').prop("disabled", false);
                    $('#mt_v1_1').css("background-color", "rgb(128, 255, 212)");

                    $('#mt_m2_1').prop("disabled", false);
                    $('#mt_m2_1').css("background-color", "rgb(128, 255, 212)");

                    $('#mt_v2_1').prop("disabled", false);
                    $('#mt_v2_1').css("background-color", "rgb(128, 255, 212)");

                    $(this).val("");
                    $(this).prop("disabled", true);
                    $(this).css("background-color", " rgb(0, 255, 145)");
                    clickCount_m1_mt = 0;
                    clickCount_v1_mt = 0;
                    clickCount_m2_mt = 0;
                    clickCount_v2_mt = 0;
            }
        }
    });

    $(".mt_calculation").on("click","#mt_m2_1",function(){
        clickCount_m1_mt = 0;
        clickCount_v1_mt = 0;
        clickCount_m2_mt += 1;
        clickCount_v2_mt = 0;
        if(clickCount_m2_mt >= 2){
            if($('#mt_m1_1').is(":disabled") === false && 
                $('#mt_v1_1').is(":disabled") === false && 
                $('#mt_m2_1').is(":disabled") === false &&
                $('#mt_v2_1').is(":disabled") === false){
                    $(this).prop("disabled", true);
                    $(this).css("background-color", " rgb(0, 255, 145)");
                    clickCount_m1_mt = 0;
                    clickCount_v1_mt = 0;
                    clickCount_m2_mt = 0;
                    clickCount_v2_mt = 0;
            }else if($('#mt_m1_1').is(":disabled") === true || 
                $('#mt_v1_1').is(":disabled") === true || 
                $('#mt_m2_1').is(":disabled") === true ||
                $('#mt_v2_1').is(":disabled") === true){
                    $('#mt_m1_1').prop("disabled", false);
                    $('#mt_m1_1').css("background-color", "rgb(128, 255, 212)");

                    $('#mt_v1_1').prop("disabled", false);
                    $('#mt_v1_1').css("background-color", "rgb(128, 255, 212)");

                    $('#mt_m2_1').prop("disabled", false);
                    $('#mt_m2_1').css("background-color", "rgb(128, 255, 212)");

                    $('#mt_v2_1').prop("disabled", false);
                    $('#mt_v2_1').css("background-color", "rgb(128, 255, 212)");

                    $(this).val("");
                    $(this).prop("disabled", true);
                    $(this).css("background-color", " rgb(0, 255, 145)");
                    clickCount_m1_mt = 0;
                    clickCount_v1_mt = 0;
                    clickCount_m2_mt = 0;
                    clickCount_v2_mt = 0;
            }
        }
    });

    $(".mt_calculation").on("click","#mt_v2_1",function(){
        clickCount_m1_mt = 0;
        clickCount_v1_mt = 0;
        clickCount_m2_mt = 0;
        clickCount_v2_mt += 1;
        if(clickCount_v2_mt >= 2){
            if($('#mt_m1_1').is(":disabled") === false && 
                $('#mt_v1_1').is(":disabled") === false && 
                $('#mt_m2_1').is(":disabled") === false &&
                $('#mt_v2_1').is(":disabled") === false){
                    $(this).prop("disabled", true);
                    $(this).css("background-color", " rgb(0, 255, 145)");
                    clickCount_m1_mt = 0;
                    clickCount_v1_mt = 0;
                    clickCount_m2_mt = 0;
                    clickCount_v2_mt = 0;
            }else if($('#mt_m1_1').is(":disabled") === true || 
                $('#mt_v1_1').is(":disabled") === true || 
                $('#mt_m2_1').is(":disabled") === true ||
                $('#mt_v2_1').is(":disabled") === true){
                    $('#mt_m1_1').prop("disabled", false);
                    $('#mt_m1_1').css("background-color", "rgb(128, 255, 212)");

                    $('#mt_v1_1').prop("disabled", false);
                    $('#mt_v1_1').css("background-color", "rgb(128, 255, 212)");

                    $('#mt_m2_1').prop("disabled", false);
                    $('#mt_m2_1').css("background-color", "rgb(128, 255, 212)");

                    $('#mt_v2_1').prop("disabled", false);
                    $('#mt_v2_1').css("background-color", "rgb(128, 255, 212)");

                    $(this).val("");
                    $(this).prop("disabled", true);
                    $(this).css("background-color", " rgb(0, 255, 145)");
                    clickCount_m1_mt = 0;
                    clickCount_v1_mt = 0;
                    clickCount_m2_mt = 0;
                    clickCount_v2_mt = 0;
            }
        }
    });

    $('#mt_m1_1, #mt_cm1_1, #mt_v1_1, #mt_cm2_1, #mt_m2_1, #mt_v2_1').change(function(){
        var mt_m1_1 = parseFloat($('#mt_m1_1').val());
        var mt_v1_1 = parseFloat($('#mt_v1_1').val());
        var mt_m2_1 = parseFloat($('#mt_m2_1').val());
        var mt_v2_1 = parseFloat($('#mt_v2_1').val());
        if($('#mt_m1_1').is(":disabled") === true){
            if(!isNaN(mt_v1_1) && !isNaN(mt_m2_1) && !isNaN(mt_v2_1)){
                cal_1 = mt_m2_1 * mt_v2_1;
                answer = cal_1 / mt_v1_1;
                $('#mt_m1_1').val(answer.toFixed(4));

                var cal_2 = parseFloat($('#mt_m1_1').val()) - 1700;
                var cal_3 = cal_2 / 50.67;
                var cal_4 = 508 - cal_3;
                $('#mt_cm1_1').val(cal_4.toFixed(4));
            }
        }
        if($('#mt_m2_1').is(":disabled") === true){
            if(!isNaN(mt_m1_1) && !isNaN(mt_v1_1) && !isNaN(mt_v2_1)){
                cal_1 = mt_m1_1 * mt_v1_1;
                answer = cal_1 / mt_v2_1;
                $('#mt_m2_1').val(answer.toFixed(4));

                var cal_2 = parseFloat($('#mt_m2_1').val()) - 1700;
                var cal_3 = cal_2 / 50.67;
                var cal_4 = 508 - cal_3;
                $('#mt_cm2_1').val(cal_4.toFixed(4));
            }
        }
        if($('#mt_v2_1').is(":disabled") === true){
            if(!isNaN(mt_m1_1) && !isNaN(mt_v1_1) && !isNaN(mt_m2_1)){
                cal_1 = mt_m1_1 * mt_v1_1;
                answer = cal_1 / mt_m2_1;
                $('#mt_v2_1').val(answer.toFixed(4));
            }
        }
        if($('#mt_v1_1').is(":disabled") === true){
            if(!isNaN(mt_m1_1) && !isNaN(mt_v2_1) && !isNaN(mt_m2_1)){
                cal_1 = mt_m2_1 * mt_v2_1;
                answer = cal_1 / mt_m1_1;
                $('#mt_v1_1').val(answer.toFixed(4));
            }
        }

        if(!isNaN(mt_m2_1)){
            var mt_full_tank_1 = 26000.0000 - mt_m2_1;
            $('#mt_full_tank_1').val(mt_full_tank_1);
        }

        if(!isNaN(mt_m1_1) && !isNaN(mt_m2_1)){
            var mt_m2_m1_1 = mt_m2_1 - mt_m1_1;
            $('#mt_m2_m1_1').val(mt_m2_m1_1);
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

    $(".mt_calculation").on("click","#mt_full_tank_1",function(){
        var mt_m2_1 = parseFloat($('#mt_m2_1').val());
        if(!isNaN(mt_m2_1)){
            var mt_full_tank_1 = 26000.0000 - mt_m2_1;
            $('#mt_full_tank_1').val(mt_full_tank_1);
        }
    });

    $('#mt_clear').click(function(){
        $('#mt_m1_1').prop("disabled", false);
        $('#mt_m1_1').css("background-color", "rgb(128, 255, 212)");
        $('#mt_m1_1').val("");
        $('#mt_cm1_1').val("");

        $('#mt_v1_1').prop("disabled", false);
        $('#mt_v1_1').css("background-color", "rgb(128, 255, 212)");
        $('#mt_v1_1').val("");

        $('#mt_m2_1').prop("disabled", false);
        $('#mt_m2_1').css("background-color", "rgb(128, 255, 212)");
        $('#mt_m2_1').val("");
        $('#mt_cm2_1').val("");

        $('#mt_v2_1').prop("disabled", false);
        $('#mt_v2_1').css("background-color", "rgb(128, 255, 212)");
        $('#mt_v2_1').val("");

        $('#mt_full_tank_1').val("");

        $('#mt_m2_m1_1').val("");
    });





    // Coagulant Tank
    $(".ct_calculation").on("click","#ct_cm_1",function(){
        var getCurrentDate = new Date();
        var getPlaceholderDate = new Date();
        var cal_1 = 300 - parseFloat($(this).val());
        var cal_2 = cal_1 * 50.67;
        var cal_3 = cal_2 + 1600;
        var answer = cal_3;
        var getFirstTwo = 0;
        if(answer >= 1000 && answer < 9999){
            getFirstTwo = parseInt(answer.toString().substring(0,1));
        }else if(answer > 9999){
            getFirstTwo = parseInt(answer.toString().substring(0,2));
        }
        getPlaceholderDate.setHours(getPlaceholderDate.getHours() + getFirstTwo / parseFloat($('#ct_line').val()));
        var customeFormat = getPlaceholderDate.getDate() + "/" + (getPlaceholderDate.getMonth() + 1) + "/" + getPlaceholderDate.getFullYear()+", "+getPlaceholderDate.toLocaleTimeString();
        $('#ct_time_1').val(getCurrentDate.toLocaleTimeString());
        $('#ct_time_2').val(customeFormat);
    });

    $(".ct_calculation").on("click","#ct_kg_1",function(){
        var getCurrentDate = new Date();
        var getPlaceholderDate = new Date();
        var answer = parseFloat($(this).val());
        var getFirstTwo = 0;
        if(answer >= 1000 && answer < 9999){
            getFirstTwo = parseInt(answer.toString().substring(0,1));
        }else if(answer > 9999){
            getFirstTwo = parseInt(answer.toString().substring(0,2));
        }
        getPlaceholderDate.setHours(getPlaceholderDate.getHours() + getFirstTwo / parseFloat($('#ct_line').val()));
        var customeFormat = getPlaceholderDate.getDate() + "/" + (getPlaceholderDate.getMonth() + 1) + "/" + getPlaceholderDate.getFullYear()+", "+getPlaceholderDate.toLocaleTimeString();
        $('#ct_time_1').val(getCurrentDate.toLocaleTimeString());
        $('#ct_time_2').val(customeFormat);
    });

    $('#ct_kg_1').change(function(){
        var getCurrentDate = new Date();
        var getPlaceholderDate = new Date();
        var getCurrentKg = parseFloat($(this).val());
        var cal_1 = getCurrentKg - 1600;
        var cal_2 = cal_1 / 50.67;
        var cal_3 = 300 - cal_2;
        var answer = cal_3;
        var getFirstTwo = 0;
        if(getCurrentKg >= 1000 && getCurrentKg < 9999){
            getFirstTwo = parseInt(getCurrentKg.toString().substring(0,1));
        }else if(getCurrentKg > 9999){
            getFirstTwo = parseInt(getCurrentKg.toString().substring(0,2));
        }
        getPlaceholderDate.setHours(getPlaceholderDate.getHours() + getFirstTwo / parseFloat($('#ct_line').val()));
        var customeFormat = getPlaceholderDate.getDate() + "/" + (getPlaceholderDate.getMonth() + 1) + "/" + getPlaceholderDate.getFullYear()+", "+getPlaceholderDate.toLocaleTimeString();
        $('#ct_cm_1').val(answer.toFixed(4));
        $('#ct_time_1').val(getCurrentDate.toLocaleTimeString());
        $('#ct_time_2').val(customeFormat);
    });

    $('#ct_cm_1').change(function(){
        var getCurrentDate = new Date();
        var getPlaceholderDate = new Date();
        var cal_1 = 300 - parseFloat($(this).val());
        var cal_2 = cal_1 * 50.67;
        var cal_3 = cal_2 + 1600;
        var answer = cal_3;
        var getFirstTwo = 0;
        if(answer >= 1000 && answer < 9999){
            getFirstTwo = parseInt(answer.toString().substring(0,1));
        }else if(answer > 9999){
            getFirstTwo = parseInt(answer.toString().substring(0,2));
        }
        getPlaceholderDate.setHours(getPlaceholderDate.getHours() + getFirstTwo / parseFloat($('#ct_line').val()));
        var customeFormat = getPlaceholderDate.getDate() + "/" + (getPlaceholderDate.getMonth() + 1) + "/" + getPlaceholderDate.getFullYear()+", "+getPlaceholderDate.toLocaleTimeString();
        $('#ct_kg_1').val(answer.toFixed(4));
        $('#ct_time_1').val(getCurrentDate.toLocaleTimeString());
        $('#ct_time_2').val(customeFormat);
    });

    $('#ct_cm2_1').change(function(){
        if($('#ct_m2_1').is(":disabled") === false){
            var cal_1 = 300 - parseFloat($(this).val());
            var cal_2 = cal_1 * 50.67;
            var cal_3 = cal_2 + 1600;
            var answer = cal_3;
            $('#ct_m2_1').val(answer.toFixed(4));
        }
    });

    $('#ct_m2_1').change(function(){
        var cal_1 = parseFloat($(this).val()) - 1600;
        var cal_2 = cal_1 / 50.67;
        var cal_3 = 300 - cal_2;
        var answer = cal_3;
        $('#ct_cm2_1').val(answer.toFixed(4));
    });

    $('#ct_cm1_1').change(function(){
        if($('#ct_m1_1').is(":disabled") === false){
            var cal_1 = 300 - parseFloat($(this).val());
            var cal_2 = cal_1 * 50.67;
            var cal_3 = cal_2 + 1600;
            var answer = cal_3;
            $('#ct_m1_1').val(answer.toFixed(4));
        }
    });

    $('#ct_m1_1').change(function(){
        var cal_1 = parseFloat($(this).val()) - 1600;
        var cal_2 = cal_1 / 50.67;
        var cal_3 = 300 - cal_2;
        var answer = cal_3;
        $('#ct_cm1_1').val(answer.toFixed(4));
    });

    $('#ct_line').change(function(){
        var getCurrentDate = new Date();
        var getPlaceholderDate = new Date();
        var cal_1 = 300 - parseFloat($(this).val());
        var cal_2 = cal_1 * 50.67;
        var cal_3 = cal_2 + 1600;
        var answer = cal_3;
        var getFirstTwo = parseInt(answer.toString().substring(0,2));
        getPlaceholderDate.setHours(getPlaceholderDate.getHours() + getFirstTwo / parseFloat($('#ct_line').val()));
        var customeFormat = getPlaceholderDate.getDate() + "/" + (getPlaceholderDate.getMonth() + 1) + "/" + getPlaceholderDate.getFullYear()+", "+getPlaceholderDate.toLocaleTimeString();
        $('#ct_time_1').val(getCurrentDate.toLocaleTimeString());
        $('#ct_time_2').val(customeFormat);
    });

    var clickCount_m1_ct = 0;
    var clickCount_v1_ct = 0;
    var clickCount_m2_ct = 0;
    var clickCount_v2_ct = 0;

    $(".ct_calculation").on("click","#ct_m1_1",function(){
        clickCount_m1_ct += 1;
        clickCount_v1_ct = 0;
        clickCount_m2_ct = 0;
        clickCount_v2_ct = 0;
        if(clickCount_m1_ct >= 2){
            if($('#ct_m1_1').is(":disabled") === false && 
                $('#ct_v1_1').is(":disabled") === false && 
                $('#ct_m2_1').is(":disabled") === false &&
                $('#ct_v2_1').is(":disabled") === false){
                    $(this).prop("disabled", true);
                    $(this).css("background-color", " rgb(0, 255, 145)");
                    clickCount_m1_ct = 0;
                    clickCount_v1_ct = 0;
                    clickCount_m2_ct = 0;
                    clickCount_v2_ct = 0;
            }else if($('#ct_m1_1').is(":disabled") === true || 
                $('#ct_v1_1').is(":disabled") === true || 
                $('#ct_m2_1').is(":disabled") === true ||
                $('#ct_v2_1').is(":disabled") === true){
                    $('#ct_m1_1').prop("disabled", false);
                    $('#ct_m1_1').css("background-color", "rgb(128, 255, 212)");

                    $('#ct_v1_1').prop("disabled", false);
                    $('#ct_v1_1').css("background-color", "rgb(128, 255, 212)");

                    $('#ct_m2_1').prop("disabled", false);
                    $('#ct_m2_1').css("background-color", "rgb(128, 255, 212)");

                    $('#ct_v2_1').prop("disabled", false);
                    $('#ct_v2_1').css("background-color", "rgb(128, 255, 212)");

                    $(this).val("");
                    $(this).prop("disabled", true);
                    $(this).css("background-color", " rgb(0, 255, 145)");
                    clickCount_m1_ct = 0;
                    clickCount_v1_ct = 0;
                    clickCount_m2_ct = 0;
                    clickCount_v2_ct = 0;
            }
        }
    });

    $(".ct_calculation").on("click","#ct_v1_1",function(){
        clickCount_m1_ct = 0;
        clickCount_v1_ct += 1;
        clickCount_m2_ct = 0;
        clickCount_v2_ct = 0;
        if(clickCount_v1_ct >= 2){
            if($('#ct_m1_1').is(":disabled") === false && 
                $('#ct_v1_1').is(":disabled") === false && 
                $('#ct_m2_1').is(":disabled") === false &&
                $('#ct_v2_1').is(":disabled") === false){
                    $(this).prop("disabled", true);
                    $(this).css("background-color", " rgb(0, 255, 145)");
                    clickCount_m1_ct = 0;
                    clickCount_v1_ct = 0;
                    clickCount_m2_ct = 0;
                    clickCount_v2_ct = 0;
            }else if($('#ct_m1_1').is(":disabled") === true || 
                $('#ct_v1_1').is(":disabled") === true || 
                $('#ct_m2_1').is(":disabled") === true ||
                $('#ct_v2_1').is(":disabled") === true){
                    $('#ct_m1_1').prop("disabled", false);
                    $('#ct_m1_1').css("background-color", "rgb(128, 255, 212)");

                    $('#ct_v1_1').prop("disabled", false);
                    $('#ct_v1_1').css("background-color", "rgb(128, 255, 212)");

                    $('#ct_m2_1').prop("disabled", false);
                    $('#ct_m2_1').css("background-color", "rgb(128, 255, 212)");

                    $('#ct_v2_1').prop("disabled", false);
                    $('#ct_v2_1').css("background-color", "rgb(128, 255, 212)");

                    $(this).val("");
                    $(this).prop("disabled", true);
                    $(this).css("background-color", " rgb(0, 255, 145)");
                    clickCount_m1_ct = 0;
                    clickCount_v1_ct = 0;
                    clickCount_m2_ct = 0;
                    clickCount_v2_ct = 0;
            }
        }
    });

    $(".ct_calculation").on("click","#ct_m2_1",function(){
        clickCount_m1_ct = 0;
        clickCount_v1_ct = 0;
        clickCount_m2_ct += 1;
        clickCount_v2_ct = 0;
        if(clickCount_m2_ct >= 2){
            if($('#ct_m1_1').is(":disabled") === false && 
                $('#ct_v1_1').is(":disabled") === false && 
                $('#ct_m2_1').is(":disabled") === false &&
                $('#ct_v2_1').is(":disabled") === false){
                    $(this).prop("disabled", true);
                    $(this).css("background-color", " rgb(0, 255, 145)");
                    clickCount_m1_ct = 0;
                    clickCount_v1_ct = 0;
                    clickCount_m2_ct = 0;
                    clickCount_v2_ct = 0;
            }else if($('#ct_m1_1').is(":disabled") === true || 
                $('#ct_v1_1').is(":disabled") === true || 
                $('#ct_m2_1').is(":disabled") === true ||
                $('#ct_v2_1').is(":disabled") === true){
                    $('#ct_m1_1').prop("disabled", false);
                    $('#ct_m1_1').css("background-color", "rgb(128, 255, 212)");

                    $('#ct_v1_1').prop("disabled", false);
                    $('#ct_v1_1').css("background-color", "rgb(128, 255, 212)");

                    $('#ct_m2_1').prop("disabled", false);
                    $('#ct_m2_1').css("background-color", "rgb(128, 255, 212)");

                    $('#ct_v2_1').prop("disabled", false);
                    $('#ct_v2_1').css("background-color", "rgb(128, 255, 212)");

                    $(this).val("");
                    $(this).prop("disabled", true);
                    $(this).css("background-color", " rgb(0, 255, 145)");
                    clickCount_m1_ct = 0;
                    clickCount_v1_ct = 0;
                    clickCount_m2_ct = 0;
                    clickCount_v2_ct = 0;
            }
        }
    });

    $(".ct_calculation").on("click","#ct_v2_1",function(){
        clickCount_m1_ct = 0;
        clickCount_v1_ct = 0;
        clickCount_m2_ct = 0;
        clickCount_v2_ct += 1;
        if(clickCount_v2_ct >= 2){
            if($('#ct_m1_1').is(":disabled") === false && 
                $('#ct_v1_1').is(":disabled") === false && 
                $('#ct_m2_1').is(":disabled") === false &&
                $('#ct_v2_1').is(":disabled") === false){
                    $(this).prop("disabled", true);
                    $(this).css("background-color", " rgb(0, 255, 145)");
                    clickCount_m1_ct = 0;
                    clickCount_v1_ct = 0;
                    clickCount_m2_ct = 0;
                    clickCount_v2_ct = 0;
            }else if($('#ct_m1_1').is(":disabled") === true || 
                $('#ct_v1_1').is(":disabled") === true || 
                $('#ct_m2_1').is(":disabled") === true ||
                $('#ct_v2_1').is(":disabled") === true){
                    $('#ct_m1_1').prop("disabled", false);
                    $('#ct_m1_1').css("background-color", "rgb(128, 255, 212)");

                    $('#ct_v1_1').prop("disabled", false);
                    $('#ct_v1_1').css("background-color", "rgb(128, 255, 212)");

                    $('#ct_m2_1').prop("disabled", false);
                    $('#ct_m2_1').css("background-color", "rgb(128, 255, 212)");

                    $('#ct_v2_1').prop("disabled", false);
                    $('#ct_v2_1').css("background-color", "rgb(128, 255, 212)");

                    $(this).val("");
                    $(this).prop("disabled", true);
                    $(this).css("background-color", " rgb(0, 255, 145)");
                    clickCount_m1_ct = 0;
                    clickCount_v1_ct = 0;
                    clickCount_m2_ct = 0;
                    clickCount_v2_ct = 0;
            }
        }
    });

    $('#ct_m1_1, #ct_cm1_1, #ct_v1_1, #ct_cm2_1, #ct_m2_1, #ct_v2_1').change(function(){
        var ct_m1_1 = parseFloat($('#ct_m1_1').val());
        var ct_v1_1 = parseFloat($('#ct_v1_1').val());
        var ct_m2_1 = parseFloat($('#ct_m2_1').val());
        var ct_v2_1 = parseFloat($('#ct_v2_1').val());
        if($('#ct_m1_1').is(":disabled") === true){
            if(!isNaN(ct_v1_1) && !isNaN(ct_m2_1) && !isNaN(ct_v2_1)){
                cal_1 = ct_m2_1 * ct_v2_1;
                answer = cal_1 / ct_v1_1;
                $('#ct_m1_1').val(answer.toFixed(4));

                var cal_2 = parseFloat($('#ct_m1_1').val()) - 1600;
                var cal_3 = cal_2 / 50.67;
                var cal_4 = 300 - cal_3;
                $('#ct_cm1_1').val(cal_4.toFixed(4));
            }
        }
        if($('#ct_m2_1').is(":disabled") === true){
            if(!isNaN(ct_m1_1) && !isNaN(ct_v1_1) && !isNaN(ct_v2_1)){
                cal_1 = ct_m1_1 * ct_v1_1;
                answer = cal_1 / ct_v2_1;
                $('#ct_m2_1').val(answer.toFixed(4));

                var cal_2 = parseFloat($('#ct_m2_1').val()) - 1600;
                var cal_3 = cal_2 / 50.67;
                var cal_4 = 300 - cal_3;
                $('#ct_cm2_1').val(cal_4.toFixed(4));
            }
        }
        if($('#ct_v2_1').is(":disabled") === true){
            if(!isNaN(ct_m1_1) && !isNaN(ct_v1_1) && !isNaN(ct_m2_1)){
                cal_1 = ct_m1_1 * ct_v1_1;
                answer = cal_1 / ct_m2_1;
                $('#ct_v2_1').val(answer.toFixed(4));
            }
        }
        if($('#ct_v1_1').is(":disabled") === true){
            if(!isNaN(ct_m1_1) && !isNaN(ct_v2_1) && !isNaN(ct_m2_1)){
                cal_1 = ct_m2_1 * ct_v2_1;
                answer = cal_1 / ct_m1_1;
                $('#ct_v1_1').val(answer.toFixed(4));
            }
        }

        if(!isNaN(ct_m2_1)){
            var ct_full_tank_1 = 26000.0000 - ct_m2_1;
            $('#ct_full_tank_1').val(ct_full_tank_1);
        }

        if(!isNaN(ct_m1_1) && !isNaN(ct_m2_1)){
            var ct_m2_m1_1 = ct_m2_1 - ct_m1_1;
            $('#mt_m2_m1_1').val(ct_m2_m1_1);
        }
    });

    $(".ct_calculation").on("click","#ct_m2_m1_1",function(){
        var ct_m1_1 = parseFloat($('#ct_m1_1').val());
        var ct_m2_1 = parseFloat($('#ct_m2_1').val());
        if(!isNaN(ct_m1_1) && !isNaN(ct_m2_1)){
            answer = ct_m2_1 - ct_m1_1;
            $('#ct_m2_m1_1').val(answer);
        }
    });

    $(".ct_calculation").on("click","#ct_full_tank_1",function(){
        var ct_m2_1 = parseFloat($('#ct_m2_1').val());
        if(!isNaN(ct_m2_1)){
            var ct_full_tank_1 = 26000.0000 - ct_m2_1;
            $('#ct_full_tank_1').val(ct_full_tank_1);
        }
    });

    $('#ct_clear').click(function(){
        $('#ct_m1_1').prop("disabled", false);
        $('#ct_m1_1').css("background-color", "rgb(128, 255, 212)");
        $('#ct_m1_1').val("");
        $('#ct_cm1_1').val("");

        $('#ct_v1_1').prop("disabled", false);
        $('#ct_v1_1').css("background-color", "rgb(128, 255, 212)");
        $('#ct_v1_1').val("");

        $('#ct_m2_1').prop("disabled", false);
        $('#ct_m2_1').css("background-color", "rgb(128, 255, 212)");
        $('#ct_m2_1').val("");
        $('#ct_cm2_1').val("");

        $('#ct_v2_1').prop("disabled", false);
        $('#ct_v2_1').css("background-color", "rgb(128, 255, 212)");
        $('#ct_v2_1').val("");

        $('#ct_full_tank_1').val("");

        $('#ct_m2_m1_1').val("");
    });
});