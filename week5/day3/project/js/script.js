let result = document.getElementById("result")

fetch("http://api.openweathermap.org/data/2.5/weather?q=houston,us&appid=d4b93d10a5101c29c027bc07205c5404&units=imperial")
    .then(response => response.json())
    .then(data => {
        let weather = data(data => {
            return `<li>City: ${data.name}</li>
                    <li>current tempature is ${data.main.temp} , but feels like ${data.main.feels_like}.</li>
                    <li>humidity is ${data.humidity}%</li>`
        })

        result.innerHTML = weather.join("")
    })