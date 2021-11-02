$(function () {
    var products = [];
    var cart = [];

    $.ajax({
        url: 'https://fakestoreapi.com/products',
        dataType: 'json',
        success: successHandler,
        error: errorHandler

    });

    function successHandler(response) {
        products = response;
        fillPopular(products);
        allProducts(products);
    }

    function errorHandler(response) {
        console.log(response.status);
    }


    $('#search').click(function () {
        const search = $('#searchText').val();
        let filteredArray = products.filter(
            p => p.title.includes(search)
                || p.description.includes(search)
                || p.category.includes(search));

        let searchedItem = '';
        searchedItem += '<h4 class="fst-italic">' + search + '</h4>';
        $('#searchedItem').html(searchedItem);
        fillSearched(filteredArray);
    })

    $('#addToCart').click(function () {
        addToCart();

    })

    function addToCart(item) {
        $('#cartItemCount').html(count);

    }


    function fillSearched(array) {
        $('#popular').addClass('d-none');
        $('#searchedItems').removeClass('d-none');
        if (array.length > 0) {
            let cards = '';
            array.forEach(function (item) {
                cards +=
                    '<div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-md-between justify-content-center">' +
                    '<div class="card mt-4">' +
                    '<img src="' + item.image + '" class="card-img-top card-image">' +
                    '<div class="card-body d-flex flex-column justify-content-between">' +
                    '<h5 class="card-title">' + item.title + '</h5>' +
                    '<p class="card-text text-ellipsis">' + item.description + '</p>' +
                    '<h6>Price: ' + item.price + ' Eur</h6>' +
                    '<a id="addToCart" href="#" class="btn btn-warning" type="button">Add to cart</a>' +
                    '</div >' +
                    '</div >' +
                    '</div >'
            });
            $('#searchedProducts').html(cards);
        }
        else {
            let noItems = '';
            noItems += '<h6 class="fst-italic">Sorry, no items found...</h6>'
            $('#searchedProducts').html(noItems);

        }
    }




    function fillPopular(array) {
        let cards = '';
        array.forEach(function (item) {
            if (item.rating.rate > 4) {
                cards +=
                    '<div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-md-between justify-content-center">' +
                    '<div class="card mt-4">' +
                    '<img src="' + item.image + '" class="card-img-top card-image">' +
                    '<div class="card-body d-flex flex-column justify-content-between">' +
                    '<h5 class="card-title">' + item.title + '</h5>' +
                    '<p class="card-text text-ellipsis">' + item.description + '</p>' +
                    '<h6>Price: ' + item.price + ' Eur</h6>' +
                    '<a href="#" class="btn btn-warning ">Add to cart</a>' +
                    '</div >' +
                    '</div >' +
                    '</div >'

                $('#popularProducts').html(cards);
            }
        })
    }

    function allProducts(array) {
        let cards = '';
        array.forEach(function (item) {
            cards +=
                '<div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-md-between justify-content-center">' +
                '<div class="card mt-4">' +
                '<img src="' + item.image + '" class="card-img-top card-image">' +
                '<div class="card-body d-flex flex-column justify-content-between">' +
                '<h5 class="card-title">' + item.title + '</h5>' +
                '<p class="card-text text-ellipsis">' + item.description + '</p>' +
                '<h6>Price: ' + item.price + ' Eur</h6>' +
                '<a href="#" class="btn btn-warning ">Add to cart</a>' +
                '</div >' +
                '</div >' +
                '</div >'

            $('#allProducts').html(cards);

        })
    }

})