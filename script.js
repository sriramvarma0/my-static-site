const apiKey = '89ffa927c462a3565e4db0da39521ba2'; // Replace with your OpenWeatherMap API Key

async function getWeather() {
  const city = document.getElementById("city").value;
  if (!city) return alert("Please enter a city");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod !== 200) throw new Error(data.message);

    document.getElementById("result").classList.remove("hidden");
    document.getElementById("location").innerText = `${data.name}, ${data.sys.country}`;
    document.getElementById("temp").innerText = data.main.temp;
    document.getElementById("desc").innerText = data.weather[0].description;
    document.getElementById("humidity").innerText = data.main.humidity;
    document.getElementById("wind").innerText = data.wind.speed;
  } catch (err) {
    alert("Error: " + err.message);
  }
}
