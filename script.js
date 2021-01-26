let weather = {
   apiKey: "5901887d5646ddad16f84bb5557a34e8",
   fetchWeather: function(city) {
       fetch("http://api.openweathermap.org/data/2.5/weather?q="+ city +"&lang=pt_br&units=metric&appid="+ this.apiKey)
       .then((response) => response.json())
       .then((data) => this.displayWeather(data))
   },
   displayWeather: function(data) {
       const { name } = data
       const { temp, humidity } = data.main
       const { description, icon, main} = data.weather[0]
       const { speed } = data.wind 
       console.log(name,temp,humidity,description,icon,speed);
       console.log(typeof description);
       document.querySelector(".city").innerHTML = "Tempo em " + name
       document.querySelector(".temp").innerHTML = Math.floor(temp) + "°C"
       document.querySelector(".icon").src = "http://openweathermap.org/img/wn/"+ icon +"@2x.png"
       document.querySelector(".description").innerHTML = description.charAt(0).toUpperCase() + description.slice(1)
       document.querySelector(".humidity").innerHTML = "Humidade: "+ humidity + "%"
       document.querySelector(".wind").innerHTML = "Velocidade do vento: " + speed +" km/h"
    //    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ name +"')"
   },
   search: function() {
       this.fetchWeather(document.querySelector(".search-bar").value)
   }
}

window.onload = function(){
    document.querySelector(".search-bar button").addEventListener("click", function(){
        weather.search()
    })
}
window.onload = function(){
    document.querySelector(".search-bar").addEventListener("keyup", function(event) {
        if(event.key == "Enter"){
            weather.search()
        }
    })
}

window.onload = function(){
    weather.fetchWeather("Florianópolis")
}