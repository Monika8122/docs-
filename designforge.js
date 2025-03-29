// Wait for the DOM to fully load before executing
document.addEventListener('DOMContentLoaded', function () {
    // Get the form element by its ID
    const garmentForm = document.getElementById('garmentForm');

    // Add an event listener to handle form submission
    garmentForm.addEventListener('submit', function (event) {
        event.preventDefault();  // Prevent the default form submission (page reload)

        // Get all the form values
        const fabric = document.getElementById('fabric').value;
        const colorPrint = document.getElementById('colorPrint').value;
        const shoulder = document.getElementById('shoulder').value;
        const hip = document.getElementById('hip').value;
        const hand = document.getElementById('hand').value;
        const breast = document.getElementById('breast').value;
        const description = document.getElementById('desc').value;

        // Validate if all fields are filled
        if (!fabric || !colorPrint || !shoulder || !hip || !hand || !breast) {
            alert("⚠ All fields are required! Please fill in every field.");
            return;
        }

        // Optional: Add specific validations like range checks for the sizes (if needed)
        if (shoulder < 30 || shoulder > 70) {
            alert("⚠ Shoulder size must be between 30cm and 70cm.");
            return;
        }
        if (hip < 60 || hip > 120) {
            alert("⚠ Hip size must be between 60cm and 120cm.");
            return;
        }
        if (hand < 10 || hand > 40) {
            alert("⚠ Hand size must be between 10cm and 40cm.");
            return;
        }
        if (breast < 60 || breast > 120) {
            alert("⚠ Breast size must be between 60cm and 120cm.");
            return;
        }

        // Display a confirmation message
        alert(`
            ✅ Your garment customization request has been submitted successfully!

            Fabric: ${fabric}
            Color & Print: ${colorPrint}
            Shoulder Size: ${shoulder} cm
            Hip Size: ${hip} cm
            Hand Size: ${hand} cm
            Breast Size: ${breast} cm
            Description: ${description}
        `);

        // Optionally, reset the form after submission
        garmentForm.reset();
    });
});
