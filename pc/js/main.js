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
const header = document.querySelector("#header");
gnbItem.addEventListener("mouseenter", function () {
    header.classList.add("open");
});
