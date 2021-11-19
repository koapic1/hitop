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

const btnAll = document.querySelector(".all");
const gnb = document.querySelector("#gnb");
console.log(btnAll);
btnAll.addEventListener("click", function () {
    gnb.classList.toggle("on");
    btnAll.classList.toggle("on");
});
