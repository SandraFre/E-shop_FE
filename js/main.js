$(function () {
    var products = [];
    var cart = [];
    var count = 0;

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
    });

    // $(document).on('click', '#addToCart')(function () {
    //     count+=1
    //     addToCart(count);
    // });

    // function addToCart(count) {
       
    //     let cartCount = '';
    //     cartCount += '<span' +
    //         'class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary font-10">' + count +
    //         '<span class="visually-hidden">cart items</span></span>';
    //     $('#cartItemCount').html(cartCount);
    // }


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
                    '<div id="addToCart" class="btn btn-warning" type="button">Add to cart</div>' +
                    '</div >' +
                    '</div >' +
                    '</div >'

                $('#popularProducts').html(cards);
            }
        })
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
                    '<div id="addToCart" class="btn btn-warning" type="button">Add to cart</div>' +
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
                '<div id="addToCart" href="" class="btn btn-warning ">Add to cart</div>' +
                '</div >' +
                '</div >' +
                '</div >'

            $('#allProducts').html(cards);

        })
    }

})