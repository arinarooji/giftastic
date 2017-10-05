//Create an array that holds the animals
var animals = ["Tiger", "Wolf", "Bear", "Lion"];
//Create variables for API path
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC";

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
        render();  
    }
    
});

//Dynamically create buttons for items in the array
function render(){
    //Prevent duplicate buttons when adding element and reiterating through the array
    $("#button-section").empty();
    //Generate a button for each item in the array...
    for (var i = 0; i < animals.length; i++){
        var newButton = $("<button>");
        newButton.addClass("btn btn-primary");
        newButton.html(animals[i]);
        $("#button-section").append(newButton);
    }
    //When the primary buttons are clicked...
    $(".btn-primary").on("click", function(){
        //Remove all previous results
        $(".results-image").remove();
        //Ready up the new search term
        var newQuery = "&q=" + this.innerHTML.toLowerCase();
        //Launch the ajax (15 picture limit)
        $.ajax({
            url: queryURL + newQuery + "&limit=15",
            method: 'GET'
        }).done(function(response) {
            console.log(response.data);
            //Iterate through the data array
            for (var a = 0; a < response.data.length; a++){
                //Create a new element for each result
                var newImage = $("<img>");
                newImage.addClass("results-image");
                newImage.attr("src", response.data[a].images.fixed_width_still.url);
                $("#results-section").append(newImage);
            }
        });
    });
}
render();