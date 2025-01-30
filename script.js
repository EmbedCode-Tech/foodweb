function fetchSensorData() {
    fetch("http://YOUR_ESP32_IP/") // Replace with your ESP32's IP address
        .then(response => response.json())
        .then(data => {
            document.getElementById("phValue").value = data.ph;
            document.getElementById("temperatureValue").value = data.temperature;
            document.getElementById("gasValue").value = data.gas;
            document.getElementById("turbidityValue").value = data.turbidity;
        })
        .catch(error => console.error("Error fetching data:", error));
}

// Fetch data every 5 seconds
setInterval(fetchSensorData, 5000);
