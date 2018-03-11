$(document).ready(function() {
    setTimeout(() => {
    $("body").removeClass("no_animation");    
    }, 250);
    $('.hamburger').click(function(){
    	$('.l-menu').toggleClass('is-active');
    })
    $('.btn_close').click(function(){
    	$('.l-menu').removeClass('is-active');
    })
  });

$(function() {
    $('.carousel').each(function(){
        $(this).carousel({
            interval: false
        });
    });
});
