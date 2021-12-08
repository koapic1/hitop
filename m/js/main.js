const mainVisualSlider = new Swiper("#mainVisual", {
    autoplay: true,
    speed: 1000,
    effect: "cube",
    loop: true,
    navigation: {
        prevEl: "#mainVisual .prev",
        nextEl: "#mainVisual .next",
    },
});

const newsSlider = new Swiper("#news .listBox", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 2,
    centeredSlides: true,
});

/*
const btnAll = document.querySelector(".all");
const gnb = document.querySelector("#gnb");
console.log(btnAll);
btnAll.addEventListener("click", function () {
    gnb.classList.toggle("on");
    btnAll.classList.toggle("on");
});
*/

//jQuery === $
const header = $("#header");
const btnAll = $(".all");
const gnb = $("#gnb");
const depth02 = gnb.find(".list > li > .depth02");
const depth01 = gnb.find(".list > li > a");
btnAll.on("click", function () {
    //jQuery - class 관련한 4가지 메서드를 제공 addClass, removeClass, hasClass, toggleClass
    gnb.toggleClass("on");
    btnAll.toggleClass("on");
    depth02.stop().delay(500).slideUp();
});

// DOM제어 스크립트는 일단 잘 찾아야 한다.
// 찾은 다음 조작

//a 태그에 이벤트를 걸때 아래 두가지 방법을 통해 a태그의 새로고침 기능을 막을 수 있음
depth01.on("click", function (e) {
    //e.preventDefault();  //방법1
    console.log("aaa");
    //depth02.toggle(); //show = display를 block으로 바꿔주는 메서드. hide() = display 를 none로 바꿔줌
    const selectedDepth02 = $(this).siblings(".depth02");
    // 자바스크립트의 this 는 context환경에 따라 달라진다.
    // 제이쿼리에서 사용하기 위해서는 제이쿼리 함수 $()로 감싸야 사용 가능
    const parentDepth02 = $(this).parent().siblings().find(".depth02");
    parentDepth02.stop().slideUp(100);
    selectedDepth02.stop().slideToggle(100); //slideUp , slideDown , slideToggle
    return false; //방법2
});

// error 종류
// syntax error - 문법적 오휴 실행 자체가 안됨 (괄호의 누락 등)
// not a function - 메서드나 내가 만든 함수의 이름이 틀린 경우
// not defined - 변수가 정의되어 있지 않거나 변수 scope를 챙겨봐야 함

$(window).on("scroll", function () {
    //console.log($(window).scrollTop());
    const st = $(window).scrollTop();
    if (st > 0) {
        if (!header.hasClass("scroll")) {
            header.addClass("scroll");
        }
    } else {
        if (header.hasClass("scroll")) {
            header.removeClass("scroll");
        }
    }
});
