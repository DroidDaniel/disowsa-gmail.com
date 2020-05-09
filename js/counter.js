/*$(document).ready(function(){
      $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
      });
*/

$(document).ready(function(){
$(window).scroll(startCounter);
function startCounter() {
    if ($(window).scrollTop() > 200) {
        $(window).off("scroll", startCounter);
        $('.count').each(function () {
            var $this = $(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 500,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
    }
}

});

$(document).ready(function() {
 

 $(".mb-menu").click(function() {
  $(".side-nav").css('left', 0);
 });


 $(".btn_cls").click(function() {
  $(".side-nav").css('left', -300);
 });


 

});