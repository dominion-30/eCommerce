// async function getProducts(){
//     let request = await fetch("https://fakestoreapi.com/products");
//     let response = await request.json();
//     console.log(response);
// }

// getProducts();

// async function displayProducts(){
//     let products = await getProducts();
//     let items="";
//     products.forEach(product => {
//         let item = `<div class="showP">

//         <h3>${product.title}</h3>
//         <p><strong>Price:</strong>${product.price}</p>
//         <p><strong>Description:</strong>${product.description}</p>
//         <div>
//         <img src="${product.image}">
//         </div>

        
//         </div>`
//         items = item + items;
//     });

//     document.getElementById("showProducts").innerHTML = items;
// }
// displayProducts();

// get a product

fetch('https://fakestoreapi.com/products/1')
.then(request=>request.json())
.then(json=>{let item = `<div class="">
<h3>${json.title}</h3>
<p><strong>Price:</strong>${json.price}</p>
<p><strong>Description:${json.description}</strong></p>
<div><img src="${json.image}"></div>
</div>`;

document.getElementById("showProducts").innerHTML = item;

})