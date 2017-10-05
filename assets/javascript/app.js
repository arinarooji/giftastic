console.log("JavaScript file enabled");

//Create an array that holds the animals
var animals = ["Tiger", "Wolf", "Bear", "Lion"];

//When the Go! button is clicked...
$("#go").on("click", function(){
    //Store the text into a variable
    var newElement = $("#add-this").val().trim();
    //Push the variable to the array
    animals.push(newElement);
    //re-render the buttons
    renderButtons();
});

//Dynamically create buttons for items in the array
function renderButtons(){
    //Prevent duplicate buttons when adding element and reiterating through the array
    $("#button-section").empty();
    //Generate a button for each item in the array
    for (var i = 0; i < animals.length; i++){
        var animorph = $("<button>");
        animorph.addClass("btn btn-primary");
        animorph.text(animals[i]);
        $("#button-section").append(animorph);
    }
}
renderButtons();