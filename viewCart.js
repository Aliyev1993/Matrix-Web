
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
                