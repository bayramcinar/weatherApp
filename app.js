var hava = document.querySelector(".hava");
var city1 = document.querySelector(".city");
var durum = document.querySelector(".durum");
var clear = document.getElementById("clear");
var cloudy = document.getElementById("cloudy");
var rainy = document.getElementById("rainy");
var snowy = document.getElementById("snowy");
var sunny = document.getElementById("sunny");
var clearN = document.getElementById("clear-night");


var search = document.getElementById("search");
var havaLogo = document.querySelector(".havaLogo");
var nem = document.querySelector(".nem");
var rüzgar = document.querySelector(".rüzgar");

var inputValue;
var time;

var city = "istanbul"

const apiUrl = `http://api.weatherapi.com/v1/current.json?key=08ea5cc9e68f402c9af142027231206&q=${city}&aqi=no&lang=tr`;
  
fetch(apiUrl)
.then(response => response.json())
.then(data => {
durum.innerHTML = data.current.condition.text;
city1.innerHTML = data.location.name;
hava.innerHTML = data.current.feelslike_c + " C°";
nem.innerHTML = "Nem : " + data.current.humidity;
rüzgar.innerHTML = "Rüzgar Hızı : " + data.current.wind_mph + " m/s";
havaLogo.src = data.current.condition.icon;
time = data.location.localtime;
var timeString = time.split(" ")[1];

  
document.getElementById("rainy").style.display = "none";
document.getElementById("cloudy").style.display = "none";
document.getElementById("sunny").style.display = "none";
document.getElementById("snowy").style.display = "none";
document.getElementById("clear").style.display = "none";
document.getElementById("clear-night").style.display = "none";
 


    if (data.current.condition.text.includes("yağmur") || 
    data.current.condition.text.includes("Yağmur") || 
    data.current.condition.text.includes("yağmurlu") || 
    data.current.condition.text.includes("Yağmurlu")) {
        rainy.style.display = "block";
    }
    else if (data.current.condition.text.includes("Bulut") || 
            data.current.condition.text.includes("bulut") || 
            data.current.condition.text.includes("bulutlu") || 
            data.current.condition.text.includes("Bulutlu")) {
      cloudy.style.display = "block";
    } else if (data.current.condition.text.includes("Güneş") || 
    data.current.condition.text.includes("güneş") || 
    data.current.condition.text.includes("güneşli") || 
    data.current.condition.text.includes("Güneşli")) {
      sunny.style.display = "block";
    } else if (data.current.condition.text.includes("Kar")) {
      snowy.style.display = "block";
    } else if (data.current.condition.text.includes("Açık")) {
      clear.style.display = "block";
    }else if (data.current.condition.text.includes("Yağışlı") ||
    data.current.condition.text.includes("yağışlı") ||
    data.current.condition.text.includes("yağış") ||
    data.current.condition.text.includes("Yağış")){
        rainy.style.display = "block";
    }


})
.catch(error => {
    console.log("API isteği sırasında bir hata oluştu:", error);
});

function submitForm(event) {
    event.preventDefault();
    const inputValue = document.getElementById("search").value;
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=08ea5cc9e68f402c9af142027231206&q=${inputValue}&aqi=no&lang=tr`;
  
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
    durum.innerHTML = data.current.condition.text;
    city1.innerHTML = data.location.name;
    hava.innerHTML = data.current.feelslike_c + " C°";
    nem.innerHTML = "Nem : " + data.current.humidity;
    rüzgar.innerHTML = "Rüzgar Hızı : " + data.current.wind_mph + " m/s";
    havaLogo.src = data.current.condition.icon;
    time = data.location.localtime;
    var timeString = time.split(" ")[1];

      
    document.getElementById("rainy").style.display = "none";
    document.getElementById("cloudy").style.display = "none";
    document.getElementById("sunny").style.display = "none";
    document.getElementById("snowy").style.display = "none";
    document.getElementById("clear").style.display = "none";
    document.getElementById("clear-night").style.display = "none";
    


        if (data.current.condition.text.includes("yağmur") || 
        data.current.condition.text.includes("Yağmur") || 
        data.current.condition.text.includes("yağmurlu") || 
        data.current.condition.text.includes("Yağmurlu")) {
            rainy.style.display = "block";
        }
        else if (data.current.condition.text.includes("Bulut") || 
                data.current.condition.text.includes("bulut") || 
                data.current.condition.text.includes("bulutlu") || 
                data.current.condition.text.includes("Bulutlu")) {
          cloudy.style.display = "block";
        } else if (data.current.condition.text.includes("Güneş") || 
        data.current.condition.text.includes("güneş") || 
        data.current.condition.text.includes("güneşli") || 
        data.current.condition.text.includes("Güneşli")) {
          sunny.style.display = "block";
        } else if (data.current.condition.text.includes("Kar")) {
          snowy.style.display = "block";
        } else if (data.current.condition.text.includes("Açık")) {
          clear.style.display = "block";
        }else if (data.current.condition.text.includes("Yağışlı") ||
        data.current.condition.text.includes("yağışlı") ||
        data.current.condition.text.includes("yağış") ||
        data.current.condition.text.includes("Yağış")){
            rainy.style.display = "block";
        }

    })
    .catch(error => {
        console.log("API isteği sırasında bir hata oluştu:", error);
    });
  }


