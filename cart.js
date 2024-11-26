// Get references to the cart count and the "Buy Now" button
const cartCountElement = document.getElementById('cart-count');
const buyNowButton = document.getElementById('buy-now-btn');

// Initial cart count (in a real app, this would be stored in localStorage or a database)
let cartCount = 0;

// Function to update the cart count
function updateCartCount() {
    cartCountElement.textContent = cartCount;
}

// Event listener for the "Buy Now" button
buyNowButton.addEventListener('click', () => {
    cartCount++;  // Increment the cart count
    updateCartCount();  // Update the displayed cart count
    alert('Product added to cart!');
});