

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
      $("#error1").append(e.message);
    })
    //"<p>either this email is already in use OR your password isn't longer than the required 6 characters</p>"
  });
  
  //sign in form
  $(".sign-in-form").on('submit', function (event) {
    $("#error2").empty();
    event.preventDefault()
    var email = $('#sign-in-email').val()
    var password = $('#sign-in-password').val()
    //copying the push that we used in the create user function:
    database.ref().push({
      email: email,
      password: password,
    });
    var promise = auth.signInWithEmailAndPassword(email, password)
    promise.then(function (user) {
      console.log(user);
    })
    promise.catch(function (e) {
      console.log('ERR', e.message);
      $("#error2").append("<p> This user does not exist. Please try again.</p>");
    })
  });
  
  $("#sign-out").on('click', function () {
    auth.signOut()
  });
  
  //creating the user id
  var uid = [""];
  
  
    //when logged in hide the login/sign up and show the sign out button
    auth.onAuthStateChanged(function (firebaseUser) {
      if (firebaseUser) {
        /*
        uid = firebaseUser.uid
        function uidPush() {
          uid.push(uid);
        };
        uidPush()
        */
        uid[0] = firebaseUser.uid;
        console.log("UID: " + uid);
  
  
        $(".create-user-form").hide()
        $(".sign-in-form").hide()
        $("#sign-out").show()
  
        window.location.href = "/survey/" + uid[0];
  
        function submitName() {
          console.log("THIS IS USER ID: " + uid[0]);
          console.log("this is a new account");
          var newDate = {
            username: $("#create-user-email").val().trim(),
            password: $("#create-user-password").val().trim(),
            uid: uid[0]
          };
  
          $.post("/api/dates/", newDate, function () {
  
  
          });
        };
        submitName(uid);
      } else {
        console.log('not logged in');
        $(".create-user-form").show()
        $(".sign-in-form").show()
        $("#sign-out").hide()
      }
  
    })
  
  
  
  
  
  module.exports = db; 