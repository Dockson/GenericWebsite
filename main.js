// have jquery
$(document).ready(function() {
    console.log("starting main.js: document.ready");

    // when we mouseover, it should:
    // 1. gray out
    // 2. add text about the image

    // this means
    // 1. append dom
    // 2. appden dom

    $(".content").on('mouseenter', '#rectangle', function() {
        $(this).toggleClass("grayed-out");
    });

    $(".content").on('mouseleave', '#rectangle', function() {
        $(this).toggleClass("grayed-out");
    });

    $(function() {
        $("h3")
            .wrapInner("<span>")
        $("h3 br")
            .before("<span class='spacer'>")
            .after("<span class='spacer'>");
    });


    console.log("exiting main.js: document.ready");
});

