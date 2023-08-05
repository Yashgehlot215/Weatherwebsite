

const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Goa';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '26fe4e0196msh0906769069e038cp1f917ajsn381f30030e04',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};
const getweather=(city)=>{
  // cityname.innerHTML=city
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options).then(response=>response.json()).then((response)=>{
    console.log(response)
    
    cloud_pct.innerHTML=response.cloud_pct
    temp.innerHTML=response.temp +' °C'
    
    humidity.innerHTML=response.humidity 
    min_temp.innerHTML=response.min_tempa
    max_temp.innerHTML=response.max_temp
    wind_speed.innerHTML=response.wind_speed
    sunrise.innerHTML=response.sunrise
    sunset.innerHTML=response.sunset
    ttemp.innerHTML=response.temp +'deg C'
    Visibility.innterHTML =response.Visibility
  
  }).catch(err=>console.error(err));
}

submit.addEventListener("click",(e)=>{
  e.preventDefault()
  getweather(search.value)
})
getweather('Lucknow')



const toggleButton = document.getElementById("toggleButton");
const tempDisplay = document.getElementById("temp");

let isCelsius = true; // Default to Celsius

toggleButton.addEventListener("click", () => {
    const currentTemp = parseFloat(temp.textContent);
    
    if (isCelsius) {
     
        const fahrenheit = (currentTemp * 9/5) + 32;
        temp.textContent = `${fahrenheit.toFixed(2)}°F`;
        toggleButton.textContent = "Switch to Celsius";
        isCelsius=false;
    } else if(isCelsius==false) {
      

        const Celsius = (currentTemp -32 ) *5/9;
        temp.textContent = `${Celsius.toFixed(2)}°C`;
        toggleButton.textContent = "Switch to fahrenheit";
        isCelsius=true;
    }
    
    
});

