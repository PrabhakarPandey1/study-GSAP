var path =`M 60 100 Q 710 100 1420 100`


var finalPath =`M 60 100 Q 710 100 1420 100`

let main= document.querySelector('.main')

main.addEventListener('mousemove',function(dets){
  path =`M 60 100 Q 710 ${dets.y} 1420 100`
  gsap.to('svg path',{
    attr:{d:path}
  })
  
})







// const curve = document.getElementById("curve");

//     const animateCurve = (x, y) => {
    
//       curve.setAttribute("d", `M100,300 Q${x},${y} 700,300`);
//     };

//     gsap.to({ x: 400, y: 300 }, {
//       x: 400,
//       y: 100, 
//       duration: 2,
//       repeat: -1,
//       yoyo: true,
//       ease: "power1.inOut",
//       onUpdate() {
//         animateCurve(this.targets()[0].x, this.targets()[0].y);
//       }
//     });