
var today;
var tomorrow;
var NORTHEAST = 45;
var SOUTHEAST = 135;
var SOUTHWEST = 225;
var NORTHWEST = 315;



//Haal latitude en longtitude op
function getPos() {
    if (navigator.geolocation) { //if supported
        navigator.geolocation.getCurrentPosition(getSucces, getFailed);
    }
    else {
        logError("An error caused the geolocation to fail. Make sure you are connected to the internet.");
    }
}
//als de positie met succes opgehaald werd, haal het weer (vandaag en morgen) voor deze positie op
function getSucces(position) {
    
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    
    var wString = "http://api.openweathermap.org/data/2.5/forecast/daily?lat=" + lat + "&lon=" + lon + "&cnt=2&lang=nl";
    //AJAXcall
    $.ajax({
        url: wString,
        dataType: 'jsonp',
        success: function (json) {
            today = generateWeather(json,0);
			tomorrow = generateWeather(json,1);
			
			processInformation(lat, lon, today, tomorrow);
			
        }
    });

}

//vul een weer object in aan de hand van het opgehaalde json object, op de dag die je kiest (0 is vandaag)
function generateWeather(json, day)
{
	weather = new Object;
	weather.Temp = Math.round( json.list[day].temp.day - 273, 15);
            weather.Name = json.city.name;
            weather.Humidity = json.list[day].humidity;
            weather.Windspeed = json.list[day].speed;
            weather.WindDegrees =  json.list[day].deg;
            weather.Cloudpercent = json.list[day].clouds;
            weather.Description = json.list[day].weather[0].description;
            weather.Icon = json.list[day].weather[0].icon;
			return weather;
}

//indien de positie niet kan opgehaald worden, wordt de error gelogd
function getFailed(error) {
    logError(error.message);
}

//loggen van errorberichten
function logError(msg) {
    console.log("ERROR: "+msg)
}

//data in bijhorende divs stoppen
function processInformation(lat,lon,today, tomorrow) {
    $("#GeoLocation").append("<p>Latitude: " + lat
                                + "</br>Longitude: " + lon
                                + "</br>Gekozen dichtste weerlocatie: " + today.Name
                                + "</p>");

    
	processWeatherInformation(today, $("#Weather"));
	processWeatherInformation(tomorrow, $("#WeatherTomorrow"));
	
	
}

//het opgehaalde weer in een gekozen jquery object stoppen
function processWeatherInformation(weather, object)
{
		weatherIconString = "http://openweathermap.org/img/w/" + weather.Icon;
    object.append("<p>Weer voor: " + weather.Name + "</p>");
    object.append("<img src=" + weatherIconString + " height=50 width=50>");
	windrichting = "West";
	if(weather.WindDegrees <= NORTHEAST || weather.WindDegrees >= NORTHWEST)
		windrichting = "Noord";
	else if(weather.WindDegrees >= NORTHEAST && weather.WindDegrees <= SOUTHEAST)
		windrichting = "Oost";
	else if(weather.WindDegrees >= SOUTHEAST && weather.WindDegrees <= SOUTHWEST)
		windrichting = "Zuid";
		
    object.append("<p>Temperatuur: " + weather.Temp + "°C"
                                + "</br>Bewolking: " + weather.Cloudpercent + "% (" + weather.Description + ")"
                                + "</br>Vochtigheid: " + weather.Humidity + "%"
                                + "</br>Windsnelheid: " + (Math.round((weather.Windspeed * 1.60934) * 100) / 100) + " km/h"
                                + "</br>Windrichting (in graden): " + weather.WindDegrees + " °"
								+ "</br>Windrichting (windstreek): " + windrichting + " "
                                + "</p>");
}



