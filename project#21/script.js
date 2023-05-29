
// API: - https://api.openweathermap.org/data/2.5/weather?

// API key: - aba6ff9d6de967d5eac6fd79114693cc

// variables: - 1) q  2) appid 3) units=metric 



// Show Weather According to the input city name entered by User 
function showWeather() {
  let c = InputCity.value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?appid=aba6ff9d6de967d5eac6fd79114693cc&q=${c}&units=metric`).then(
    (r) => {
      if (r.ok) {
        return r.json()
      } else {
        alert("something is wrong!... Plz Enter Valid City Name")
      }
    }
  ).then(
    (d) => {
      let name = d.name;
      let temp = d.main.temp;
      let description = d.weather[0].description;
      let windSpeed = d.wind.speed;
      cityName.innerHTML = name;
      tempHTML.innerHTML = temp;
      desc.innerHTML = description;
      speed.innerHTML = windSpeed;
    }
  )
}









// Search only Delhi
// fetch(`https://api.openweathermap.org/data/2.5/weather?appid=aba6ff9d6de967d5eac6fd79114693cc&q=delhi&units=metric`).then(
//   (r) => {
//     if (r.ok) {
//       return r.json()
//     } else {
//       alert("something is wrong!!!")
//     }
//   }
// ).then(
//   (d) => {
//     let name=d.name;
//     let temp=d.main.temp;
//     let description=d.weather[0].description;
//     let windSpeed=d.wind.speed;
//     cityName.innerHTML=name;
//     tempHTML.innerHTML=temp;
//     desc.innerHTML=description;
//     speed.innerHTML=windSpeed;
//   }
// )