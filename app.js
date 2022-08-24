
// Free API_KEY from openweathermap.org
const API_KEY = `4385ab5599955528ee4c9eb2b696c9c9`;
const searchbtn = () =>{
    const city = document.getElementById('cityname').value
    if(city){
// API Data URL For Data Collect
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch (url)
    .then(res=>res.json())
    .then(data=> displayTemprature(data))
    } else{
        document.getElementById('cityname').style.borderColor = "red";;
    }
}

const setInnertext = (id, text) =>{
    document.getElementById(id).innerText = text;
}
const displayTemprature = tempprature =>{
    setInnertext("city-name", tempprature.name);
    setInnertext("temp", tempprature.main.temp);
    setInnertext("condition", tempprature.weather[0].main);
    // Weather Image ICON url
    const url = `http://openweathermap.org/img/wn/${tempprature.weather[0].icon}@2x.png`;
    const imageIcon = document.getElementById("wicon"); 
    imageIcon.setAttribute('src', url);
}