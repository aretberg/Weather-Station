const title = document.getElementById('main-heading');
console.log(title);
var weather_data = {};

function print_weather_data(weather_data){
    console.log("Temperature (F): " + weather_data.tempf);
}

fetch("/weather_data")
    .then(res => res.json())
    .then(data => {
        print_weather_data(data);
    });

// async function get_paws_data() {
//     const response = await fetch("/weather_data");
//     return response.json();
// }

// console.log(weather_data.tempf);
// console.log(typeof(weather_data.tempf));
// console.log(weather_data);

