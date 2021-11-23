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
console.log(gnbItem.length);
for (i = 0; i < gnbItem.length; i++) {
    gnbItem[i].addEventListener("mouseenter", function () {
        header.classList.add("open");
    });
    gnbItem[i].addEventListener("mouseleave", function () {
        header.classList.remove("open");
    });
}
