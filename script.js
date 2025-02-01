function fetchData() {
        fetch("https://api.jsonbin.io/v3/b/679db215e41b4d34e4822105/latest", {
            headers: {
                "X-Master-Key": "$2a$10$oSs7q70C322rgLiDgmdhXOFlhY6w49XuiOOU5vTEFhmkfBWlhUbga"
            }
        })
        .then(response => response.json())
        .then(data => {
            let record = data.record; // Extract actual data
            document.getElementById("ph").innerText = record.ph;
            document.getElementById("temperature").innerText = record.temperature;
            document.getElementById("gas").innerText = record.gas;
            document.getElementById("turbidity").innerText = record.turbidity;
        })
        .catch(error => console.log("Error fetching data: ", error));
    }

    setInterval(fetchData, 5000); // Fetch data every 5 seconds
    fetchData();
