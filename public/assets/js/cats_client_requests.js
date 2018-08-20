// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    //Insert/Create new cat entry function
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

    var newCatName = $("#new-name").val().trim();

    var ajaxUrl = "/api/cats/" + newCatName;

    // Send the POST request.
    $.ajax(ajaxUrl, {
      type: "POST",
      data: newCatName
    }).then(
      function() {
        console.log("created new cat");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  //Update function 1 - update whether cat wants to be pet "pet_or_not"

  //Update function 2 - update whether 

  
});
