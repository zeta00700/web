$(function(){
    $('nav > ul > li').mouseover(function(){
        $('.sub,.bg').stop().slideDown();
    });
    $('nav > ul > li').mouseout(function(){
        $('.sub,.bg').stop().slideUp();
    });

    $('.pop-o').click(function(){
        $('.pop').show();
    });
    $('.pop-c').click(function(){
        $('.pop').hide();
    });

    let a = 0
    function slide(){
        if(a<2){a++;}else{a=0;};
        $('.slide ul').animate({top: -100 * a + "%"},1000);
    }
    setInterval (slide,3000);

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