// $(document).ready(function() {
//  var url = window.location.search;
//  console.log(url);
  $(document).on("click", "#submitName", submitName);


function submitName(){
  // var username = $("#uname").val().trim();
  // var password =$("#psw").val().trim();
  // console.log(username);
  //  console.log(password);
     var newDate = {
      username: $("#username").val().trim(),
      password: $("#psw").val().trim(),
    };
    window.location.href = "/survey" ;
  $.post("/api/dates/", newDate, 
  function() {
      // console.log(dates);

   window.location.href = "/survey" ;
  //  console.log(dates);
  });
};
  // Update a given post, bring user to the blog page when done
//   function updatePost(post) {
//     $.ajax({
//       method: "PUT",
//       url: "/api/posts",
//       data: post
//     })
//       .then(function() {
//         window.location.href = "/blog";
//       });
//   };
// // });
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
