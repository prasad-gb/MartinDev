$(document).ready(function() {
    setTimeout(() => {
    $("body").removeClass("no_animation");    
    }, 250);
  });

$(function() {
    $('.carousel').each(function(){
        $(this).carousel({
            interval: false
        });
    });
});
