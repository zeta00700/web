$(function(){
    $('.close').click(function(){
        $('main').hide();
        $('.folder').show();
    });
    $('.open').click(function(){
        $('main').show();
        $('.folder').hide();
    });

    $('.help_o').click(function(){
        $('.help').show();
    });
    $('.help_c').click(function(){
        $('.help').hide();
    });
});
