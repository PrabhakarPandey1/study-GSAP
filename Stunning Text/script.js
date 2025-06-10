function textBreak(){
let h1= document.querySelector('h1')

let h1Text = h1.textContent;
let splitText = h1Text.split("")

let mess = ""

let value = Math.floor(splitText.length/2)

splitText.forEach(function(el, index) {

    if(index < value){
        mess += `<span class='a'>${el}</span>`
    }else{
        mess += `<span class='b'>${el}</span>`  
    }
})
h1.innerHTML = mess
}

textBreak()

gsap.from('h1 .a',{
    opacity:0,
    delay:0.5,
    duration:0.8,
    y:100,
    stagger:0.2
})
gsap.from('h1 .b',{
    opacity:0,
    delay:0.5,
    duration:0.8,
    y:-100,
    stagger:-0.2
})