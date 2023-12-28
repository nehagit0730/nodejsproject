let firstProduct = "Product1";
let firstPrice = "$20";

let secProduct = "Product2";
let secPrice = "$10";

let thirdProduct = "Product3";
let thirdPrice = "$30";

let fourthProduct = "Product4";
let fourthPrice = "$50";

let btnText = "Quck View"



const productList = `
<div class="product" id="product1"><h2> ${firstProduct}</h2> <br> <p>${firstPrice}</p><br><button class="quick-view-btn" onclick="showProductDetails('product1')">${btnText}</button></div>
<div class="product" id="product2"><h2> ${secProduct}</h2> <br> <p>${secPrice}</p><br><button class="quick-view-btn" onclick="showProductDetails('product1')">${btnText}</button></div>
<div class="product" id="product3"><h2> ${thirdProduct}</h2> <br> <p>${thirdPrice}</p><br><button class="quick-view-btn" onclick="showProductDetails('product1')">${btnText}</button></div>
<div class="product" id="product4"><h2> ${fourthProduct}</h2> <br> <p>${fourthPrice}</p><br><button class="quick-view-btn" onclick="showProductDetails('product1')">${btnText}</button></div>
`;

const modal = `
<div class="product" id="product1"><h2> ${firstProduct}</h2> <br> <p>${firstPrice}</p>></div>
<div class="product" id="product2"><h2> ${secProduct}</h2> <br> <p>${secPrice}</p></div>
<div class="product" id="product3"><h2> ${thirdProduct}</h2> <br> <p>${thirdPrice}</p></div>
<div class="product" id="product4"><h2> ${fourthProduct}</h2> <br> <p>${fourthPrice}</p></div>
`;

document.getElementById("product-list").innerHTML = productList;


function showProductDetails () {
	var modal = document.getElementById("modal");
var btn = document.getElementById("quick-view-btn");
btn.onclick = function() {
  modal.style.display = "block";
}
}

const products = [
    {
        "id": 1,
        "title": "Product 1",
        "description": "Description for Product 1.",
        "categories": ["Category A"],
        "tags": ["Tag 1", "Tag 2"],
        "price": 19.99
    },
    {
        "id": 2,
        "title": "Product 2",
        "description": "Description for Product 2.",
        "categories": ["Category B"],
        "tags": ["Tag 3", "Tag 4"],
        "price": 29.99
    },
    {
        "id": 3,
        "title": "Product 3",
        "description": "Description for Product 3.",
        "categories": ["Category B"],
        "tags": ["Tag 3", "Tag 4"],
        "price": 29.99
    },
    {
        "id": 4,
        "title": "Product 4",
        "description": "Description for Product 4.",
        "categories": ["Category B"],
        "tags": ["Tag 3", "Tag 4"],
        "price": 29.99
    }
];