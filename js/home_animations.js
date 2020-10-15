anime({
    targets: 'div.hello',
    translateY: [-400, 0],
        // { value: -350, duration: 1000 },
        // { value: 35, duration: 1000 }
    delay: anime.stagger(100),
    easing: 'easeOutElastic(2, .5)',
    duration: 2000,
    autoplay: true
});