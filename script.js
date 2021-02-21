$(document).ready(function () {
    $(".auth").on("click" , function (e) {
        e.preventDefault();

        var formType = $(this).data("form");

        $(".main-container").addClass("show-form");
        $("."+ formType).show();
    });

    $(".cancel").on("click" , function (e) {
        e.preventDefault();

        $(".main-container").removeClass("show-form");
        $(".form").hide();
    })
});