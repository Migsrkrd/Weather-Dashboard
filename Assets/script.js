var currentDayUrl;
var otherDaysUrl;
var dataCheck;
var currentDay = $("#currentDay");
var currentTemp = $("#currentTemp");
var currentWind = $("#currentWind");
var currentHum = $("#currentHum");
var searchButton = document.getElementById("searchButton");
var textBoxInfo = document.getElementById("citySearch");
var previousInput;
var extraButtons = document.getElementById("extraButtons")

displayCity();

function getCurrentAPI(currentDayUrl){
    fetch(currentDayUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        dataCheck = data;
        var iconDisplay;
        $("#currentHeader").addClass("currentHeaderBox")
        $("#currentArticle").addClass("articleBox")
        if(data.weather[0].description === "clear sky"){
            iconDisplay = "☀️"
        }
        else if(data.weather[0].description === "scattered clouds" || data.weather[0].description === "few clouds" || data.weather[0].description === "overcast clouds"|| data.weather[0].description === "broken clouds"){
            iconDisplay = "☁️"
        }
        else if(data.weather[0].description === "moderate rain"||data.weather[0].description === "light rain"||data.weather[0].description === "heavy rain"){
            iconDisplay = "🌧️"
        }
        else if(data.weather[0].description === "fog"){
            iconDisplay = "🌫️"
        }
        else if(data.weather[0].description === "smoke"){
            iconDisplay = "🔥😶‍🌫️🚒"
        }
        else if(iconDisplay === undefined){
            iconDisplay = "🌡️"
        }
        currentDay.text( data.name + " " + dayjs().format("dddd MMM/DD/YYYY") + iconDisplay);
        currentTemp.text("Temperature: " + data.main.temp + " degrees F");
        currentWind.text("Wind: "+data.wind.speed+"MPH");
        currentHum.text("Humidity: "+data.main.humidity+"%");
    })
}



function getDaysAPI(otherDaysUrl){
    fetch(otherDaysUrl)
    .then(function(response){
        return response.json();
})
    .then(function(data){
        var icon1;
        var icon2;
        var icon3;
        var icon4;
        var icon5;
        $("#forecastHeader").text("5 Day Forecast...")
        $("#forecastInfo").addClass("infoClass")
        $("#firstForeDay").addClass("firstDay")
        $("#secondForeDay").addClass("firstDay")
        $("#thirdForeDay").addClass("firstDay")
        $("#fourthForeDay").addClass("firstDay")
        $("#fifthForeDay").addClass("firstDay")
        if(data.list[4].weather[0].description === "clear sky"){
            icon1 = "☀️"
        }
        else if(data.list[4].weather[0].description === "scattered clouds" || data.list[4].weather[0].description === "few clouds" || data.list[4].weather[0].description === "overcast clouds"|| data.list[4].weather[0].description === "broken clouds"){
            icon1 = "☁️"
        }
        else if(data.list[4].weather[0].description === "moderate rain"||data.list[4].weather[0].description === "light rain"||data.list[4].weather[0].description === "heavy rain"){
            icon1 = "🌧️"
        }
        else if(data.list[4].weather[0].description === "fog"){
            icon1 = "🌫️"
        }
        else if(data.list[4].weather[0].description === "smoke"){
            icon1 = "🔥😶‍🌫️🚒"
        }
        else if(icon1 === undefined){
            icon1 = "🌡️"
        }
        $("#dayOneHeader").text(data.list[4].dt_txt)
        $("#dayOneTemp").text("Temperature: " + data.list[4].main.temp + "degrees F")
        $("#dayOneWind").text("Wind: "+data.list[4].wind.speed+"mph")
        $("#dayOneHum").text("Humidity: "+ data.list[4].main.humidity + "%")
        $("#dayOneIcon").text(icon1)
        //Day One Done---------------------------------------------------------------------
        if(data.list[12].weather[0].description === "clear sky"){
            icon2 = "☀️"
        }
        else if(data.list[12].weather[0].description === "scattered clouds" || data.list[12].weather[0].description === "few clouds" || data.list[12].weather[0].description === "overcast clouds"|| data.list[12].weather[0].description === "broken clouds"){
            icon2 = "☁️"
        }
        else if(data.list[12].weather[0].description === "moderate rain"||data.list[12].weather[0].description === "light rain"||data.list[12].weather[0].description === "heavy rain"){
            icon2 = "🌧️"
        }
        else if(data.list[12].weather[0].description === "fog"){
            icon2 = "🌫️"
        }
        else if(data.list[12].weather[0].description === "smoke"){
            icon2 = "🔥😶‍🌫️🚒"
        }
        else if(icon2 === undefined){
            icon2 = "🌡️"
        }
        $("#dayTwoHeader").text(data.list[12].dt_txt)
        $("#dayTwoTemp").text("Temperature: " + data.list[12].main.temp + "degrees F")
        $("#dayTwoWind").text("Wind: "+data.list[12].wind.speed+"mph")
        $("#dayTwoHum").text("Humidity: "+ data.list[12].main.humidity + "%")
        $("#dayTwoIcon").text(icon2)
        //Day Two Done--------------------------------------------------------------------
        if(data.list[20].weather[0].description === "clear sky"){
            icon3 = "☀️"
        }
        else if(data.list[20].weather[0].description === "scattered clouds" || data.list[20].weather[0].description === "few clouds" || data.list[20].weather[0].description === "overcast clouds"|| data.list[20].weather[0].description === "broken clouds"){
            icon3 = "☁️"
        }
        else if(data.list[20].weather[0].description === "moderate rain"||data.list[20].weather[0].description === "light rain"||data.list[20].weather[0].description === "heavy rain"){
            icon3 = "🌧️"
        }
        else if(data.list[20].weather[0].description === "fog"){
            icon3 = "🌫️"
        }
        else if(data.list[20].weather[0].description === "smoke"){
            icon3 = "🔥😶‍🌫️🚒"
        }
        else if(icon3 === undefined){
            icon3 = "🌡️"
        }
        $("#dayThreeHeader").text(data.list[20].dt_txt)
        $("#dayThreeTemp").text("Temperature: " + data.list[20].main.temp + "degrees F")
        $("#dayThreeWind").text("Wind: "+data.list[20].wind.speed+"mph")
        $("#dayThreeHum").text("Humidity: "+ data.list[20].main.humidity + "%")
        $("#dayThreeIcon").text(icon3)
        //Day Three Done-----------------------------------------------------------------
        if(data.list[28].weather[0].description === "clear sky"){
            icon4 = "☀️"
        }
        else if(data.list[28].weather[0].description === "scattered clouds" || data.list[28].weather[0].description === "few clouds" || data.list[28].weather[0].description === "overcast clouds"|| data.list[28].weather[0].description === "broken clouds"){
            icon4 = "☁️"
        }
        else if(data.list[28].weather[0].description === "moderate rain"||data.list[28].weather[0].description === "light rain"||data.list[28].weather[0].description === "heavy rain"){
            icon4 = "🌧️"
        }
        else if(data.list[28].weather[0].description === "fog"){
            icon4 = "🌫️"
        }
        else if(data.list[28].weather[0].description === "smoke"){
            icon4 = "🔥😶‍🌫️🚒"
        }
        else if(icon4 === undefined){
            icon4 = "🌡️"
        }
        $("#dayFourHeader").text(data.list[28].dt_txt)
        $("#dayFourTemp").text("Temperature: " + data.list[28].main.temp + "degrees F")
        $("#dayFourWind").text("Wind: "+data.list[28].wind.speed+"mph")
        $("#dayFourHum").text("Humidity: "+ data.list[28].main.humidity + "%")
        $("#dayFourIcon").text(icon4)
        //Day Four Done------------------------------------------------------------------
        if(data.list[36].weather[0].description === "clear sky"){
            icon5 = "☀️"
        }
        else if(data.list[36].weather[0].description === "scattered clouds" || data.list[36].weather[0].description === "few clouds" || data.list[36].weather[0].description === "overcast clouds"|| data.list[36].weather[0].description === "broken clouds"){
            icon5 = "☁️"
        }
        else if(data.list[36].weather[0].description === "moderate rain"||data.list[36].weather[0].description === "light rain"||data.list[36].weather[0].description === "heavy rain"){
            icon5 = "🌧️"
        }
        else if(data.list[36].weather[0].description === "fog"){
            icon5 = "🌫️"
        }
        else if(data.list[36].weather[0].description === "smoke"){
            icon5 = "🔥😶‍🌫️🚒"
        }
        else if(icon5 === undefined){
            icon5 = "🌡️"
        }
        $("#dayFiveHeader").text(data.list[36].dt_txt)
        $("#dayFiveTemp").text("Temperature: " + data.list[36].main.temp + "degrees F")
        $("#dayFiveWind").text("Wind: "+data.list[36].wind.speed+"mph")
        $("#dayFiveHum").text("Humidity: "+ data.list[36].main.humidity + "%")
        $("#dayFiveIcon").text(icon5)
    })

}

function displayCity(){
    previousInput = JSON.parse(localStorage.getItem("CityNameStringify"))
    var currentDayUrlTest = "https://api.openweathermap.org/data/2.5/weather?q=".concat("",previousInput);
    currentDayUrl = currentDayUrlTest.concat("","&units=imperial&appid=3ae49d92b8920f6ff808795cb04eb012")
    var otherDaysUrlTest = "https://api.openweathermap.org/data/2.5/forecast?q=".concat("",previousInput);
    otherDaysUrl = otherDaysUrlTest.concat("","&units=imperial&appid=3ae49d92b8920f6ff808795cb04eb012")
    getCurrentAPI(currentDayUrl);
    getDaysAPI(otherDaysUrl)
}

searchButton.addEventListener("click",function(event){
    event.preventDefault()
    var cityName = textBoxInfo.value;
    var newCityButton = document.createElement('button');
    newCityButton.textContent = cityName;
    extraButtons.append(newCityButton);
        newCityButton.addEventListener("click", function(event){
        event.preventDefault()
        localStorage.setItem("CityNameStringify", JSON.stringify(cityName));
        displayCity();
    })
    localStorage.setItem("CityNameStringify", JSON.stringify(cityName));
    displayCity();
    
})



