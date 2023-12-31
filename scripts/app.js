let loaderWrapper = document.getElementById('loader-wrapper');
loaderWrapper.style.display = 'flex';

let body = document.querySelector('body');

window.onload = function () {

    const intro = document.querySelector('.intro');
    const video = intro.querySelector('video');
    const text = intro.querySelector('main');
//END SECTION
    const section = document.querySelector('section');
    const end = section.querySelector('h2');

//SCROLLMAGIC
    const controller = new ScrollMagic.Controller();

//Scenes
    let scene = new ScrollMagic.Scene({
        duration: 9000,
        triggerElement: intro,
        triggerHook: 0
    })
        .setPin(intro)
        .addTo(controller);


//Text Animation
    const textAnim = TweenMax.fromTo(text, 3, {opacity: 1}, {opacity: 0});

    let scene2 = new ScrollMagic.Scene({
        duration: 1000,
        triggerElement: intro,
        triggerHook: 0
    })
        .setTween(textAnim)
        .addTo(controller);

//Video Animation
    let accelamount = 0.1;
    let scrollpos = 0;
    let delay = 0;

    scene.on("update", e => {
        scrollpos = e.scrollPos / 1000;
    });

    setInterval(() => {
        delay += (scrollpos - delay) * accelamount;

        video.currentTime = delay;
    }, 33.3);

    body.style.overflowY = 'scroll';
    loaderWrapper.style.display = 'none';

}


