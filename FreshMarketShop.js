

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