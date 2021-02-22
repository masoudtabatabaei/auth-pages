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
    });


    $(".cta").on("click" , function (e) {
        e.preventDefault();
        $(".form").css("margin-top" , "-260px");
        $(".text-after-action").append("<p>Created By Masoud</p>").fadeIn("slow");
    });
});