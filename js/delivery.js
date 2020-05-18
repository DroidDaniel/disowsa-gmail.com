/*
var animation = bodymovin.loadAnimation({
container: document.getElementById('deliveryAnimation'),
    

renderer: 'svg',
loop: true,
autoplay: true,
path: 'banneranimation.json'
    

})*/



var loader = document.getElementsByClassName('deliveryAnimation'),
    params = {
        container: loader,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'banneranimation.json'
    },
    animation = bodymovin.loadAnimation(params);