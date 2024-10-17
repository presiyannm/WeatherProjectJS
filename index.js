async function GetWeather(city) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=06256b06731e46bba1e82248240810&q=${city}`);

    let data = await response.json();

    let degreesValue = document.getElementById("degreesValue");

    let locationName = document.getElementById("locationName");

    let currentTime = document.getElementById("currentTime");

    let actualTime = new Date();

    let conditionText = document.getElementById("conditionText");

    let conditionPhoto = document.getElementById("conditionPhoto");

    let currentWind = document.getElementById("currentWind");
    
    degreesValue.innerHTML = data.current.temp_c+"°C";
    locationName.innerHTML = data.location.name;
    currentTime.innerHTML = `${actualTime.getHours().toString().padStart(2, '0')}:${actualTime.getMinutes().toString().padStart(2, '0')}`
    conditionText.innerHTML = data.current.condition.text;
    conditionPhoto.src = data.current.condition.icon;
    currentWind.innerHTML = data.current.wind_kph+"km/h";
    
    console.log(data);

}


let searchBtn = document.getElementById("searchBtn");

let searchBox = document.getElementById('searchBox');

searchBtn.addEventListener("click", function() {
    GetWeather(searchBox.value)
});

searchBox.addEventListener("keydown", function(event) {
    if (event.key === "Enter") { 
        GetWeather(searchBox.value); 
    }
});
