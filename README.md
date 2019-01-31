# pet-the-cat
This app is an exercise in creating a logger with MySQL, Node, Express, Handlebars and a custom-made ORM, using a cat example.

To Test Yourself:
You can view the deployed app on Heroku (link in description). To view on your own computer, clone the app and install the npm packages. Then run "node server.js" from the main folder to launch. The front-end will be viewable on localhost:8080.

Functionality:
This app lists cats with their names, and adds a button to allow the user to pet them like a virtual pet. The names of the cats and their "pet" or "not pet" status are kept in a MySQL database, which is updated when the button is clicked to pet them ("pet me" toggles from "not pet" to "pet" state), or if they've been pet the button can be clicked again to show that they're bored and ready to be pet again (toggles back from "pet" to "not pet" state).

New cats can be easily added to the database and the shown list on the page by filling in the name of a new cat in the form and submitting it.

Currently the cats cannot be removed, since a delete feature in a page meant to emulate a public-facing website wouldn't be logical. If I were to address this in a future update, I might add the ability to remove the cat from the page but not from the database by adding a "delete" button that switches a "shown/not shown" boolean value in the database from the default true for "shown" to false, which would be tied of course to whether an entry is printed on the page or not.

Misc. Notes:
Uses Placekitten API to automatically generate a placeholder kitten image for each cat, using the entry's primary key id as the number at the end to ensure all pics are unique. 
Example: https://placekitten.com/280/200?image=2
An issue with the Placekitten API is that the different images appear to stop at 17 or 18, so any past that are the same image. To address this in a future update I might (1)add a randomization feature for the numbers used in the available range, or (2)add a field in the form for a picture to be uploaded to the database and use a default filler kitten if no picture is added.