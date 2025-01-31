function fetchSensorData() {
    // Hardcoded sensor values
    const sensorData = {
        ph: 6.8,
        temperature: 25.3,
        gas: 0.5,
        turbidity: 2.1
    };

    // Updating the input fields with hardcoded values
    document.getElementById("phValue").value = sensorData.ph;
    document.getElementById("temperatureValue").value = sensorData.temperature + " °C";
    document.getElementById("gasValue").value = sensorData.gas;
    document.getElementById("turbidityValue").value = sensorData.turbidity;
}

// Function to show the success message when clicking the submit button
function showMessage() {
    document.getElementById("message").classList.remove("hidden");
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", fetchSensorData);
