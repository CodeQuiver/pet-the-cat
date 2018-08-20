// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    //Create new cat entry function
    $(".create-cat").on("submit", function(event) {
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
        console.log("Success! Added new cat to the database.");
        // Reload the page to get the updated list
        location.reload();
        }
    );
    });

    //Update function 1 - update whether cat wants to be pet "pet_or_not"
    $(".pet-the-cat").on("click", function(event) {

    var catId = $("#new-name").val().trim();

    var ajaxUrl = "/api/cats/" + newCatName;

    // Send the POST request.
    $.ajax(ajaxUrl, {
        type: "POST",
        data: newCatName
    }).then(
        function() {
        console.log("Success! Added new cat to the database.");
        // Reload the page to get the updated list
        location.reload();
        }
    );
    });

    //Update function 2 - update name of cat- optional addition later


    });
