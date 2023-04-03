

fetch("https://fakestoreapi.com/products/1")
.then(request=>request.json())
.then(json=>{
    let item = `<div>
    <h3>${json.title}</h3>
    <p><strong>Price:${json.price}</strong></p>
    <p><strong>Category:${json.category}</strong></p>
    <p><strong>Description:${json.description}</strong></p>
    <div><img src="${json.image}" alt="image of product"></div>
    </div>`;

    document.getElementById("product").innerHTML = item;
});




