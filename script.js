// Weather object

let weather = {
   apiKey: "5901887d5646ddad16f84bb5557a34e8",
   fetchWeather: function(city) {
       fetch("http://api.openweathermap.org/data/2.5/weather?q="+ city +"&lang=pt_br&units=metric&appid="+ this.apiKey)
       .then((response) => response.json())
       .then((data) => this.displayWeather(data))
       .catch((err) => alert("Não conseguimos acessar sua busca. Tente novamente"))
   },
   
   displayWeather: function(data) {
       const { name } = data
       const { temp, humidity } = data.main
       const { description, icon, main} = data.weather[0]
       const { speed } = data.wind 
       document.querySelector(".city").innerHTML = "Tempo em " + name
       document.querySelector(".temp").innerHTML = Math.floor(temp) + "°C"
       document.querySelector(".icon").src = "http://openweathermap.org/img/wn/"+ icon +"@2x.png"
       document.querySelector(".description").innerHTML = description.charAt(0).toUpperCase() + description.slice(1)
       document.querySelector(".humidity").innerHTML = "Humidade: "+ humidity + "%"
       document.querySelector(".wind").innerHTML = "Velocidade do vento: " + speed +" km/h"
       this.displayBackground(description)
   },

   search: function() {
       this.fetchWeather(document.querySelector(".search-bar").value)
   },

   displayBackground: function(description){
       if(description === "céu limpo"){
            document.body.style.backgroundImage = "url(./assets/backgrounds/clearsky.jpg)"
       }
       if(description === "algumas nuvens" || description === "nuvens dispersas"){
            document.body.style.backgroundImage = "url(./assets/backgrounds/fewclouds.jpg)"
       }
       if(description === "nublado"){
            document.body.style.backgroundImage = "url(./assets/backgrounds/nublado.jpg)"
       }
       if(description === "chuva moderada" || description === "chuva leve" || description === "chuva forte"){
            document.body.style.backgroundImage = "url(./assets/backgrounds/rains.jpg)"
       }
       if(description === "tempestade"){
            document.body.style.backgroundImage = "url(./assests/backgrounds/thenderstorm.jpg)"
       }
       if(description === "neve" || description === "pouca neve"){
            document.body.style.backgroundImage = "url(./assets/backgrounds/snow)"
       }
       if(description === "neblina"){
            document.body.style.backgroundImage = "url(./assets/backgrounds/mist)"
       }
   }
}

// Standard fetchWeather 

setTimeout(() => {
    weather.fetchWeather("Florianópolis")
}, 1000);

// Event Listeners

setTimeout(() => {
    document.querySelector(".search-bar button").addEventListener("click", function(){
        weather.search()
    }) 
}, 1000);


setTimeout(() => {
    document.querySelector(".search-bar").addEventListener("keyup", function(event) {
        if(event.key == "Enter"){
            weather.search()
        }
    })
}, 1000);





