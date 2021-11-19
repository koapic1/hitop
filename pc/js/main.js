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
