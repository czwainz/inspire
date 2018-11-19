import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()

function _drawWeather(wData) {
	let kTemp = wData.main.temp;
	let fTemp = Math.ceil((kTemp * (9 / 5)) - 459.67);
	let template = `
	<div class="d-flex align-items-start">
		<h2 style="text-shadow: 0px 0px 3px whitesmoke;"><strong>${fTemp}°</strong></h2>
	</div>
	`
	document.getElementById("weather").innerHTML = template
}

export default class WeatherController {

	constructor() {
		//this will fire off get weather right away
		this.getWeather()
	}
	getWeather() {
		weatherService.getWeather(_drawWeather);
	}
}




// function _drawIcon() {
// 	let template = `
// 	<div>
// 		<h4>${weatherService.myIcon}</h4>
// 	</div>
// 	`
// }