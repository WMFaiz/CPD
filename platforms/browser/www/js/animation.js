$(document).ready(function(){

    $('.mt_calculation .methods').show();
    $('.st_calculation .methods').hide();
    $('.ct_calculation .methods').hide();

    $(".mt, .st, .ct").click(function(){
        var getname = $(this).children('.title').text();
        switch(getname){
            case "MT":
                $('.mt').css('z-index', 10);
                $('.st').css('z-index', 8);
                $('.ct').css('z-index', 9);
                $('.header .title').text('Mixing Tank');
                $('.mt_calculation .methods').fadeIn(200);
                $('.st_calculation .methods').fadeOut(200);
                $('.ct_calculation .methods').fadeOut(200);
                $('body').css('background-color', "rgb(16, 24, 32)");
                break;
            case "ST":
                $('.mt').css('z-index', 8);
                $('.st').css('z-index', 10);
                $('.ct').css('z-index', 9);
                $('.header .title').text('Storage Tank');
                $('.mt_calculation .methods').fadeOut(200);
                $('.st_calculation .methods').fadeIn(200);
                $('.ct_calculation .methods').fadeOut(200);
                $('body').css('background-color', "rgb(16, 24, 32)");
                break;
            case "CT":
                $('.mt').css('z-index', 9);
                $('.st').css('z-index', 9);
                $('.ct').css('z-index', 10);
                $('.header .title').text('Coagulant Tank');
                $('.mt_calculation .methods').fadeOut(200);
                $('.st_calculation .methods').fadeOut(200);
                $('.ct_calculation .methods').fadeIn(200);
                $('body').css('background-color', "rgb(16, 32, 25)");
                break;
            default:
                break;
        }
    });
});