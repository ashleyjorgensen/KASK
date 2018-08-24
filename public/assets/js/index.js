

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
console.log('AUTH --', auth);




$(".create-user-form").on('submit', function (event) {
  $("#error1").empty();
  event.preventDefault()


  var email = $('#create-user-email').val()
  var password = $('#create-user-password').val()

  database.ref().push({
    email: email,
    password: password,
  });

  var promise = auth.createUserWithEmailAndPassword(email, password)
  promise.then(function (user) {
    console.log(user);
  })
  promise.catch(function (e) {
    console.log('ERR', e.message);
    $("#error1").append("<p>this email is already in use</p>");

  })
  
});


//sign in form
$(".sign-in-form").on('submit', function (event) {
  $("#error2").empty();
  event.preventDefault()

  var email = $('#sign-in-email').val()
  var password = $('#sign-in-password').val()


  var promise = auth.signInWithEmailAndPassword(email, password)
  promise.then(function (user) {
    console.log(user);
  })
  promise.catch(function (e) {
    console.log('ERR', e.message);
    $("#error2").append("<p> no user was found</p>");
  })
})



$("#sign-out").on('click', function () {
  auth.signOut()
})

//creating the user id 
var uid = "";

//when logged in hide the login/sign up and show the sign out button
auth.onAuthStateChanged(function (firebaseUser) {
  if (firebaseUser) {uidPush

    uid = firebaseUser.uid

function uidPush() {
  uid.push(uid);
};
  
   
    $(".create-user-form").hide()
    $(".sign-in-form").hide()
    $("#sign-out").show()

    function submitName() {
      console.log ("THIS IS USER ID: " + uid);
      var newDate = {
        username: $("#create-user-email").val().trim(),
        password: $("#create-user-password").val().trim(),
        uid: uid,
      };
    
      //window.location.href = "/survey";
      $.post("/api/dates/", newDate, function () {
        // console.log(dates);
    
        //  window.location.href = "/survey" ;
        //  console.log(dates);
      });
    };
    submitName();
  } else {
    console.log('not logged in');
    $(".create-user-form").show()
    $(".sign-in-form").show()
    $("#sign-out").hide()
  }
  
})


function submitName() {
  console.log ("THIS IS USER ID: " + uid);
  var newDate = {
    username: $("#create-user-email").val().trim(),
    password: $("#create-user-password").val().trim(),
    uid: uid,
  };

  //window.location.href = "/survey";
  $.post("/api/dates/", newDate, function () {
    // console.log(dates);

    //  window.location.href = "/survey" ;
    //  console.log(dates);
  });
};


// $(document).ready(function() {
//  var url = window.location.search;
//  console.log(url);
//$(document).on("click", "#submit-create-user", submitName);



  // Gets post data for a post if we're editing
  // function getPostData(id) {
  //   $.get("/api/date/" + id, function(data) {
  //     if (data) {
  //       // If this post exists, prefill our cms forms with its data
  //       titleInput.val(data.title);
  //       bodyInput.val(data.body);
  //       postCategorySelect.val(data.category);
  //       // If we have a post with this id, set a flag for us to know to update the post
  //       // when we hit submit
  //       updating = true;
  //     }
  //   });
  // }



// });