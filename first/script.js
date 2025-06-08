// gsap.to('.box',{
//     x:1210,
//     duration:5,
//     delay:1,
//     rotate:360,
//     borderRadius:"-50%",
//     repeat: -1,
//     yoyo:true
// })
// gsap.from('.box2',{
//     x:1210,
//     duration:5,
//     delay:1,
//     rotate:360,
//     yoyo:true,
//     repeat: -1,
//     borderRadius:"50%",
// })



// gsap.to('.crimson-box',{ 
//     x:1200,
//     rotate:360,
//     duration:1.5,
//     delay:1,
//     repeat:-1,
//     yoyo:"true"

// })
// gsap.to('.green-box',{ 
//     x:1200,
//     backgroundColor:"green",
//     borderRadius:"25%",
//     duration:1.5,
//     delay:2.5,
//     repeat:-1,
//     yoyo:"true"

// })
// gsap.to('.blue-box',{ 
//     x:1200,
//     rotate:360,
//     scale:0.75,
//     borderRadius:"50%",
//     duration:1.5,
//     delay:4,
//     repeat:-1,
//     yoyo:"true"
// })


// var tl = gsap.timeline()

// tl.to('.crimson-box',{
//     x:1180,
//     rotate:360,
//     duration:1.5,
//     delay:1,
//     repeat:-1,
//     yoyo:"true",
// })


// tl.to('.green-box',{
//     x:1180,
//     rotate:360,
//     duration:1.5,
//     borderRadius:"25%",
//     repeat:-1,
//     yoyo:"true",
// })


// tl.to('.blue-box',{
//     x:1180,
//     rotate:360,
//     duration:1.5,
//     borderRadius:"50%",
//     repeat:-1,
//     yoyo:"true",


// })



var tl = gsap.timeline()

tl.from("h2",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5,
})
tl.from("h4",{
    y:-40,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.3
})
tl.from(".des",{
    y:20,
    opacity:0,
    duration:0.5,
    scale:0.2,

})