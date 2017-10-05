//Create an array that holds the animals
var animals = ["Tiger", "Wolf", "Bear", "Lion"];

//When the Go! button is clicked...
$("#go").on("click", function(){
    //Store the text into a variable
    var newElement = $("#add-this").val().trim();
    //If the variable meets this condition...
    //Use indexOf() in place of includes()
    if (newElement !== "" && !animals.includes(newElement)){
        //Push the variable to the array
        animals.push(newElement);
        //Re-render the buttons
        renderButtons();  
    }
    
});

//When the primary buttons are clicked...

//Launch the ajax

//Console log the response, learn the API

//Dynamically create buttons for items in the array
function renderButtons(){
    //Prevent duplicate buttons when adding element and reiterating through the array
    $("#button-section").empty();
    //Generate a button for each item in the array...
    for (var i = 0; i < animals.length; i++){
        var animorph = $("<button>");
        animorph.addClass("btn btn-primary");
        animorph.text(animals[i]);
        $("#button-section").append(animorph);
    }
}
renderButtons();