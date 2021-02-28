
var product=[
    {
        name: 'Poland Spring No Flavor 100% Natural Spring Water',
        slary:'$5.29 / ea ($0.22/ea)',
        image:'gallery/z-1.jpg'
    },
    {
        name: 'Dial Antibacterial Liquid Hand Soap, Spring Water',
        slary:'$1.59 / ea ($0.21/fl oz)',
        image:'gallery/z-2.jpg'
    },
    {
        name: 'Hellmann s Real Mayonnaise Real Mayo',
        slary:'$10.49 / ea ($0.87/ct)',
        image:'gallery/z-3.jpg'
    },

    {
        name: 'Heinz Tomato Ketchup  brand of ketchup produced',
        slary:'$2.99 / ea ($0.15/oz)',
        image:'gallery/z-4.jpg'
    },

    {
        name: 'Tresemmé Shampoo Rich Moisture natural vibrancy',
        slary:'$2.99 / ea ($0.11/oz)',
        image:'gallery/z-5.jpg'
    },
    {
        name: 'Garden Fresh Gourmet® Jacks Special® Salsa - Mild',
        slary:'$4.19 / ea ($0.26/oz)',
        image:'gallery/z-6.jpg'
    },
    {
        name: 'Poland Spring No Flavor 100% Natural Spring Water',
        slary:'$5.29 / ea ($0.22/ea)',
        image:'gallery/z-1.jpg'
    },
    {
        name: 'Dial Antibacterial Liquid Hand Soap, Spring Water',
        slary:'$1.59 / ea ($0.21/fl oz)',
        image:'gallery/z-2.jpg'
    },
    {
        name: 'Hellmann s Real Mayonnaise Real Mayo',
        slary:'$10.49 / ea ($0.87/ct)',
        image:'gallery/z-3.jpg'
    },

    {
        name: 'Heinz Tomato Ketchup  brand of ketchup produced',
        slary:'$2.99 / ea ($0.15/oz)',
        image:'gallery/z-4.jpg'
    },

    {
        name: 'Tresemmé Shampoo Rich Moisture natural vibrancy',
        slary:'$2.99 / ea ($0.11/oz)',
        image:'gallery/z-5.jpg'
    },
    {
        name: 'Garden Fresh Gourmet® Jacks Special® Salsa - Mild',
        slary:'$4.19 / ea ($0.26/oz)',
        image:'gallery/z-6.jpg'
    }
];



var index = 0;


var count = product.length;


document.querySelector('.div-icon-1').addEventListener('click', function () {
    index--;
    
    if(index>0){
        showSlidePrev(index);
    }else{
        
        index=5;
        showSlidePrev(index);
    }

    
});

document.querySelector('.div-icon-2').addEventListener('click', function () {
    index++;
    if(index>5 ){
        index=0;
        showSlideNext(index);
        
    }else{
        showSlideNext(index);
       
    }
    
    
});


function showSlideNext(index) {

    document.querySelector('.title-z-1').textContent = product[0+index].name;
    document.querySelector('.text-z-1').textContent= product[0+index].slary;
    document.querySelector('.img-z-1').setAttribute('src', product[0+index].image);

    document.querySelector('.title-z-2').textContent = product[1+index].name;
    document.querySelector('.text-z-2').textContent= product[1+index].slary;
    document.querySelector('.img-z-2').setAttribute('src', product[1+index].image);

    document.querySelector('.title-z-3').textContent = product[2+index].name;
    document.querySelector('.text-z-3').textContent= product[2+index].slary;
    document.querySelector('.img-z-3').setAttribute('src', product[2+index].image);

    document.querySelector('.title-z-4').textContent = product[3+index].name;
    document.querySelector('.text-z-4').textContent= product[3+index].slary;
    document.querySelector('.img-z-4').setAttribute('src', product[3+index].image);
}



function showSlidePrev(index) {

    document.querySelector('.title-z-1').textContent = product[index+0].name;
    document.querySelector('.text-z-1').textContent= product[index+0].slary;
    document.querySelector('.img-z-1').setAttribute('src', product[index+0].image);

    document.querySelector('.title-z-2').textContent = product[index+1].name;
    document.querySelector('.text-z-2').textContent= product[index+1].slary;
    document.querySelector('.img-z-2').setAttribute('src', product[index+1].image);

    document.querySelector('.title-z-3').textContent = product[index+2].name;
    document.querySelector('.text-z-3').textContent= product[index+2].slary;
    document.querySelector('.img-z-3').setAttribute('src', product[index+2].image);

    document.querySelector('.title-z-4').textContent = product[index+3].name;
    document.querySelector('.text-z-4').textContent= product[index+3].slary;
    document.querySelector('.img-z-4').setAttribute('src', product[index+3].image);
}




// ------------------------------------------------------------------------------

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

$( ".log-in-link" ).click(function(){
    $(".log-in").show();
    $(".allSite").hide();
    $(".chat-logo").hide();
})



$( ".close-log" ).click(function(){
    $(".log-in").hide();
    $(".allSite").show();
    $(".chat-logo").show();
})




// ---------------------------------------------------------------

// -----------------------------------------------------------------