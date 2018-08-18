// decline date
$(function(){
    $(".declineDate".on("click", function(event){
        var id = $(this).data("id");
        var newDate = $(this).data("newDate");

        var selectNewDate = {
            decline: newDate
        };

        // PUT request
        $.ajax("/api/dates/" + id, {
            type: "PUT",
            data: selectNewDate
        }).then(
            function(){
                console.log("Set new to date to:", newDate)
                location.reload();
            }
        );
    }));

})