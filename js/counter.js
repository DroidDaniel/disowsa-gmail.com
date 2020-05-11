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






 var cusname = document.getElementById('cusname');
var mailiden = document.getElementById('mailiden');
var sub = document.getElementById('sub');
var comment = document.getElementById('comment');

function checkErrors(){


    var a = document.getElementById('cusname').value;
var b = document.getElementById('mailiden').value;
var v = document.getElementById('sub').value;
var d = document.getElementById('comment').value;

var error_count = 0;

  if(cusname.value == ""){
  document.getElementById('cusname').style.borderColor = "red";
  error_count++;
  }else{
  document.getElementById('cusname').style.borderColor = "#f1f3f5";
  }

  if(mailiden.value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)){
   document.getElementById('mailiden').style.borderColor = "#f1f3f5";
  }
  else{
     document.getElementById('mailiden').style.borderColor = "red";
   error_count++
  }


  if(sub.value == ""){
  document.getElementById('sub').style.borderColor = "red";
  error_count++;
  }else{
  document.getElementById('sub').style.borderColor = "#f1f3f5";
  }

  

  if(comment.value == ""){
  document.getElementById('comment').style.borderColor = "red";
  error_count++
  }else{
  document.getElementById('comment').style.borderColor = "#f1f3f5";
  }

  if(error_count == 0){
     document.getElementById("thank_con").style.opacity = "1";
     document.getElementById('thank_con').innerHTML = "<h5>Thank you We will get back to you shortly.</h5>";

     var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {     
        if(this.responseText == "OKAY"){    
  
  

        }
      }
      };
     xhttp.open("GET", "comm.php?cusname="+cusname.value+"&mailiden="+mailiden.value+"&sub="+sub.value+"&comment="+comment.value, true);
   xhttp.send();
   document.getElementById("touchformsec").reset();
  }
}

document.getElementById("contact_btn").addEventListener("click", function(){
document.getElementById('errors').innerHTML = "";
checkErrors();


}
);