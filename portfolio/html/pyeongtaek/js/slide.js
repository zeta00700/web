$(function(){
    
    let b = 0
    function slide(){
        if(b<4){b++;}else{b=0;};
        $('.slide ul').animate({left: -100 * b + "%"},1200);
    }
    setInterval (slide,7500);

    let c = 0
    function slide(){
        if(c<2){c++;}else{c=0;};
        $('.t_con_4 div ul').animate({left: -100 * c + "%"},1000);
    }
    setInterval (slide,3000);

});