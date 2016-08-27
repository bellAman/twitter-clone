$(document).ready(function(){

$("#tweet-controls").hide();

$(".tweet-compose").on("click",function(){
  $(".tweet-compose").css("height","5em");
  $("#tweet-controls").show();
})
var count = 140
$(".tweet-compose").keydown(function(e){
  if (e.keyCode === 8 && count === 140){
    count = 140;
    $("#char-count").text(count)
  }
  else if (e.keyCode === 8 && count < 140){
    count++;
  $("#char-count").text(count)
  }
  else {
    count -= 1
 $("#char-count").text(count)
}
 if(count<=10){
   $("#char-count").css("color","red")
 }
 if(count >10){
   $("#char-count").css("color","black")
 }
 if(count < 0){
   $("#tweet-submit").prop("disabled", true)
 }
 if(count >= 0){
   $("#tweet-submit").prop("disabled", false)
 }
})



$("#tweet-submit").click(function(){
  var typing = $(".tweet-compose").val();
  var theclone = $("#theClone").clone();
  $("#stream").prepend(theclone);
  theclone.find(".tweet-text").text(typing);
  theclone.find("#xvatar").attr("src",'img/alagoon.jpg')
  theclone.find(".fullname").text("New Name")
})

$(".reply").hide();
  $(".tweet").on("click", function(){
    $(".reply").show()
  })

  $(".tweet-actions").hide();
   $(".tweet").hover(function(){
     $(".tweet-actions").toggle()
   })


});
