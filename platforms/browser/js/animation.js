$(document).ready(function(){
    $(".mt, .st, .ct").click(function(){
        var getname = $(this).children('.title').text();
        switch(getname){
            case "MT":
                $('.mt').css('z-index', 10);
                $('.st').css('z-index', 7);
                $('.ct').css('z-index', 9);
                $('.header .title').text('Mixing Tank');
                break;
            case "ST":
                $('.mt').css('z-index', 7);
                $('.st').css('z-index', 10);
                $('.ct').css('z-index', 9);
                $('.header .title').text('Storage Tank');
                break;
            case "CT":
                $('.mt').css('z-index', 9);
                $('.st').css('z-index', 9);
                $('.ct').css('z-index', 10);
                $('.header .title').text('Coagalant Tank');
                break;
            default:
                break;
        }
    });
});