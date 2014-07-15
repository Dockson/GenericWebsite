// have jquery
$(document).ready(function() {
    // -----------content image----------------------
    $(".content").on('mouseenter', '.image', function() {
        $(this).closest(".image").find("img").toggleClass("grayed-out");
        $(this).closest(".image").find(".image-text").show();
    });
    $(".content").on('mouseleave', '.image', function() {
        var image = $(this).closest(".image");
        image.find("img").toggleClass("grayed-out");
        image.find(".image-text").hide("fast");
    });

    $(".image").on('click', function() {
        var t = $(this).find(".popup-text").text();
        $.blockUI({ 
            message: t,
            onOverlayClick: $.unblockUI,
            css: {  top: '25%'
                 ,  left: '30%'
                 ,  height: '40%'
                 ,  width:  '40%'
                 }
        });
    });

    $(function() {
        $(".image-text")
            .wrapInner("<span>");
        $(".image-text")
            .before("<span class='spacer'>")
            .after("<span class='spacer'>");
    });

    // -----------navigation side bar------
    $(".sidebar-toggle").on("click", function() {
        // TODO
       $(this).closest("aside").find(".sidebar-items").toggle(); 
       // now we need to show x-button

    });
    

});
