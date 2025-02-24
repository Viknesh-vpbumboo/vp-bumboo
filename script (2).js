// Calculate delivery date (8 working days from today, Monday to Friday)
function calculateDeliveryDate() {
    let deliveryDate = new Date();
    let daysAdded = 0;

    while (daysAdded < 8) {
        deliveryDate.setDate(deliveryDate.getDate() + 1);
        if (deliveryDate.getDay() !== 0 && deliveryDate.getDay() !== 6) {
            daysAdded++;
        }
    }

    return deliveryDate.toDateString();
}

// Handle order form submission
document.getElementById("orderForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const product = document.getElementById("product").value;
    const quantity = document.getElementById("quantity").value;
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const contact = document.getElementById("contact").value;
    const payment = document.getElementById("payment").value;
    const deliveryDate = calculateDeliveryDate();

    // Display delivery date
    document.getElementById("deliveryDate").innerHTML = `<p>Your order will be delivered by: ${deliveryDate}</p>`;

    // Send notification to customer and admin
    const customerMessage = `Thank you for your order, ${name}! Your ${product} (Quantity: ${quantity}) will be delivered by ${deliveryDate}.`;
    const adminMessage = `New order received from ${name} (${contact}): ${product} (Quantity: ${quantity}).`;

    alert(customerMessage);
    console.log(adminMessage); // Replace with actual notification logic (e.g., SMS or email)

    // Show confirmation section after order
    document.getElementById("order-section").style.display = "none";
    document.getElementById("confirmation-section").style.display = "block";
});

// Handle delivery confirmation
document.getElementById("confirmDelivery").addEventListener("click", function () {
    alert("Thank you for confirming your delivery!");
    document.getElementById("confirmation-section").style.display = "none";
    document.getElementById("review-section").style.display = "block";
});

// Handle review form submission
document.getElementById("reviewForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const review = document.getElementById("review").value;
    alert("Thank you for your review!");
    document.getElementById("reviewForm").reset();
});