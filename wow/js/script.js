$(function(){//1

    //슬라이스 다운메뉴
    $('nav > ul > li').mouseover(function(){//2
        $(this).find('.submenu').stop().slideDown();
    });//2

    $('nav > ul > li').mouseout(function(){//3
        $(this).find('.submenu').stop().slideUp();
    });//3


    //팝업
    $('#popup-on').click(function(){//4
        $('.popup').show();
    });//4

    $('#popup-close').click(function(){//5
        $('.popup').hide();
    });//5

    // 페이드인아웃
    // var currentIndex = 0;
    let currentIndex = 0;
    
    setInterval(function(){ //6
        let nextIndex=(currentIndex + 1)%3
        //현재 인덱스에서 +1씩 진행하되 3초마다 진행, 0 1 2 3 0 1 2 등등
        $('.slider').eq(currentIndex).fadeOut(1200);
        //currentIndex의 증가값에 따라 해당 s1~s3까지 이미지를 1200ms만큼 페이드 아웃
        $('.slider').eq(nextIndex).fadeIn(1200);
        currentIndex = nextIndex;

    },3000); //6


    //
    const tabBtn = $('.infomenu > a');
    //나는 infomenu 밑에 탭버튼을 a태그 숫자만큼 만들겠음
    const tabCont = $('.infocontents > div');
    
    tabCont.hide().eq(0).show();
    //로딩시 notice 콘텐츠만 보이게 한다

    tabBtn.on('click',function(){
        const index =$(this).index();
        //탭버튼 클릭해서 on클래스가 되면 this의 tabCont가 떠라
        
        $(this).addClass('on').siblings().removeClass('on');
        //내가 클릭한 버튼에 클래스 추가 나머지 버튼 삭제
        tabCont.eq(index).show().siblings().hide();
        //내가 클릭한 버튼 컨텐츠 보여주고 나머지 숨김
    });


});//1