/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */
 // Displays the weather for the hard coeded location, no location sensing functionality yet
 
var UI = require('ui');
var ajax = require('ajax');
 
var card = new UI.Card({
  title:'Weather',
  subtitle: 'Fetching..'
});
 
card.show();
var cityName = 'Albuquerque';
var myAPIKey = '7b6d92130011ee8d07234d5abe8be9b2';
var URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + myAPIKey;
 
 
ajax(
  {
    url: URL,
    type: 'json'
  },
  function(data) {
    var location = data.name;
    var temperature = Math.round(data.main.temp - 273.15) + " °C";
    var description = data.weather[0].description;
   
    card.subtitle(location + ", " + temperature);
    card.body(description);
  },
  function(error) {
    console.log('failed to fetch weather' + error);
  });