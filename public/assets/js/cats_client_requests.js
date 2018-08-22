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
            type: "POST"
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

        var catId = $(this).data("id");
        var petState = $(this).data("pet-state");
        var updatedPetState = null;

        //checks current pet state of cat and reverses it for update- pets the cat when clicking "Mrow! Pet Meee!!!", or other button will say "the cat is bored again" for toggling the cat back to pettable
        if (petState == 0) {
            updatedPetState = 1;
            //update button data pet-state to 1
        } else if(petState == 1) {
            updatedPetState = 0;
        } else {
            console.log("There is a problem- your cat can't decide if they've been pet or not! They must be bored and need to be pet again! Defaulting to 0.");
            updatedPetState = 0;
        };

        var ajaxUrl = "/api/cats/pet_or_not/" + updatedPetState + "/" + catId;
            //this sets pet_or_not to true or false (0 or 1) for the id given

        // Send the PUT request.
        $.ajax(ajaxUrl, {
            type: "PUT"
        }).then(
            function() {
            console.log("Success! Updated cat pet_or_not state to opposite value.");
            // Reload the page to get the updated list
            location.reload();
            }
        );
    });

    //Update function 2 - update name of cat- optional addition later

    });
