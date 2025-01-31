async function fetchSensorData() {
    try {
        // Simulating ESP32 sending JSON data (Replace with actual ESP32 IP address)
        const response = await fetch("http://192.168.222.208/sensor-data"); // Change to your ESP32 IP
        const sensorData = await response.json(); // Convert response to JSON

        // Updating the input fields with ESP32 data
        document.getElementById("phValue").value = sensorData.ph;
        document.getElementById("temperatureValue").value = sensorData.temperature + " °C";
        document.getElementById("gasValue").value = sensorData.gas;
        document.getElementById("turbidityValue").value = sensorData.turbidity;

    } catch (error) {
        console.error("Error fetching data:", error);
        alert("Failed to retrieve data from ESP32!");
    }
}

// Function to show the success message when clicking the submit button
function showMessage() {
    const messageElement = document.getElementById("message");
    messageElement.classList.remove("hidden");
    messageElement.textContent = "Data Saved Successfully! ✅";

    // Hide message after 3 seconds
    setTimeout(() => {
        messageElement.classList.add("hidden");
    }, 3000);
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", fetchSensorData);
