$(document).ready(function(){
$(window).scroll(startCounter);
function startCounter() {
    if ($(window).scrollTop() > 200) {
        $(window).off("scroll", startCounter);
        $('.count').each(function () {
            var $this = $(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 2000,
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
  $(".side-nav").css('left', -350);
 });


});


$(document).ready(function(){
  $(".down").click(function(){
    $(".flags").slideToggle();
  });

$(".opin").click(function(){
    $(".scontryus").hide();
    $(".scontryin").show();
    $(".scontryuk").hide(); 
    $(".flags").slideUp();  
  });

$(".opuk").click(function(){
    $(".scontryus").hide();
    $(".scontryin").hide();
    $(".scontryuk").show();
    $(".flags").slideUp();  
  });


$(".opus").click(function(){
    $(".scontryus").show();
    $(".scontryin").hide();
    $(".scontryuk").hide();
    $(".flags").slideUp();  
  });

});

