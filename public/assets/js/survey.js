
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
                        value: "Hiking"
                    }, {
                        value: "Kayaking"
                    }, {
                        value: "Fishing"
                    }, {
                        value: "Walk in the Park"
                    }, {
                        value: "Paddle Boarding"
                    }, {
                        value: "Star Gazing"
                    }, {
                        value: "Bike Riding"
                    }, {
                        value: "Miniature Golf"
                    }, {
                        value: "Rock Climbing"
                    }, {
                        value: "Basketball"
                    }],
                choicesOrder: "asc", colCount: 2
    
        }, {

                type: "checkbox",
                name: "question2",
                title: "Which two staying in activies appeal to you the most?",
                choices:
                    [{
                        value: "Movie Night"
                    }, {
                        value: "Build a Fort"
                    }, {
                        value: "Board Game Night"
                    }, {
                        value: "Cook Together"
                    }, {
                        value: "Card Game"
                    }, {
                        value: "Fondue Night"
                    }, {
                        value: "Bake Together"
                    }, {
                        value: "Puzzles"
                    }, {
                        value: "Reminisce Old Photos"
                    }, {
                        value: "Drinking Games"
                    }],
                choicesOrder: "asc", colCount: 2
    }, {

                type: "checkbox",
                name: "question3",
                title: "Which two going out activies appeal to you the most?",
                choices:
                    [{
                        value: "Dancing"
                    }, {
                        value: "Bar Hopping"
                    }, {
                        value: "Concert"
                    }, {
                        value: "Zoo"
                    }, {
                     value: "Aquariam"
                    }, {
                        value: "Day Trip"
                    }, {
                         value: "Clubbing"
                    }, {
                        value: "Botanical Garden"
                    }, {
                         value: "Restaurant "
                    }, {
                         value: "Aerial Yoga"
                    }], choicesOrder: "asc", colCount: 2

    }, {

                type: "checkbox",
                name: "question4",
                title: "Which two types of food appeal to you the most?",
                choices:
                    [{
                        value: "Italian"
                    }, {
                        value: "Mexican"
                    }, {
                        value: "Hawaiian"
                    }, {
                         value: "Mongolion"
                    }, {
                         value: "Chinse"
                    }, {
                         value: "Thai"
                    }, {
                        value: "Western"
                    }, {
                        value: "German"
                    }, {
                         value: "Bar Food"
                    }, {
                        value: "Seafood"
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

survey.onComplete.add(function (sender) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", date_name);
    xhr.send(JSON.stringify(sender.data));
});