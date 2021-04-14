var product=[
    {
        name: 'Poland Spring Water',
        slary:'$5.29',
        image:'gallery/z-1.jpg'
    },
    {
        name: 'Dial Hand Soap',
        slary:'$1.59',
        image:'gallery/z-2.jpg'
    },
    {
        name: 'Hellmann s Mayonnaise',
        slary:'$30.99',
        image:'gallery/z-3.jpg'
    },

    {
        name: 'Heinz Ketchup',
        slary:'$2.88',
        image:'gallery/z-4.jpg'
    },

    {
        name: 'Tresemmé Shampoo',
        slary:'$2.99',
        image:'gallery/z-5.jpg'
    },
    {
        name: 'Garden Gourmet',
        slary:'$4.19',
        image:'gallery/z-6.jpg'
    },
    {
        name: 'Poland Spring Water',
        slary:'$5.29',
        image:'gallery/z-1.jpg'
    },
    {
        name: 'Dial Hand Soap',
        slary:'$1.59',
        image:'gallery/z-2.jpg'
    },
    {
        name: 'Hellmann s Mayonnaise',
        slary:'$30.99',
        image:'gallery/z-3.jpg'
    },

    {
        name: 'Heinz Ketchup',
        slary:'$2.88',
        image:'gallery/z-4.jpg'
    },

    {
        name: 'Tresemmé Shampoo',
        slary:'$2.99',
        image:'gallery/z-5.jpg'
    },
    {
        name: 'Garden Gourmet',
        slary:'$4.19',
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