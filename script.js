const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove" , function(e){

    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.animate({
        left:`${posX}px`,
        top:`${posY}px`
    }, { duration : 500 , fill : "forwards"});
});





var tl = gsap.timeline();

tl.to("#box1",{
    x:-340,
    y:-150,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page2",
        start:"top 50%",
        ens:"top 10%",
        scrub:1,
    }
})

tl.to("#box2",{
    x:-280,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page2",
        start:"top 50%",
        ens:"top 10%",
        scrub:1,
    }
})

tl.to("#box3",{
    x:300,
    y:-100,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page2",
        start:"top 50%",
        ens:"top 10%",
        scrub:1,
    }
})

tl.to("#box4",{
    x:-300,
    y:-200,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page2",
        start:"top 50%",
        end:"top -100%",
        scrub:1,
    }
})


gsap.to("#page3",{
    backgroundColor:"#C00000",
    scrollTrigger:{
        scroller:"body",
        trigger:"#Page3",
        // markers:true,
        start:"top -350%",
        end:"top 100%",
        scrub:3,
    }
})


gsap.to("#img2",{
    x:600,
    scrollTrigger:{
        scroller:"body",
        trigger:"#Page3",
        // markers:true,
        start:"top -380%",
        end:"top -450%",
        scrub:3,
    }
})

gsap.to("#page4",{
    backgroundColor:"#000",
    scrollTrigger:{
        scroller:"body",
        trigger:"#Page4",
        // markers:true,
        start:"top -540%",
        end:"top -550%",
        scrub:1,
    }
})

gsap.to("#bear , #foot",{
    x:-300,
    y:90,
    scrollTrigger:{
        scroller:"body",
        trigger:"#Page4",
        // markers:true,
        start:"top -480%",
        end:"top -550%",
        scrub:3,
    }
})


// gsap.to("#erl",{
//     x:-5,
//     y:2,
//     yoyo:true,
//     repeat:-1,
// })

// gsap.to("#err",{
//     x:5,
//     y:2,
//     yoyo:true,
//     repeat:-1,
// })


gsap.to("#page6 img",{
    x:-300,
    scrollTrigger:{
        scroller:"body",
        trigger:"#Page6",
        // markers:true,
        start:"top -720%",
        end:"top -800%",
        scrub:2,
    }
})
 