$(function(){
    $('nav > ul > li').mouseover(function(){
        $('.bg').stop().slideDown();
    });
    $('nav > ul > li').mouseout(function(){
        $('.bg').stop().slideUp();
    });

    let a = 0
    function slide(){
        if(a<9){a++;}else{a=0;};
        $('.s_r .such_ranking').animate({top: -100 * a + "%"},500);
    }
    setInterval (slide,5000);

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