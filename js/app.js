const changeLocation = document.getElementById('change-location')
const card = document.getElementById('card')
const details = document.getElementById('details')
const weatherIcon = document.getElementById('weather-icon')
const overlay = document.getElementById('overlay')

changeLocation.city.focus()

function loder (sestem){
    if(sestem){
        overlay.classList.remove('d-none')
    }else{
        overlay.classList.add('d-none')

    }
}

const UpdateUi = (weather)=>{
   details.innerHTML = `
   <h5 class="mb-3">${weather.name},${weather.sys.country} 🌏</h5>
   <p class="mb-3 clear">${weather.weather[0].main} ⛅</p>
   <div class="display-4 mb-3">
     <span class="temp">${Math.round(weather.main.temp)}</span>
     <span class="temp">&deg;C 🌡</span>
   </div>
   `

   if (card.classList.contains('d-none')) {
    card.classList.remove('d-none')
}
weatherIcon.src = ` http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`

}





const getWeather = async(city)=>{
    const date = await getdate(city)
   return  date;
}


// getLocation
changeLocation.addEventListener('submit',(e)=>{
    e.preventDefault()
    const nameCity = changeLocation.city.value.trim()
    changeLocation.reset()
    getWeather(nameCity).then((date) => UpdateUi(date))
})
