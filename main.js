const aboutContainer = document.querySelector('.about-us-container');
const landingContainer = document.querySelector('.landing-text-container');
const landingTitle = document.querySelectorAll('.landing-text');
const landingSubTitle = document.querySelector('.landing-subtitle');
const landingIcon = document.querySelector('.arrow-down');
const eventsContainer = document.querySelector('.events-container')
const eventCards = document.querySelector('.event-cards');

function landing(element){
    element.style.opacity="1";
    element.style.display="flex";
}

let lastTitle = landingTitle.length-1;

window.onload = function(){
    landingTitle.forEach(item => item.style.opacity="1");
    landing(landingIcon);
    landing(landingSubTitle);
}

const isInViewport = el => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= 
            (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth ||
            document.documentElement.clientWidth)    
    );
};

window.onscroll = function() {
    if(isInViewport(aboutContainer)){
        aboutContainer.style.transform="none";
        aboutContainer.style.opacity="1";
    }

    if(isInViewport(eventsContainer)){
        eventCards.style.transform="none";
    }

    if(window.innerWidth > 868){
        landingContainer.style.transform='translateY(' + (window.pageYOffset * 0.6) + 'px)';
    }else{
        landingContainer.style.transform='translateY(' + (window.pageYOffset * 0.2) + 'px)';
    }
}

function shutUp(){
    document.querySelectorAll('.is-active').forEach(element => element.classList.remove('is-active'));
    document.querySelectorAll('.sliding').forEach(item => item.classList.remove('sliding'));
}
