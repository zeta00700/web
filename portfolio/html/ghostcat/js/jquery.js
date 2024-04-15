$(function(){

    let i = 0
    $('.tabmenu > li').click(function(){
        $('.tabmenu > li').removeClass('on');
        $(this).addClass('on');

        i = $(this).index();
        $('.tabcon').hide();
        $('.tabcon').eq(i).show();
        return false;
    });

});