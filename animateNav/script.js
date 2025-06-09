let tL = gsap.timeline({pause:true})

tL.to('.full',{
    right:"0",
    duration:0.5,

})
tL.from('.full h4',{
    x:100,
    duration:0.6,
    stagger:0.2,
    opacity:0,
})
tL.from('.full i',{
    opacity:0,
    // duration:1,
    // stagger:0.5
})

tL.pause()

let menuIcon = document.querySelector('.nav i')
let fullIcon = document.querySelector('.full i')

menuIcon.addEventListener('click',()=>{
    tL.play()
    
})

fullIcon.addEventListener('click',()=>{
    tL.reverse()
})