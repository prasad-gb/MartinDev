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
    $(document).on('ready scroll',function(){
        if(($(document).scrollTop()) > 36){
            $('.topMenu').addClass('active');
            console.log('comes into if')
        }
        else{
            $('.topMenu').removeClass('active');  
            console.log('comes into else')                      
        }
    })
    $('.toggler li:first-child').click(function(){
        $('.toggleImg img').removeClass('active');
        $('.toggleImg img:first-child').addClass('active');
    })
    $('.toggler li:nth-child(2)').click(function () {
        $('.toggleImg img').removeClass('active');
        $('.toggleImg img:nth-child(2)').addClass('active');
    })
  });

$(function() {
    $('.carousel').each(function(){
        $(this).carousel({
            interval: false
        });
    });
});
