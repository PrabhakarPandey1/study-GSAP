window.addEventListener('wheel', (data) => {
    // Sabse pehle purani animation ko roko
    gsap.killTweensOf('.card-grid');

    if (data.deltaY > 0) {
        // Scroll down → left move
        gsap.to('.card-grid', {
            x: "-200%",          // Correct syntax
            duration: 10,
            repeat: -1,
            ease: 'none'
        });
    } else {
        // Scroll up → right move
        gsap.to('.card-grid', {
            x: "0%",             // Move back to start
            duration: 11,
            repeat: -1,
            ease: 'none'
        });
    }
});
