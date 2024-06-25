let cart = [];

function addToCart(product) {
    cart.push(product);
    alert(product + ' has been added to your cart.');
    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach(function (item, index) {
        let li = document.createElement('li');
        li.textContent = item;
        cartItems.appendChild(li);
    });

    document.getElementById('total-items').textContent = cart.length;
}

document.addEventListener('DOMContentLoaded', function () {
    updateCart();
});
