$(function () {
    var products = [];

    $.ajax({
        url: 'https://fakestoreapi.com/products',
        dataType: 'json',
        success: successHandler,
        error: errorHandler

    });

    function successHandler(response) {
        products = response;
        fillPopular(products)
    }

    function errorHandler(response) {
        console.log(response.status);
    }

    console.log('ready');

    console.log(products);



    
       

    function fillPopular(array) {
        let cards = '';
        array.forEach(function (item) {
            if (item.rating.rate > 4) {
                cards +=
                    '<div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-md-between justify-content-center">' +
                    '<div class="card mt-4">'+
                '<img src="' + item.image + '" class="card-img-top card-image">' +
                    '<div class="card-body d-flex flex-column justify-content-between">' +
                    '<h5 class="card-title">' + item.title + '</h5>' +
                    '<p class="card-text text-ellipsis">' + item.description + '</p>' +
                    '<h6>Price: ' + item.price + ' Eur</h6>' +
                        '<a href="#" class="btn btn-warning ">Add to cart</a>'+
                    '</div >'+
                '</div >'+
            '</div >'

                    $('#popularProducts').html(cards);
            }
        })
    }

})