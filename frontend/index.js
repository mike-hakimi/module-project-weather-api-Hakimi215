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
