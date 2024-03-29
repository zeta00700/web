$(function(){
    

    let b = 0
    function slide(){
        if(b<4){b++;}else{b=0;};
        $('.slide ul').animate({left: -100 * b + "%"},1200);
    }
    setInterval (slide,7500);
});