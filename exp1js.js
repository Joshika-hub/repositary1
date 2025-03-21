//Dummy data for the catalog

const catalog [ {id: 1, name: 'Product 1', price: 20}, { id: 2, name:'product 2',price:25},];

// Function to load the catalog
 function loadCatalog() {

const catalogContainer= document.getElementById('content'); 
catalogContainer.innerHTMl=' <h2>Catalog</h2>';

catalog.forEach(product => {

const productCard= document.createElement('div');
productCard.classList.add('product-card');
productCard.innerHTML='
<h3>${product.name}</h3>
<p>$${product.price)</p>
<button onclick="addToCart(${product.Id))">Add to Cart</button>
';

 catalogContainer.appendChild(productCard);
});

}

// Function to add product to the cart

function addToCart (productId) {

// Implement cart functionality here 
console.log("Product ${productId) added to cart');
}

loadcatalog();