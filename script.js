const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim(){
    var tl =  gsap.timeline();

    tl.from(".nav",{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease: Expo.easeInOut

    })

    .to(".boundingelem",{
        y:'-10',
        duration:2,
        ease :Expo.eseInOut,
        opacity:5,
        stagger:.2
    })


    .from(".herofooter",{
        y:-10,
        duration:2,
        ease :Expo.easeInOut,
        opacity:0,
        delay:-1,
       
    })
}

function mouseFollower(xscale,yscale){
    window.addEventListener('mousemove',function(dets){
        document.querySelector(".minicircle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
    })
}


function mousechaptaKaro(){
    var xscale = 1;
    var yscale = 1;
    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove",function(dets){

        var xdiff = dets.clientX - xprev;

        var ydiff = dets.clientY - yprev;

        xprev = dets.clientX;
        yprev = dets.clientY;

        gsap.utils.clamp(.8,1.2,xdiff);
        gsap.utils.clamp(.8,1.2,ydiff);

        mouseFollower(xscale,yscale);

       // console.log(xdiff,ydiff);

    });
}
mousechaptaKaro();
mouseFollower();
firstPageAnim();

document.querySelectorAll(".elem").forEach(function (elem) {
    
    var diffrot = 0;
    var rotate = 0;

    elem.addEventListener("mouseleave",function(dets){
        gsap.to(elem.querySelector("img"),{
            opacity:0,
            ease : Power3,
            duration:.5,
        });
    });

    elem.addEventListener("mousemove",function (dets){
       //console.log(dets);
        var  diff =  dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;

        gsap.to(elem.querySelector("img"), {    
            opacity: 1,
            ease: Power3, 
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20,20,diffrot*.5),
        });
    });
});