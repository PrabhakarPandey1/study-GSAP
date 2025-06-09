function textBreak(){
let h1= document.querySelector('h1')

let h1Text = h1.textContent;


let splitText = h1Text.split("")

let mess = ""

splitText.forEach(function(el) {
    mess += `<span>${el}</span>`
    
    
})
h1.innerHTML = mess
}

textBreak()

gsap.from('h1 span',{
    opacity:0,
    delay:0.5,
    duration:0.8,
    y:50,
    stagger:0.2
})