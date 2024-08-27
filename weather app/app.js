

const apiKey = "your api";

const weatherData = document.getElementById("weather-data");

const inputElement =document.getElementById("city-input");

const formEl = document.querySelector('form');


formEl.addEventListener('submit',(event)=>{
    event.preventDefault();
    const cityName = inputElement.value;
    getWeatherData(cityName)
})

async function getWeatherData(cityName){

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)

        if (!response.ok){
            throw new Error('Network response was not ok')
        }
        const data=await response.json();
/*         console.log(data)  */

        const temperature=Math.round(data.main.temp);

        const description = data.weather[0].description;

        const icon= data.weather[0].icon
        const details =[
            `Feels like: ${Math.round(data.main.feels_like)}°C`,
            `Humdity : ${data.main.humidity}%`,
            `Wind Speed : ${data.wind.speed}m/s`
        ]
        weatherData.querySelector('.icon').innerHTML=`<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">
`
        weatherData.querySelector('.temperature').textContent=`${temperature}°C`;

        weatherData.querySelector('.desc').textContent=description;

        
        weatherData.querySelector('.details').innerHTML=details.map((element)=>`<div>${element}</div>`).join("");

    } catch (error) {
       
        weatherData.querySelector('.icon').innerHTML=""/* `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon"> */
        
                weatherData.querySelector('.temperature').textContent=""
        
                weatherData.querySelector('.desc').textContent=" An Error occured Please try again later";
        
                
                weatherData.querySelector('.details').innerHTML=""/* etails.map((element)=>`<div>${element}</div>`).join("");
         */
    }

}
