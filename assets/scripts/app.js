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

$(".next").click(function(){
  var current_content = $(".content:visible").first();
  var index = $(".content").index(current_content);
  var next_content = $(".content").eq(index + 1);

  if (next_content.length == 0) {
    var next_content = $(".content").eq(0);
  }

  current_content.hide();
  next_content.show();
})


$(".prev").click(function(){
  var current_content = $(".content:visible").first();
  var index = $(".content").index(current_content);
  var previous_content = $(".content").eq(index - 1);

  current_content.hide();
  previous_content.show();
})





}); // end of onload

$(document).keyup(function(e) {
  var visible_content = $(".content:visible").first()
  var current_id = visible_content[0]["id"]
  current_id = current_id.replace("_content", "")

  if (e.keyCode == 27) {
    $('.content').hide();
    window.location.replace("#" + current_id);
   }

   if (e.keyCode == 37) {
     $(".prev:visible").click()
   }

   if (e.keyCode == 39) {
     $(".next:visible").click()
   }
 });
