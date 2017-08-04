function enviarPeticion(){

	var xhttp = new XMLHttpRequest();
    xhttp.open("response", "http://api.openweathermap.org/data/2.5/forecast?q=Santiago&appid=d2bc8baa667084ecf883f6c22d4e15be", false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
    var response = JSON.parse(xhttp.responseText);
    console.log(response.cod);
    //http://api.openweathermap.org/data/2.5/weather?q=London&appid=d2bc8baa667084ecf883f6c22d4e15be
}