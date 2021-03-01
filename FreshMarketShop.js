

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




$('.plus-icon').click(function () {
    $('.list-collection').slideDown(700);
    $('.plus-icon').hide(700);
    $('.minus-icon').show(700);
});

$('.minus-icon').click(function () {
    $('.list-collection').slideUp(700);
    $('.minus-icon').hide(700);
    $('.plus-icon').show(700);
});





$('.plus-icon-price').click(function () {
    $('.range-price').slideDown(700);
    $('.plus-icon-price').hide(700);
    $('.minus-icon-price').show(700);
});

$('.minus-icon-price').click(function () {
    $('.range-price').slideUp(700);
    $('.minus-icon-price').hide(700);
    $('.plus-icon-price').show(700);
});



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





$(document).ready(function() {
    $('.input-contact').click(function() {
      if ($(this).val().length==0) {
          $(this).css(
              {
                  "border":"2px solid red"
              }
          );
      } 
    });
  });






  
$(document).ready(function() {
    $('.input-contact').keyup(function() {
       
          $(this).css(
                  {
                      "border":"2px solid #105235"
                  }
          )
        }
        );
        });
    
        // --------------------------------------------------------------------



        $('.checkout').click(function(){

            $('.allSite').css({
                "opacity": "0.1",
                "z-index": "-1",
            
            })
            
            $('.checkout-list').show();
            });



            $('.close-checkout').click(function(){

                $('.allSite').css({
                    "opacity": "1",
                    "z-index": "0",
                
                })
                
                $('.checkout-list').hide();
                
                
                });
                
                
                
                $('.button-got-it').click(function(){
                
                $('.allSite').css({
                    "opacity": "1",
                    "z-index": "0",
                
                })
                
                $('.checkout-list').hide();
                
                
                });
                
                





            // ---------------------------------------------------------------------------