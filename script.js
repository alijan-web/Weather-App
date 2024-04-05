
const apiKey = "ec08f1281a3df94c94159431aa1a6cf3";
const third = `&appid=${apiKey}&units=metric`;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=`;

const myInput = document.querySelector("#weather-input");
const myBtn = document.querySelector("#weather-btn");
const myimg = document.querySelector("#myimg");

function myweather(city){
    fetch(apiUrl + city + third).then((response) => {
        console.log(response);
       return response.json()
    }).then(data => {
        console.log(data);
        
        document.querySelector("#mytemp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector("#mytemps").innerHTML = Math.round(data.main.temp) + "°C";
       
        document.querySelector("#myhumidity").innerHTML = data.main.humidity + "%";
        document.querySelector("#mywind").innerHTML = data.wind.speed + "km/h";
        document.querySelector("#mycity").innerHTML = data.name;

   
        if(data.weather[0].main == "Clouds"){
            myimg.src = "img/cloudy.png";
            document.querySelector("#weather-name").innerHTML = "Clouds";
          }else if(data.weather[0].main == "Rain"){
            myimg.src = "img/rainy.png";
            document.querySelector("#weather-name").innerHTML = "Rain";
          }else if(data.weather[0].main == "Clear"){
            myimg.src = "img/clear.png";
            document.querySelector("#weather-name").innerHTML = "Clear";
          }else if(data.weather[0].main == "Drizzel"){
            myimg.src = "img/drizzel.png";
            document.querySelector("#weather-name").innerHTML = "Drizzel";
          }

    }).catch(error => {
        console.error(error);
    })
}

  myweather("sargodha");

