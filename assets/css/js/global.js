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
    $(window).on('ready scroll',function(){
        if(($(window).scrollTop()) > 36){
            $('.topMenu').addClass('active');
            console.log('comes into if')
        }
        else{
            $('.topMenu').removeClass('active');  
            console.log('comes into else')                      
        }
    })
  });

$(function() {
    $('.carousel').each(function(){
        $(this).carousel({
            interval: false
        });
    });
});
