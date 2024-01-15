// const { default: axios } = require("axios")



async function moduleProject4() {

  // 👇 WORK WORK BELOW THIS LINE 👇
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`
 
  let descriptions = [
    ["Sunny", "☀️"],
    ["Cloudy", "☁️"],
    ["Rainy", "🌧️"],
    ["Thunderstorm", "⛈️"],
    ["Snowy", "❄️"],
    ["Partly Cloudy", "⛅️"]
  ]

  // 👉 Tasks 1 - 5 go here

  const widgetWeather = document.querySelector('#weatherWidget')
  widgetWeather.style.display= 'none'

  const selectCity = document.getElementById('citySelect');
 selectCity.addEventListener('change', async evt => {
  try {
  evt.target.setAttribute('disabled', 'disabled')
  widgetWeather.style.display= 'none';
  document.querySelector('.info').textContent = 'Fetching weather data...'
 
  let city = evt.target.value;
 const res = await axios.get(`http://localhost:3003/api/weather?city=${city}`)
 console.log(res.data)

widgetWeather.style.display = 'block';
document.querySelector('.info').textContent = '';
evt.target.removeAttribute('disabled')

let { data } = res

document.querySelector('#apparentTemp div:nth-child(2)')
.textContent = `${data.current.apparent_temperature}°`
document.querySelector('#todayDescription')
.textContent = descriptions.find(d => d[0] === data.current.weather_description)[1]
document.querySelector('#todayStats div:nth-child(1)')
.textContent = `${data.current.temperature_min}°/${data.current.temperature_max}°`
document.querySelector('#todayStats div:nth-child(2)')
.textContent = `Precipitation: ${data.current.precipitation_probability * 100} %`
document.querySelector('#todayStats div:nth-child(2)')
.textContent = `Humidity: ${data.current.humidity}%`
document.querySelector('#todayStats div:nth-child(4)')
.textContent = ` Wind: ${data.current.wind_speed}m/s`

}
  catch(err){
   console.log('Promise rejected with an error: ',err.message)
  }
 })

  


  // 👆 WORK WORK ABOVE THIS LINE 👆

}

// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject4 }
else moduleProject4()
