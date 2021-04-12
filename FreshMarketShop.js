

$('.chat-logo').click(function () {
    $('.chat').show();
   
});



$('.close-chat').click(function () {
    $('.chat').hide();
   
});


// -------------------------------------------------------------------------

$('.plus').click(function () {
    const input = $(this).closest(".counter").find("input");
    input.val(+input.val() + 1);
});

$('.minus').click(function () {
    const input = $(this).closest(".counter").find("input");
    if (input.val() == 0) {
        input.val(0);
    } else {
        input.val(+input.val() - 1);
    }
});




// -----------------------------------------------------------------------


var allSite = $('.allSite');

$('.products-digit').click(function () {
    $('.allSite').css({
        "opacity": "0.2",
        "z-index": "-1",

    })

    $('.card-product-list').slideDown(700);
    
});

$('.product-close').click(function () {

    $('.card-product-list').slideUp(700);



    $('.allSite').css({
        "opacity": "1",
        "z-index": "none",

    })

});




// -----------------------------------------------------------








// -----------------------------------------------------------------

$( ".log-in-link" ).click(function(){
    
    $(".log-in").show();
    $(".allSite").hide();
    $(".chat-logo").hide();
})



$( ".close-log" ).click(function(){
    
    $(".log-in").hide(1000);
    $(".allSite").show(0);
    $(".chat-logo").show(0);
})



// -------------------------------------------------------------------------------------------------



                
                





            // ---------------------------------------------------------------------------