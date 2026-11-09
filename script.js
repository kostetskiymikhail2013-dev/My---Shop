let totalSum = 0;
let totalCount = 0;

function addToCart(price) {
    totalCount += 1;
    totalSum += price;
    
    document.getElementById('cart-count').innerText = totalCount;
    document.getElementById('cart-total').innerText = totalSum.toLocaleString();
}