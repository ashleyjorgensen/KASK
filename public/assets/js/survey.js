
var surveyJSON =
{
    pages: [{
        name: "page1",
        elements:
            [{
                type: "checkbox",
                name: "question1",
                title: "Which two outdoor activies appeal to you the most?",
                choices:
                    [{
                        text: "Hiking"
                    }, {
                        text: "Kayaking"
                    }, {
                        text: "Fishing"
                    }, {
                        text: "Walk in the Park"
                    }, {
                        text: "Paddle Boarding"
                    }, {
                        text: "Star Gazing"
                    }, {
                        text: "Bike Riding"
                    }, {
                        text: "Miniature Golf"
                    }, {
                        text: "Rock Climbing"
                    }, {
                        text: "Basketball"
                    }],
                choicesOrder: "asc", colCount: 2
    
        }, {

                type: "checkbox",
                name: "question2",
                title: "Which two staying in activies appeal to you the most?",
                choices:
                    [{
                        text: "Movie Night"
                    }, {
                        text: "Build a Fort"
                    }, {
                        text: "Board Game Night"
                    }, {
                        text: "Cook Together"
                    }, {
                        text: "Card Game"
                    }, {
                        text: "Fondue Night"
                    }, {
                        text: "Bake Together"
                    }, {
                        text: "Puzzles"
                    }, {
                        text: "Reminisce Old Photos"
                    }, {
                        text: "Drinking Games"
                    }],
                choicesOrder: "asc", colCount: 2
    }, {

                type: "checkbox",
                name: "question3",
                title: "Which two going out activies appeal to you the most?",
                choices:
                    [{
                        text: "Dancing"
                    }, {
                        text: "Bar Hopping"
                    }, {
                        text: "Concert"
                    }, {
                        text: "Zoo"
                    }, {
                     text: "Aquariam"
                    }, {
                        text: "Day Trip"
                    }, {
                         text: "Clubbing"
                    }, {
                        text: "Botanical Garden"
                    }, {
                         text: "Restaurant "
                    }, {
                         text: "Aerial Yoga"
                    }], choicesOrder: "asc", colCount: 2

    }, {

                type: "checkbox",
                name: "question4",
                title: "Which two types of food appeal to you the most?",
                choices:
                    [{
                        text: "Italian"
                    }, {
                        text: "Mexican"
                    }, {
                        text: "Hawaiian"
                    }, {
                         text: "Mongolion"
                    }, {
                         text: "Chinse"
                    }, {
                         text: "Thai"
                    }, {
                        text: "Western"
                    }, {
                        text: "German"
                    }, {
                         text: "Bar Food"
                    }, {
                        text: "Seafood"
                    }], choicesOrder: "asc", colCount: 2
            }]
    }]
}

function sendDataToServer(survey) {
    //send Ajax request to your web server.
    alert("The results are:" + JSON.stringify(survey.data));
}


var survey = new Survey.Model(surveyJSON);
console.log(survey);
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});

survey.onValidateQuestion.add(function(survey, options){
    //the questions
    if(options.name === "question1", "question2", "question3", "question4") {
      if(options.value && options.value.length > 2) {
        //Set the error
        options.error = "Please select maximum two values"; 
      }
    }
});