var postSentence = function(sentence) {
  $.post("/sentence", {sentence: sentence}, function() {
    $(".textbox").prop("hidden", "hidden");
    $(".result-wrapper").removeAttr("hidden"); 
    $("#sentence-again").text($("#sentence").val());
    getResults();  
  });
};

var getResults = function() {
  $.get("/sentence", function(data){
    $("#results").text("Your sentence is " + data.result);
  });
};

$(document).ready(function() {
  function goToByScroll(id){
    id = id.replace("link", "");
      // Scroll
    $('html,body').animate( {
        scrollTop: $("#"+id).offset().top
    }, 2000);
  };

  $(".fa-arrow-circle-down").click(function(e) { 
    e.preventDefault(); 
    goToByScroll($(this).attr("id"));           
  });
  
  $(document).on("click", "#submit", function(e) {
    e.preventDefault();
    goToByScroll("downlink")
    postSentence($("#sentence").val()); 
  });

  $(document).on("click", "#again", function(e) {
    e.preventDefault();
    goToByScroll("downlink")
    $(".textbox").removeAttr("hidden");
    $(".result-wrapper").prop("hidden", "hidden");   
  });
});