const searchbox = document.querySelector('.search input');
const searchbtn = document.querySelector('.search button');
const weatherIcon =  document.querySelector('.weather-icon');
async function weather(city) {
    let response = await fetch('https://api.openweathermap.org/data/2.5/weather?&appid=de613882d44cba24267afb81516b3bcd&units=metric&q=' + city);
    let data = await response.json()
    

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = data.main.temp + '°c';
    document.querySelector('.humidity').innerHTML = data.main.humidity+ '%' ;
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';
    if(data.weather[0].main == 'Cloulds'){
        weatherIcon.src = "/js project/images/clouds.png";
    }
    else if(data.weather[0].main == 'Clear'){
        weatherIcon.src = "/js project/images/clear.png";
    }
    else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = "/js project/images/drizzle.png";
    }
    
    else if(data.weather[0].main == 'Mist'){
        weatherIcon.src = "/js project/images/mist.png";
    }
    
    else if(data.weather[0].main == 'Rain'){
        weatherIcon.src = "/js project/images/rain.png";
    }
    
    else if(data.weather[0].main == 'Snow'){
        weatherIcon.src = "/js project/images/snow.png";
    }
    


}

searchbtn.addEventListener('click', ()=>{
weather(searchbox.value);
})


weather();