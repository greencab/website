function loadDate() {
  var currentDate = new Date();
  var dateString = currentDate.toString()
                     .split(" ")
                     .splice(0, 4) // making the string contain only the first four words
                     .join(" ");

  $("#date").text(dateString);
}
function loadWeather() {
  var weather = $("#weather");
  var url = "https://api.forecast.io/forecast/";
  var apiKey = "90aff0b9c618d101d31b8d58d61304b2";

  function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?units=si&callback=?", function(data) {
      weather.text("Based on your current location, it is " + data.currently.temperature + "° C right now");
    });
  }

  function error() {
    alert("Sorry, can't find your location :(");
  }

  navigator.geolocation.getCurrentPosition(success, error);

  weather.text("Be prepared to see how cold it is....");
}
function toCelsius(f) {
    return (5/9) * (data.currently.temperature-32);
}
loadDate();
loadWeather();
loadNews();
