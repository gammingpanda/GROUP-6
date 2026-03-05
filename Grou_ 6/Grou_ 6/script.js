
function calculateTotal() {
    const supplier = document.getElementById("supplier").value;
    const quantity = parseFloat(document.getElementById("quantity").value);
    const price = parseFloat(document.getElementById("price").value);

    if (!supplier || isNaN(quantity) || isNaN(price)) {
        alert("Please fill all fields correctly.");
        return;
    }
    
    const total = quantity * price;

    document.getElementById("displaySupplier").textContent = supplier;
    document.getElementById("displayQuantity").textContent = quantity;
    document.getElementById("displayPrice").textContent = price.toLocaleString();
    document.getElementById("displayTotal").textContent = total.toLocaleString();
}
