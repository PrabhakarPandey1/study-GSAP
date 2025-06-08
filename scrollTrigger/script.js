gsap.to('.page1 h2',{
    opacity:0,
    x:500,

    scrollTrigger:{
        trigger:".page1 h2",
        scroller:'body',
        // markers:true,
        start:'top 50%',

        scrub:2,

    }
})
gsap.to('.page2 h2',{
    transform:'translate(-163%)',
    scrollTrigger:{
        trigger:".page2",
        scroller:'body',
        // markers:true,
        start:'top 0%',
        end:'top -100%',
        scrub:2,
        pin:true,

    }
})
gsap.to('.page3 h2',{
    opacity:0,
    x:-500,

    scrollTrigger:{
        trigger:".page3 h2",
        scroller:'body',
        // markers:true,
        start:'top 50%',
        scrub:2,

    }
})