// 네비게이션
$('.nav > ul > li').mouseover(function(){
    // $('.nav > ul > li').find('.submenu').stop().slideDown(200);
    $(this).find('.submenu').stop().slideDown(200);
});
$('.nav > ul > li').mouseout(function(){
    $(this).find('.submenu').stop().slideUp(200);
});

// let currentIndex = 0; //첫번째 이미지
// let currentIndex = -389; //두번째 이미지
// let currentIndex = -778; //세번째 이미지


// 이미지 슬라이드(상하)
// let currentIndex = 0; //첫번째 이미지

// setInterval(function(){
//     if(currentIndex < 2){
//         currentIndex++
//     } else {
//         currentIndex = 0;
//     }
//     let slidePosition = currentIndex * (-389) + "px"; 

//     $('.slideList').animate({top:slidePosition},400);
// },3000);

// 이미지 슬라이드(좌우)
let currentIndex = 0;

setInterval(function(){
    if(currentIndex < 2){
        currentIndex++;
    } else {
        currentIndex = 0;
    }

    let slidePosition = currentIndex * (-1000) + 'px';
    // console.log(slidePosition);

    $('.slideList').animate({left:slidePosition},400)
},3000)

// 탭메뉴
let tabBtn = $('.tab-btn > ul > li');
let tabCont = $('.tab-cont > div');

tabCont.hide().eq(0).show();

tabBtn.click(function(e){
    e.preventDefault();
    let 버튼클릭시대상 = $(this);
    var index = 버튼클릭시대상.index(); //번호 매기기
    // console.log(index);
    tabBtn.removeClass('active'); //클래스라는 명칭이 있기때문에 . 쓰지않음
    버튼클릭시대상.addClass('active');
    tabCont.css('display','none');
    tabCont.eq(index).css('display','block');
});

//레이어 팝업
$("#contents1 .right").click(function(){
    $(".layer").slideDown(300);
    $(".layer_bg").show();
});
$(".layer .close").click(function(){
    $(".layer").slideUp(300);
    $(".layer_bg").hide();
});
