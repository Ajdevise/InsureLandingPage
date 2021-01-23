const hamburger = document.querySelector(".hamburger");
const body = document.querySelector("body");
const html = document.querySelector("html");

let tl = gsap.timeline();

const animateHamburger = () => hamburger.classList.toggle("active");
const animateMenu = () => {
    if(hamburger.classList.contains("active")){
        tl.to(".nav__links", {opacity: 1, scaleY: 1, duration: .2})
          .fromTo(".link", {autoAlpha: 0, x: 0, y: -50}, {autoAlpha: 1, y: 0, duration: .5, stagger: .2}, '-=.4');
        
        addNoScroll();
    }else{
        tl.to(".link", {autoAlpha: 0, x: -50, duration: .1, stagger: -.1})
          .to(".nav__links", {opacity: 0, scaleY: 0, duration: .2}, '-=.3');
        
        removeNoScroll();
        
        setTimeout(() => {
            document.querySelectorAll(".nav__links").forEach((link) => console.log(link.removeAttribute('style')));
            document.querySelectorAll(".link").forEach((link) => console.log(link.removeAttribute('style')));
        }, 400)
    }
}
const onLoadAnimation = () => {
    addNoScroll();
    tl.to(".loading__top", {scaleX: 1, duration: .8, transformOrigin: "top left"})
      .to(".loading__bottom", {scaleX: 1, duration: .8, transformOrigin: "top right", zIndex: 4444})
      .to(".loading__overlay", {zIndex: 5000, backgroundColor: "#2d2640", duration: .000000000001})
      .to(".loading__img", {zIndex: 4600, duration: .000000000001}, '-=.000000000001')
      .to(".loading", {backgroundColor: "transparent", duration: .000000000001}, '-=.000000000001')
      .to(".loading__overlay", {scaleY: 0, duration: 1, transformOrigin: "top left"}, '-=.000000000001')
      .to(".loading__img", {autoAlpha: 0, duration: .5})
      .to(".loading__bottom", {scaleY: 0, duration: .5, transformOrigin: "bottom left"}, '-=.3')
      .to(".loading__top", {scaleY: 0, duration: .5, transformOrigin: "top left"}, '-=.5')
      .to(".loading", {height: 0, duration: .000000000001})
      .to(".loading__middle", {height: 0, duration: .000000000001})
      .to(".nav", {zIndex: 1});

    setTimeout(removeNoScroll, 3300);
}

hamburger.addEventListener('click', toggleMobileMenu);



function toggleMobileMenu(){
    animateHamburger();
    animateMenu();
}

function addNoScroll(){
    body.classList.add("no-scroll");
    html.classList.add("no-scroll");
}

function removeNoScroll(){
    body.classList.remove("no-scroll");
    html.classList.remove("no-scroll");
}

setTimeout(onLoadAnimation, 220);