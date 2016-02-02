// console.log('app. js loaded');
// http://stackoverflow.com/questions/7717527/jquery-smooth-scrolling-when-clicking-an-anchor-link
$(document).ready(function(){

$('a').click(function(){
  // console.log('link clicked');
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});
});
