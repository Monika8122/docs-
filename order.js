// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Collect form data
    const dress = document.getElementById("dress").value;
    const size = document.getElementById("size").value;
    const quantity = document.getElementById("quantity").value;
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;

    // Display a confirmation message (you can replace this with a modal or redirect to the payment page)
    alert(`Order Summary:
    Dress: ${dress}
    Size: ${size}
    Quantity: ${quantity}
    Name: ${name}
    Address: ${address}
    Email: ${email}
    \n\nRedirecting to payment page...`);

    // Redirect to payment gateway (Payment Page)
    window.location.href = "payment.html?name=" + name + "&email=" + email;
}
