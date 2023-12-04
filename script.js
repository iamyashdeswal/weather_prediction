document.getElementById('get-weather-btn').addEventListener('click', function () {
    const city = document.getElementById('city-input').value;
    const apiKey = '6983154c26e44ac790502213230111'; // Replace with your weatherapi.com API key
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherData = data.current;
            document.getElementById('city-name').textContent = data.location.name;
            document.getElementById('temperature').textContent = weatherData.temp_c;
            document.getElementById('weather-condition').textContent = weatherData.condition.text;
            document.getElementById('weather-info').style.display = 'block';
        })
        .catch(error => console.error('Error:', error));
});
