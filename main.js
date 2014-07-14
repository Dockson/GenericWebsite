// have jquery
$(document).ready(function() {
    console.log("starting main.js: document.ready");

    // when we mouseover, it should:
    // 1. gray out
    // 2. add text about the image

    // this means
    // 1. append dom
    // 2. append dom
    //
    // could do show/hide

    $(".content").on('mouseenter', '.image', function() {
        console.log("here");
        //$(this).toggleClass("grayed-out");
        $(this).closest(".image").find("img").toggleClass("grayed-out");
        $(this).closest(".image").find(".image-text").show();
    });

    $(".content").on('mouseleave', '.image', function() {
        $(this).closest(".image").find("img").toggleClass("grayed-out");
        //$(this).toggleClass("grayed-out");
        $(this).closest(".image").find(".image-text").hide("fast");
    });

    $(".content").on('click', '.image', function() {
        // TODO
        alert("pulling up something with more info");
    });

    $(function() {
        $(".image-text")
            .wrapInner("<span>");
        $(".image-text")
            .before("<span class='spacer'>")
            .after("<span class='spacer'>");
    });

    console.log("exiting main.js: document.ready");
});
