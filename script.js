// script.js

// Initialize total from localStorage or default to 0
let total = parseFloat(localStorage.getItem("total")) || 0;

const discountField = document.getElementById("dcode")
// Update the price display in the topnav
function updatePriceDisplay() {
    const priceLink = document.getElementById("price");
    if (priceLink) {
        priceLink.innerHTML = "$" + total.toLocaleString(undefined, {minimumFractionDigits: 2});
    }
}

// Add item to cart
function addItem(price) {
    total += price;
    localStorage.setItem("total", total.toString());
    updatePriceDisplay();
    location.reload();
}

// Reset the cart total
function setPrice(price) {
    total = price;
    localStorage.setItem("total", total.toString());
    updatePriceDisplay();
}

// When the page loads, show the stored price
document.addEventListener("DOMContentLoaded", updatePriceDisplay);

function ApplyDiscount() {
    if (discountField.value = "discount") {
        setPrice(total -= 10)
    }
}