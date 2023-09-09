const cartItems = [];

function addToCart() {
    
    const product = {
        name: document.getElementById("pro").value, // Replace with the actual product name
        price: 19.99 // Replace with the actual product price
    };

    cartItems.push(product);
    displayCart();
}

function displayCart() {
    const cartList = document.getElementById("cart-items");
    cartList.innerHTML = "";

    cartItems.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.innerText = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
    });
}
