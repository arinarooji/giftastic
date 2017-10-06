//Create an array that holds the animals
var animals = ["Tiger", "Wolf", "Bear", "Lion"];
//Create variables for API path
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC";
//Limit the amount of images to preference
var responseLimit = "&limit=" + 24;

//When the Go! (add) button is clicked...
$("#go").on("click", function(){
    
    //Store the text into a variable
    var newElement = $("#add-this").val().trim();
    //If newElement meets this condition, push to animals[]
    if (newElement !== "" && !animals.includes(newElement)){
        animals.push(newElement);
        render();  
    }
});

//Dynamically create buttons for items in animals[]
function render(){
    
    //Prevent duplicate buttons when adding element and reiterating
    $("#button-section").empty();
    //Generate a new button for each item in animals[]
    for (var i = 0; i < animals.length; i++){
        var newButton = $("<button>");
        newButton.addClass("btn btn-primary");
        newButton.html(animals[i]);
        $("#button-section").append(newButton);
    }

    //When the primary buttons are clicked...
    $(".btn-primary").on("click", function(){
        
        //Remove all previous results
        $(".results-figure").remove();
        //Ready up the new search term using the innerHTML text
        var newQuery = "&q=" + this.innerHTML.toLowerCase();
        //Launch the ajax
        $.ajax({
            url: queryURL + newQuery + responseLimit,
            method: 'GET',
        }).done(function(response) {
            
            //Iterate through the data array when the AJAX call is done
            for (var a = 0; a < response.data.length; a++){
                //Create a new figure for each result
                var newFigure = $("<figure>");

                //Each figure contains an image, line break, and rating/caption
                var newImage = $("<img width = '350' height = '262'>");
                var newBreak = $("<br>");
                var newRating = $("<figcaption>");

                //Add the necessary classes
                newFigure.addClass("results-figure");
                newImage.addClass("results-image");
                newRating.addClass("results-rating");

                //Set the correct rating and src value
                newRating = "Rating: " + response.data[a].rating.toUpperCase();
                newImage.attr("src", response.data[a].images.fixed_width_still.url);

                //First append the img/break/rating to the figure, then append the figure to html section
                newFigure.append(newImage);
                newFigure.append(newBreak);
                newFigure.append(newRating);
                $("#results-section").append(newFigure);
            }

            //If the user clicks an image...
            $(".results-image").on("click", function(){
                //Change the still image src to the gif src
                for (var j = 0; j < response.data.length; j++){
                    if (this.src === response.data[j].images.fixed_width_still.url){
                        this.src = response.data[j].images.fixed_width.url;
                    }
                }
            });

        });
    });
}
render();