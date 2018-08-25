
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
                    ["Hiking", "Kayaking", "Fishing", "Walk in the Park", "Paddle Boarding", "Star Gazing", "Bike Riding", "Miniature Golf", "Rock Climbing", "Basketball"],
                choicesOrder: "asc", colCount: 2

            }, {

                type: "checkbox",
                name: "question2",
                title: "Which two staying in activies appeal to you the most?",
                choices:
                    ["Movie Night", "Build a Fort", "Board Game Night", "Cook Together", "Card Game", "Fondue Night", "Bake Together", "Puzzles", "Reminisce Old Photos", "Drinking Games"],
                choicesOrder: "asc", colCount: 2
            }, {

                type: "checkbox",
                name: "question3",
                title: "Which two going out activies appeal to you the most?",
                choices:
                    ["Dancing", "Bar Hopping", "Concert", "Zoo", "Aquariam", "Day Trip", "Clubbing", "Botanical Garden", "Restaurant", "Aerial Yoga"],
                choicesOrder: "asc", colCount: 2

            }, {

                type: "checkbox",
                name: "question4",
                title: "Which two types of food appeal to you the most?",
                choices:
                    ["Italian Food", "Mexican Food", "Hawaiian Food", "Mongolion Food", "Chinese Food", "Thai Food", "American Food", "German Food", "Bar Food", "Seafood"],
                choicesOrder: "asc", colCount: 2
            }]
    }]
}

$("#newDates").hide()
function sendDataToServer(survey) {
    // $("#newDates").show()
    //send Ajax request to your web server.
    // alert("The results are:" + JSON.stringify(survey.data));
    $.post("/api/results", { data: survey.data });
    $("#newDates").show()
}

$(document).on("click", "#newDates", submitSelections);
function submitSelections() {
    window.location.href = "/results/" + uid;
    console.log("working");
};

var survey = new Survey.Model(surveyJSON);
console.log(survey);
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});
 

survey.onValidateQuestion.add(function (survey, options) {
    
    //the questions
    if (options.name === "question1", "question2", "question3", "question4") {
        if (options.value && options.value.length > 2) {
            //Set the error
            options.error = "Please select maximum two values";
            console.log(options.name);
            console.log(options.value);
            console.log(options.value.length);
        }
    }
});




// Initialize Firebase
var config = {
    apiKey: "AIzaSyADDBWVgJmhrMApJUiUKMoGsPDmXdIfLv0",
    authDomain: "date-night-9f43b.firebaseapp.com",
    databaseURL: "https://date-night-9f43b.firebaseio.com",
    projectId: "date-night-9f43b",
    storageBucket: "date-night-9f43b.appspot.com",
    messagingSenderId: "445670094936"
   };
   
   firebase.initializeApp(config);
   
   var auth = firebase.auth();
   
   var database = firebase.database();

$("#sign-out").on('click', function () {

    firebase.auth().signOut().then(function () {
        console.log('Signed Out');
        window.location.href = "/"

    }, function (error) {
        console.error('Sign Out Error', error);
    });


});