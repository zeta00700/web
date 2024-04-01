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

    $('.num').each(function(){ //각각 .num클래스 기능 정의
        $(this).prop('Counter',0).animate({ //카운터속성정의
            Counter:$(this).text()}, //보고있는 숫자를 
            {duration:2000, //2000ms만큼 
            easing:'swing', //숫자를 돌린다
            step:function(now){
                $(this).text(Math.ceil(now));
            } //html 입력된 최종 숫자까지,math.cell은 소수값이 존재할 때
            //값을 올리는 역할을 하는 함수이며 math.floor는 소수값이 존재할 때
            //소수값을 버리는 역할을 하는 함수이며 math.round는 소수값에 따라
            //올리거나 버리는 역할을 하는 반올림 함수이빈다
        });
    });

});