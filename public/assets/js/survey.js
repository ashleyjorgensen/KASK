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
                        value: "1",
                        text: "Hiking"
                    }, {
                        value: "2",
                        text: "Kayaking"
                    }, {
                        value: "3",
                        text: "Fishing"
                    }, {
                        value: "4",
                        text: "Walk in the Park"
                    }, {
                        value: "5",
                        text: "Paddle Boarding"
                    }, {
                        value: "6",
                        text: "Star Gazing"
                    }, {
                        value: "7",
                        text: "Bike Riding"
                    }, {
                        value: "8",
                        text: "Miniature Golf"
                    }, {
                        value: "9",
                        text: "Rock Climbing"
                    }, {
                        value: "10",
                        text: "Basketball"
                    }],
                choicesOrder: "asc", colCount: 2
    
        }, {

                type: "checkbox",
                name: "question2",
                title: "Which two staying in activies appeal to you the most?",
                choices:
                    [{
                        value: "1",
                        text: "Movie Night"
                    }, {
                        value: "2",
                        text: "Build a Fort"
                    }, {
                        value: "3", text: "Board Game Night"
                    }, {
                        value: "4",
                        text: "Cook Together"
                    }, {
                        value: "5",
                        text: "Card Game"
                    }, {
                        value: "6",
                        text: "Fondue Night"
                    }, {
                        value: "7",
                        text: "Bake Together"
                    }, {
                        value: "8",
                        text: "Puzzles"
                    }, {
                        value: "9",
                        text: "Reminisce Old Photos"
                    }, {
                        value: "10",
                        text: "Drinking Games"
                    }],
                choicesOrder: "asc", colCount: 2
    }, {

                type: "checkbox",
                name: "question3",
                title: "Which two going out activies appeal to you the most?",
                choices:
                    [{
                        value: "1",
                        text: "Dancing"
                    }, {
                        value: "2",
                        text: "Bar Hopping"
                    }, {
                        value: "3",
                        text: "Concert"
                    }, {
                        value: "4",
                        text: "Zoo"
                    }, {
                        value: "5", text: "Aquariam"
                    }, {
                        value: "6",
                        text: "Day Trip"
                    }, {
                        value: "7",
                        text: "Clubbing"
                    }, {
                        value: "item8",
                        text: "Botanical Garden"
                    }, {
                        value: "item9", text: "Restaurant "
                    }, {
                        value: "item10", text: "Aerial Yoga"
                    }], choicesOrder: "asc", colCount: 2

    }, {

                type: "checkbox",
                name: "question4",
                title: "Which two types of food appeal to you the most?",
                choices:
                    [{
                        value: "1",
                        text: "Italian"
                    }, {
                        value: "2",
                        text: "Mexican"
                    }, {
                        value: "3", 
                        text: "Hawaiian"
                    }, {
                        value: "4",
                         text: "Mongolion"
                    }, {
                        value: "5",
                         text: "Chinese"
                    }, {
                        value: "6",
                         text: "Thai"
                    }, {
                        value: "7", 
                        text: "Western"
                    }, {
                        value: "8",
                         text: "German"
                    }, {
                        value: "9",
                         text: "Bar Food"
                    }, {
                        value: "10", 
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