var hava = document.querySelector(".hava");
var city1 = document.querySelector(".city");
var durum = document.querySelector(".durum");
var clear = document.getElementById("clear");
var cloudy = document.getElementById("cloudy");
var rainy = document.getElementById("rainy");
var snowy = document.getElementById("snowy");
var sunny = document.getElementById("sunny");
var cloudyN = document.getElementById("cloudy-night");
var rainyN = document.getElementById("rainy-night");
var clearN = document.getElementById("clear-night");
var videoRainy = document.getElementById("rainy");
var videoSunny = document.getElementById("sunny");
var videoSnowy = document.getElementById("snowy");
var videoCloudy = document.getElementById("cloudy");
var videoClear = document.getElementById("clear");
var videoClearN = document.getElementById("clear-night");
var videoRainyN = document.getElementById("rainy-night");
var videoCloudyN = document.getElementById("cloudy-night");

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
document.getElementById("rainy-night").style.display = "none";
document.getElementById("cloudy-night").style.display = "none";
 

if((timeString >= "20:00" && timeString <= "23:59") || (timeString >= "00:00" && timeString <= "05:00")){
    if (data.current.condition.text.includes(("yağmur") || ("Yağmur")|| ("yağmurlu")|| ("Yağmurlu"))) {
        rainyN.style.display = "block";
    }else if (data.current.condition.text.includes(("Bulut") || ("bulut") || ("bulutlu") || ("Bulutlu"))) {
        cloudyN.style.display = "block";
    }else if (data.current.condition.text.includes("Açık")) {
        clearN.style.display = "block";
    }
}
else{
    if (data.current.condition.text.includes(("yağmur") || ("Yağmur")|| ("yağmurlu")|| ("Yağmurlu"))) {
        rainy.style.display = "block";
    } else if (data.current.condition.text.includes(("Bulut") || ("bulut") || ("bulutlu") || ("Bulutlu"))) {
      cloudy.style.display = "block";
    } else if (data.current.condition.text.includes(("Güneş") || ("güneş") || ("güneşli") || ("Güneşli"))) {
      sunny.style.display = "block";
    } else if (data.current.condition.text.includes("Kar")) {
      snowy.style.display = "block";
    } else if (data.current.condition.text.includes("Açık")) {
      clear.style.display = "block";
    }else if (data.current.condition.text.includes(("Yağışlı") || ("yağışlı") || ("yağış") || ("Yağış"))){
        rainy.style.display = "block";
    }
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
        time = data.location.localtime;
        var timeString = time.split(" ")[1];
        if((timeString >= "20:00" && timeString <= "23:59") || (timeString >= "00:00" && timeString <= "05:00")){
            if (data.current.condition.text.includes(("yağmur") || ("Yağmur")|| ("yağmurlu")|| ("Yağmurlu"))) {
                rainyN.style.display = "block";
            }else if (data.current.condition.text.includes(("Bulut") || ("bulut") || ("bulutlu") || ("Bulutlu"))) {
                cloudyN.style.display = "block";
            }else if (data.current.condition.text.includes("Açık")) {
                clearN.style.display = "block";
            }
        }
        else{
            if (data.current.condition.text.includes(("yağmur") || ("Yağmur")|| ("yağmurlu")|| ("Yağmurlu"))) {
                rainy.style.display = "block";
            } else if (data.current.condition.text.includes(("Bulut") || ("bulut") || ("bulutlu") || ("Bulutlu"))) {
              cloudy.style.display = "block";
            } else if (data.current.condition.text.includes(("Güneş") || ("güneş") || ("güneşli") || ("Güneşli"))) {
              sunny.style.display = "block";
            } else if (data.current.condition.text.includes("Kar")) {
              snowy.style.display = "block";
            } else if (data.current.condition.text.includes("Açık")) {
              clear.style.display = "block";
            }else if (data.current.condition.text.includes(("Yağışlı") || ("yağışlı") || ("yağış") || ("Yağış"))){
                rainy.style.display = "block";
            }
        }
        durum.innerHTML = data.current.condition.text;
        city1.innerHTML = data.location.name;
        hava.innerHTML = data.current.feelslike_c + " C°";
        nem.innerHTML = "Nem : " + data.current.humidity;
        rüzgar.innerHTML = "Rüzgar Hızı : " + data.current.wind_mph + " m/s";
        havaLogo.src = data.current.condition.icon;
  
        document.getElementById("rainy").style.display = "none";
        document.getElementById("cloudy").style.display = "none";
        document.getElementById("sunny").style.display = "none";
        document.getElementById("snowy").style.display = "none";
        document.getElementById("clear").style.display = "none";
        document.getElementById("clear-night").style.display = "none";
        document.getElementById("rainy-night").style.display = "none";
        document.getElementById("cloudy-night").style.display = "none";
      })
      .catch(error => {
        // Hata yönetimi
        console.log("API isteği sırasında bir hata oluştu:", error);
      });
  }


// request.addEventListener("load", function(){
//     const data = JSON.parse(this.responseText)
//     console.log(data);
//     durum.innerHTML = data.current.condition.text
//     city1.innerHTML = data.location.name;
//     hava.innerHTML = data.current.feelslike_c;
//     if((data.current.condition.text).includes("rain")){
//         rainy.style.display = "block";
//     }
//     else if((data.current.condition.text).includes("cloudy")){
//         cloudy.style.display = "block";
//     }
//     else if((data.current.condition.text).includes("Sunny")){
//         sunny.style.display = "block";
//     }
//     else if((data.current.condition.text).includes("snowy")){
//         snowy.style.display = "block";
//     }
//     else if((data.current.condition.text).includes("clear")){
//         clear.style.display = "block";
//     }
// });
function playVideoRainy() {
    videoRainy.play();
}

videoRainy.addEventListener("ended", function () {
  this.currentTime = 0;
  this.play();
 
});

playVideoRainy();


function playVideoSunny() {
    videoSunny.play();
}

videoSunny.addEventListener("ended", function () {
  this.currentTime = 0;
  this.play();
});

playVideoSunny();


function playVideoSnowy() {
    videoSnowy.play();
}

videoSnowy.addEventListener("ended", function () {
  this.currentTime = 0;
  this.play();
});

playVideoSnowy();


function playVideoCloudy() {
    videoCloudy.play();
}

videoCloudy.addEventListener("ended", function () {
  this.currentTime = 0;
  this.play();
});

playVideoCloudy();


function playVideoClear() {
    videoClear.play();
}

videoClear.addEventListener("ended", function () {
  this.currentTime = 0;
  this.play();
});

playVideoClear();