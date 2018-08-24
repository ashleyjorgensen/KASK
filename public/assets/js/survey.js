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
    // console.log(survey.data.question1[0]);
    var Q1A1=survey.data.question1[0] ;
    var Q1A2=survey.data.question1[1] ;
    var Q2A1=survey.data.question2[0] ;
    var Q2A2=survey.data.question2[1] ;
    var Q3A1= survey.data.question3[0];
    var Q3A2= survey.data.question3[1];
    var Q4A1= survey.data.question4[0];
    var Q4A2= survey.data.question4[1];

    console.log("Answer1" + Q1A1,"Answer2" + Q1A2,"Answer3" + Q2A1,"Answer4" + Q2A2,"Answer5" + Q3A1,"Answer6" + Q3A2,"Answer7" + Q4A1,"Answer8" + Q4A2);
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