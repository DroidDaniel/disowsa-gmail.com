$(window).scroll(function() {     
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $(".navbar-light").addClass("drop");
    }
    else {
        $(".navbar-light").removeClass("drop");
    }
});