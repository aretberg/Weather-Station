const title = document.getElementById('main-heading');
console.log(title);
var weather_data = {};

function update_weather_data(data){
    const id_temp = document.getElementById('temperature');
    id_temp.innerText = data.temperature; 

    const id_humid = document.getElementById('humidity');
    id_humid.innerText = data.humidity;

    const id_pres = document.getElementById('pressure');
    id_pres.innerText = data.pressure;
}

fetch("/api/3dpaws")
    .then(res => res.json())
    .then(data => {
        update_weather_data(data);
    })


    // .then(res => res.json())
    // .then(data => {
    //     print_weather_data(data);
    // });

// async function get_paws_data() {
//     const response = await fetch("/weather_data");
//     return response.json();
// }

// console.log(weather_data.tempf);
// console.log(typeof(weather_data.tempf));
// console.log(weather_data);

