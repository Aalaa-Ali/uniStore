var xhr = new XMLHttpRequest();
xhr.open('Get', '/products.json', true);
xhr.onload = function() {
    if (this.status == 200) {
        var cards = JSON.parse(this.responseText);

        var output = '';

        for (var i in cards) {
            output += `<div class="col-sm-6 col-md-4 product">
        <div class="body">
            <a href="#favorites" class="favorites" data-favorite="inactive"><i class="ion-ios-heart-outline"></i></a>
            <a href="./"><img src=${cards[i].img} alt="Apple iMac 27 Retina" /></a>

            <div class="content">
                <h1 class="h3">${cards[i].name}</h1>
                <p class="price">${cards[i].price}</p>
                <label>${cards[i].type}</label>

                <button class="btn btn-link"> <i class="ion-android-open"></i> Details</button>
                <button class="btn btn-primary btn-sm rounded"> <i class="ion-bag"></i> Add to cart</button>
            </div>
        </div>
    </div>`
        }
        document.getElementById("products").innerHTML = output;
    }
}
xhr.send();