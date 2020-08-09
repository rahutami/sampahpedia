
// Carousel

const track = document.querySelector('.information_track');
const slides = Array.from(track.children);
const dotsNav = document.querySelector('.information_nav');
const dots = Array.from(dotsNav.children);
const leftButton = document.querySelector('.information_button--left');
const rightButton = document.querySelector('.information_button--right');
const sectionTitle = document.querySelector('.section_title');

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentInfo, targetInfo) => {
    track.style.transform = 'translateX(-' + targetInfo.style.left
    currentInfo.classList.remove('current_info');
    targetInfo.classList.add('current_info');

    sectionTitle.classList.add('section_hidden');
    dotsNav.classList.add('section_hidden');

    setTimeout(function(){
        sectionTitle.classList.remove('section_hidden');
        dotsNav.classList.remove('section_hidden');
    }, 500);
};

const moveDot = (currentDot, targetDot) => {
    currentDot.classList.remove('current_indicator');
    targetDot.classList.add('current_indicator');
};

dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');

    if(!targetDot) return;

    const currentInfo = track.querySelector('.current_info');
    const currentDot = dotsNav.querySelector('.current_indicator');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetInfo = slides[targetIndex];

    moveToSlide(track, currentInfo, targetInfo);

    moveDot(currentDot, targetDot);

});

leftButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current_info');
    const currentDot = dotsNav.querySelector('.current_indicator')
    const currentIndex = dots.findIndex(dot => dot === currentDot);
    if(currentIndex === 0) {
        const targetIndex = dots.length - 1;
        const targetDot = dots[targetIndex];
        const nextSlide = slides[targetIndex];
        moveToSlide(track, currentSlide, nextSlide);
        moveDot(currentDot, targetDot);
    } else {
        const targetIndex = currentIndex - 1;
        const targetDot = dots[targetIndex];
        const nextSlide = slides[targetIndex];
        moveToSlide(track, currentSlide, nextSlide);
        moveDot(currentDot, targetDot);
    }
});

rightButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current_info');
    const currentDot = dotsNav.querySelector('.current_indicator')
    const currentIndex = dots.findIndex(dot => dot === currentDot);
    if(currentIndex === dots.length - 1) {
        const targetIndex = 0;
        const targetDot = dots[targetIndex];
        const nextSlide = slides[targetIndex];
        moveToSlide(track, currentSlide, nextSlide);
        moveDot(currentDot, targetDot);
    } else {
        const targetIndex = currentIndex + 1;
        const targetDot = dots[targetIndex];
        const nextSlide = slides[targetIndex];
        moveToSlide(track, currentSlide, nextSlide);
        moveDot(currentDot, targetDot);
    }
});

$(document).ready(function() {
    $('.image-gallery').lightSlider({
        gallery:true,
        galleryMargin:20,
        thumbMargin:10,
        item:1,
        thumbItem:4,
        slideMargin: 10,
        speed:500,
        loop:true,
        auto:true,
        controls:true,
        onSliderLoad: function() {
            $('#image-gallery').removeClass('cS-hidden');
        }  
    });
});