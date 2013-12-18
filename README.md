Integratieproject
=================

1  Introductie 
---------------

Voor dit project hadden we de keuze om ofwel een weer-applicatie te maken of om statistieken op te halen uit Google Analytics en daar een persoonlijke touch aan te geven. Wij, Jonas Vergison en Felice Vuylsteke, hebben gekozen om een weer-applicatie te maken. 
De applicatie is voorzien van een voorgeprogrammeerde stijlverandering afhankelijk van de seizoenen. De gebruiker kan zowel het weer van vandaag als morgen bekijken met behulp van tabbladen. Met het derde tabblad kan hij de plaatsbepaling (meer bepaald de longitude en latitude) vinden.

2  Implementering
------------------
### 2.1  Main page
Om de weer-applicatie in je webpagina te implementeren dien je de volledige section met als id "inhoud" te kopiëren naar de plaats waar de applicatie moet worden getoond. In het blok "head" dien je de bestanden die in de map "lib" staan toe te voegen voor een mooie uitvoering.
* `<script src="./lib/jquery.js"></script>`
* `<script src="./lib/jquery-ui.js"></script>`
* `<script src="./lib/weather.js"></script>`
* `<script src="./lib/seasonStyle.js"></script>`

Om ervoor te zorgen dat er een mooie opmaak ontstaat, voeg je ook het stylesheet-bestand toe in de blok "head".
* `<link rel="stylesheet" type="text/css" href="StyleSheet.css">`




3  Code overzicht
------------------
### 3.1  Weather.html

De webpagina zelf, hierin worden de verschillende blok-elementen gedefinieerd en de verschillende scripts ingeladen.
``` javascript
<script>
    $(document).ready(function () {
        getPos();
	changeStyle(getSeason());
	$("#tabs").tabs();     
	    });    
 
</script>
```

Hier wordt, nadat het document geladen is, de geolocatie opgevraagd, de stijl wordt veranderd naar gelang het seizoen en de jquery-ui tabs worden geinitialiseerd.

```
<section id="inhoud" >
    <h1>Het weer</h1>
	<div id="tabs">
		<ul>
			<li><a href="#tabs-1">Vandaag</a></li>
			<li><a href="#tabs-2">Morgen</a></li>
			<li><a href="#tabs-3">Positie</a></li>
		</ul>
		</br>
      		</br>
		<div id="tabs-1">
			<section id="Output">
				<div id="Weather">
				</div>	
			</section>
		</div>
		<div id="tabs-2">
			<section id="Output">
				<div id="WeatherTomorrow">
				</div>
			</section>
		</div>
	
		<div id="tabs-3">
			<div id="GeoLocation">
			</div>

		</div>
    </div>
</section>
```
De verschillende tabs worden gedefinieerd volgens de jquery-ui syntax. De titels van de tabs zijn links binnen een lijst die verwijzen naar een id. De inhoud van iedere tab bevindt zich in een aparte div.
Alles bevindt zich binnen een section met als id inhoud (om makkelijk en veilig de opmaak te doen, zodat deze niet conflicteerd met uw website).

### 3.2  Weather.js


### 3.3  seasonStyle.js
In dit bestand regelen we de automatische verandering van stijl van de weer-applicatie.




