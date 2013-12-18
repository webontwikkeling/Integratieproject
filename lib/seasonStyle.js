//returnt het seizoen adhv de huidige maand
function getSeason()
{
	var currentTime = new Date()
    month = currentTime.getMonth() + 1;
    season = '';
    switch(month) {
        case 12:
        case 1:
        case 2:
            season = 'winter';
        break;
        case 3:
        case 4:
        case 5:
            season = 'spring';
        break;
        case 6:
        case 7:
        case 8:
            season = 'summer';
        break;
        case 9:
        case 10: 
        case 11:
            season = 'fall';
        break;
    }
    return season;
}

//verander de stijl aan de hand van het seizoen
function changeStyle(style)
{
	switch(style)
	{
	case 'winter':
	        $("#inhoud").css("background-color", "#E0ECF8");
	        $("h1").css("color", "#0B3861");
			$("#Weather").css("background-color","#A4C0CA");
			$("#WeatherTomorrow").css("background-color","#A4C0CA");
			$("#GeoLocation").css("background-color","#A4C0CA");
			$("#inhoud").css("box-shadow","0px 0px 15px rgba(59, 50, 50, 1)");
			$("#weather").css("box-shadow","8px 6px 15px rgba(59, 50, 50, 0.63)");
			$("#GeoLocation").css("box-shadow","8px 6px 15px rgba(59, 50, 50, 0.63)");
		break;
	case 'summer':
			$("#inhoud").css("background-color", "#FFF39B");
			$("h1").css("color","#FF3B0E");
			$("#Weather").css("background-color","#FFD255");
			$("#WeatherTomorrow").css("background-color","#FFD255");
			$("#GeoLocation").css("background-color","#FFD255");
			$("#inhoud").css("box-shadow","0px 0px 15px rgba(59, 50, 50, 1)");
			$("#weather").css("box-shadow","8px 6px 15px rgba(59, 50, 50, 0.63)");
			$("#GeoLocation").css("box-shadow","8px 6px 15px rgba(59, 50, 50, 0.63)");
		break;
	case 'spring':
			$("#inhoud").css("background-color", "#CEFF9B");
			$("h1").css("color","#418300");
			$("#Weather").css("background-color","#9AF243");
			$("#WeatherTomorrow").css("background-color","#9AF243");
			$("#GeoLocation").css("background-color","#9AF243");
			$("#inhoud").css("box-shadow","0px 0px 15px rgba(59, 50, 50, 1)");
			$("#weather").css("box-shadow","8px 6px 15px rgba(59, 50, 50, 0.63)");
			$("#GeoLocation").css("box-shadow","8px 6px 15px rgba(59, 50, 50, 0.63)");
		break;
	case 'fall':
			$("#inhoud").css("background-color", "#E6D3A5");
			$("h1").css("color","#564316");
			$("#Weather").css("background-color","#BB953E");
			$("#WeatherTomorrow").css("background-color","#BB953E");
			$("#GeoLocation").css("background-color","#BB953E");
			$("#inhoud").css("box-shadow","0px 0px 15px rgba(59, 50, 50, 1)");
			$("#weather").css("box-shadow","8px 6px 15px rgba(59, 50, 50, 0.63)");
			$("#GeoLocation").css("box-shadow","8px 6px 15px rgba(59, 50, 50, 0.63)");
		break;
	}
}