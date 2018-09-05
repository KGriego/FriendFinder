var userArray = [];

$(document).ready(function() {
  $("#sub").on("click", function(e) {
    e.preventDefault();
    
    var formData = $("#surveyForm").serializeArray();
    
    $.ajax({
      url: "/api/friends",
      type: "POST",
      data: formData
    }).then(function(res) {
      $("#survey").fadeOut(function() {
        $("#friendName").text(res[0]);
        $("#userName").text(formData[0].value);
        $("#userImage").attr("src", formData[1].value);
        $("#friendImage").attr("src", res[1]);
        $("#results").fadeIn();
      });
    });
  });
});
