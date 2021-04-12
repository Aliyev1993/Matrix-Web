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
    