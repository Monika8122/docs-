// Function to handle payment processing
function processPayment(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const cardNumber = document.getElementById("cardNumber").value;
    const expiryDate = document.getElementById("expiryDate").value;
    const cvv = document.getElementById("cvv").value;
    const amount = document.getElementById("amount").value;

    // Validate card details (for the purpose of this example, we will just simulate payment)
    if(cardNumber && expiryDate && cvv) {
        alert(`Payment Successful!
        Amount: ${amount}
        Card: ${cardNumber.substring(0, 4)}-****-****-****\n\nRedirecting to order confirmation page...`);
        
        // Redirect to order confirmation page (You can replace this with a confirmation page)
        window.location.href = "confer.html";
    } else {
        alert("Please enter valid payment details!");
    }
}
