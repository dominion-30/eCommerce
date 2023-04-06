// get the current URL
let currentURL = window.location.href;

// slip to just the part after the question mark

let urlSearch = new URL(currentURL);

// get value of parameter from the URL
let value_of_param = urlSearch.searchParams.get("id");

fetch(`https://fakestoreapi.com/products/${value_of_param}`)
.then(request=>request.json())
.then(json=>{
    let item = `<div class="container">
    <h3>${json.title}</h3>
    <p><strong>Price:${json.price}</strong></p>
    <p><strong>Category:${json.category}</strong></p>
    <p><strong>Description:${json.description}</strong></p>
    <div><img src="${json.image}" alt="image of product"></div>
    </div>
    <div><a href="/">Proceed to Payment</a></div>`;

    document.getElementById("product").innerHTML = item;
});




