var animData = {
        container: document.getElementById('container'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'church.json'
    };
    var anim = bodymovin.loadAnimation(animData);