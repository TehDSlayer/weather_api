window.onload = function (){
	var formElement = document.getElementById('form');
	var inputElement = document.getElementById('input');

	formElement.onsubmit = function(event){
		event.preventDefault();
		var city = inputElement.value;
		var zipCode = inputElement.value;
		getWeather(city);
	};
};

function printWeather(event){
	var response = JSON.parse(event.target.responseText);
	document.write(response.main.temp);
}

function getWeather(city) {
  var url = 'http://api.openweathermap.org/data/2.5/weather?' + 
  'appid=c2f2d170f6f6fc336058e9851edb828c'+
  '&q=' + city +
  '&units=imperial';

  var xhrObject = new XMLHttpRequest();
  xhrObject.open('GET', url, true);
  xhrObject.onload = printWeather;
  xhrObject.send();
