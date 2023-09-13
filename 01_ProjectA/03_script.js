
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstaPageAnim() {
    var tl = gsap.timeline();
    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration:1.5,
        ease:Expo.easeInOut
    })
    .to(".boundingelem", {
        y: 0,
        ease:Expo.easeInOut,
        duration: 2,
        delay:-1,
        stagger:.2
       
    })
    .from("#herofooter", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay:-1,
        ease:Expo.easeInOut
    })
}


function circleChaptaKaro() {
    // define defult scale value 
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove", function (dets) {
       
        
        var xscale= gsap.utils.clamp(.8, 1, 2, dets.clientX - xprev);
        var yscale = gsap.utils.clamp(.8, 1, 2, dets.clientY - yprev);
        
        xprev = dets.clientX;
        yprev = dets.clientY;
  
        circleMouseFollwer(xscale, yscale);
        
});
}
 

function circleMouseFollwer(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`;
    });
   
}
circleChaptaKaro();
firstaPageAnim();
circleMouseFollwer();   


// teeno element ko select karo, uske baad teeno par ek mousemove lagao, jab mousemove ho to ya pata karo ki mouse kaha par hai,
 // jiske matalb hai mouse ki xand y position pata karo, ab maouse ki x and y position ke badle img ko show karo and us img ko show karo,
 // move karte vakt  rotate karo, and jaise jaise mouse tez chale waise waise rotation bhi tez ho jaye


document.querySelectorAll(".elem")
    .forEach(function (elem) {
        elem.addEventListener("mousemove", function (details) {
            gsap.to(elem.querySelector("img"), {
                opacity: 1,
                ease: Power1
            });
        });
    });
