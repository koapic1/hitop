Splitting();

const mainVisualSlider = new Swiper("#mainVisual", {
    autoplay: true,
    speed: 1000,
    effect: "fade",
    loop: true,
    navigation: {
        prevEl: "#mainVisual .prev",
        nextEl: "#mainVisual .next",
    },
});

const gnbItem = document.querySelectorAll("#gnb .list > li");
//.querySelectorAll(찾는 것) : 배열처럼 생긴 nodeList를 리턴한다.
const header = document.querySelector("#header");
console.log(gnbItem.length); // 현재 gnbTtem의 length를 숫자로 출력 gnbItem = "#gnb .list > li"
for (i = 0; i < gnbItem.length; i++) {
    gnbItem[i].addEventListener("mouseenter", function () {
        //.addEventListener 해당 액션(mouseenter)에 이벤트를 추가
        header.classList.add("open"); // 지정한 이벤트 발생시 open 이라는 class를 생성
    });
    gnbItem[i].addEventListener("mouseleave", function () {
        header.classList.remove("open");
    });
}

gsap.from("#mainVisual .slogan .main .char", { opacity: 0, y: -150, ease: "bounce", duration: 2, stagger: 0.1 });
gsap.from("#mainVisual .slogan .sub .char", { opacity: 0, x: 150, ease: "power4", duration: 1, delay: 3, stagger: 0.02 });
