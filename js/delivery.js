
var animation = bodymovin.loadAnimation({
container: document.getElementById('deliveryAnimation'),
    

renderer: 'svg',
loop: true,
autoplay: true,
path: './js/banneranimation.json'
    

})



var animation1 = bodymovin.loadAnimation({
container: document.getElementById('deliveryAnimation1'),
    
// Set your ID to something that you'll associate with the animation you're using //
renderer: 'svg',
loop: true,
autoplay: true,
path: './js/banneranimation1.json'
    
// Make sure your path has the same filename as your animated     SVG's JSON file //
})