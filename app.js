const apiKey= "1e9d3b419323b240deab2dc7daa7a8d7";
const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector("#input");
const btn = document.querySelector("button");
const weatherIcon = document.querySelector("#weather-icon")



async function chechWeather (city){
const response = await fetch(URL + city + `&appid=${apiKey}`);
let data = await response.json();
console.log(data);

document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
document.querySelector(".city").innerHTML = data.name;
document.querySelector(".humidity").innerHTML = data.main.humidity;
document.querySelector(".wind").innerHTML = data.wind.speed + 'km/hr';

if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "clouds.png";
}else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "clear.png";
}else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "drizzle.png";
}else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "mist.png";
}else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "rain.png";
}else if(data.weather[0].main == "Snow"){
    weatherIcon.src = "snow.png";
}


}

btn.addEventListener("click",()=>{
    chechWeather(searchBox.value);
});
 