// http://stackoverflow.com/questions/7717527/jquery-smooth-scrolling-when-clicking-an-anchor-link
$(document).ready(function(){

$('.anchor').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});


// http://stackoverflow.com/questions/1328723/how-to-generate-a-simple-popup-using-jquery

$('.expand').click(function(){
  $('#' + this.id + '_content').show()
});

$('.close').click(function(){
  $('.content').hide()
});




}); // end of onload

$(document).keyup(function(e) {
  var project_content = $(".content:visible").first().hasClass("project_content")
  if (project_content) {
    window.location.replace("#Projects");
  } else {
    window.location.replace("#Work");
  }


  if (e.keyCode == 27) {
  $('.content').hide();
   }
 });
