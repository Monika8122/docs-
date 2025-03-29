// Function to redirect to the order page
document.getElementById("buyNowBtn").addEventListener("click", function() {
    // Get the selected size value
    var selectedSize = document.getElementById("size").value;

    // Pass the selected size as a query parameter
    window.location.href = `order.html?size=${selectedSize}`;  // Redirect to the order page with the selected size
});
