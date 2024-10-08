var loader = document.querySelector("#preloader");
setTimeout(function() {
    loader.style.top = "-100%"
},3500)



// document.addEventListener("DOMContentLoaded", function() {
//     gsap.from("#polls_img", {
//         opacity: 1,
//         duration: 2,
//         y: 1000,
//         ease: "bounce.out",
//     });
//     gsap.from("#bollards_img", {
//         opacity: 1,
//         duration: 2,
//         x: 1000,
//         ease: "bounce.out",
//         delay: 1.9,
//         stagger: 2,
//     });
// });


window.addEventListener('resize', function() {
    const herosection = document.getElementById('herosection');
    if (window.innerWidth < 768) {
        herosection.style.height = 'auto'; // Adjust height for mobile
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#herosection'),
        smooth: true,
    });
});

