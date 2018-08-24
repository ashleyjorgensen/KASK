
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
                    [ "Hiking","Kayaking","Fishing","Walk in the Park","Paddle Boarding","Star Gazing","Bike Riding","Miniature Golf","Rock Climbing","Basketball"],
                choicesOrder: "asc", colCount: 2
    
        }, {

                type: "checkbox",
                name: "question2",
                title: "Which two staying in activies appeal to you the most?",
                choices:
                    ["Movie Night", "Build a Fort", "Board Game Night","Cook Together","Card Game","Fondue Night","Bake Together","Puzzles","Reminisce Old Photos","Drinking Games"],
                choicesOrder: "asc", colCount: 2
    }, {

                type: "checkbox",
                name: "question3",
                title: "Which two going out activies appeal to you the most?",
                choices:
                    ["Dancing", "Bar Hopping","Concert","Zoo","Aquariam", "Day Trip","Clubbing","Botanical Garden","Restaurant","Aerial Yoga"], 
                    choicesOrder: "asc", colCount: 2

    }, {

                type: "checkbox",
                name: "question4",
                title: "Which two types of food appeal to you the most?",
                choices:
                    [ "Italian","Mexican","Hawaiian","Mongolion","Chiense", "Thai", "Western","German","Bar Food", "Seafood"], 
                    choicesOrder: "asc", colCount: 2
            }]
    }]
}

function sendDataToServer(survey) {
    //send Ajax request to your web server.
    alert("The results are:" + JSON.stringify(survey.data));
}
$(document).on("click", "#newDates", submitSelections);
function submitSelections(){
   window.location.href = "/results" ;
   console.log("working");
};

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
      console.log(options.name);
      console.log(options.value);
      console.log(options.value.length);
      }
    }
});

$(document).on('click', "#submitSurvey", submitSurvey);

function submitSurvey(){
    let newSurvey = {
        answer1:$(answer1),
        answer2:$(answer2),
        answer3:$(answer3),
        answer4:$(answer4),
        answer5:$(answer5),
        answer6:$(answer6),
        answer7:$(answer7),
        answer8:$(answer8),
    };

$.post("/api/dates", newSurvey)
.then(function(data){
    console.log(data);
})
};

