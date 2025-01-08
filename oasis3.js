function convertTemperature() {
    // Get the input temperature and selected unit
    let temperature = parseFloat(document.getElementById("temperature").value);
    let unit = document.getElementById("unit").value;

    // Validate input
    if (isNaN(temperature)) {
        alert("Please enter a valid number for temperature.");
        return;
    }

    let resultCelsius, resultFahrenheit, resultKelvin;

    // Convert based on the selected unit
    if (unit === "C") {
        resultCelsius = temperature;
        resultFahrenheit = (temperature * 9/5) + 32;
        resultKelvin = temperature + 273.15;
    } else if (unit === "F") {
        resultCelsius = (temperature - 32) * 5/9;
        resultFahrenheit = temperature;
        resultKelvin = (temperature - 32) * 5/9 + 273.15;
    } else if (unit === "K") {
        resultCelsius = temperature - 273.15;
        resultFahrenheit = (temperature - 273.15) * 9/5 + 32;
        resultKelvin = temperature;
    }

    // Display the results
    document.getElementById("resultCelsius").innerText = `Celsius: ${resultCelsius.toFixed(2)} °C`;
    document.getElementById("resultFahrenheit").innerText = `Fahrenheit: ${resultFahrenheit.toFixed(2)} °F`;
    document.getElementById("resultKelvin").innerText = `Kelvin: ${resultKelvin.toFixed(2)} K`;
}
