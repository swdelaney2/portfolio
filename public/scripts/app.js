// http://stackoverflow.com/questions/7717527/jquery-smooth-scrolling-when-clicking-an-anchor-link
$(document).ready(function(){

$('.anchor').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});


// http://stackoverflow.com/questions/1328723/how-to-generate-a-simple-popup-using-jquery

$('#buddybeats_expand, #copychef_expand, #runningm8_expand').click(function(){
  console.log(this);
  console.log(this.id + '_content');
  $('.' + this.id + '_content').show()
});

$('.close').click(function(){
  console.log('close clicked');
  $('.buddybeats_expand_content, .copychef_expand_content, .runningm8_expand_content').hide()
});




}); // end of onload
