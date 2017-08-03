var response={"list": [
    {
        "dt": 1485799200,
        "main": {
        "temp": 261.45,
        "temp_min": 259.086,
        "temp_max": 261.45,
        "pressure": 1023.48,
        "sea_level": 1045.39,
        "grnd_level": 1023.48,
        "humidity": 79,
        "temp_kf": 2.37
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 4.77,
        "deg": 232.505
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2017-01-30 18:00:00"
    },
    {
      "dt": 1485810000,
      "main": {
        "temp": 261.41,
        "temp_min": 259.638,
        "temp_max": 261.41,
        "pressure": 1022.41,
        "sea_level": 1044.35,
        "grnd_level": 1022.41,
        "humidity": 76,
        "temp_kf": 1.78
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 32
      },
      "wind": {
        "speed": 4.76,
        "deg": 240.503
      },
      "snow": {
        "3h": 0.011
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2017-01-30 21:00:00"
    },
    {
      "dt": 1485820800,
      "main": {
        "temp": 261.76,
        "temp_min": 260.571,
        "temp_max": 261.76,
        "pressure": 1021.34,
        "sea_level": 1043.21,
        "grnd_level": 1021.34,
        "humidity": 84,
        "temp_kf": 1.18
      },
      "weather": [
        {
          "id": 600,
          "main": "Snow",
          "description": "light snow",
          "icon": "13n"
        }
      ],
      "clouds": {
        "all": 68
      },
      "wind": {
        "speed": 4.71,
        "deg": 243
      },
      "snow": {
        "3h": 0.058
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2017-01-31 00:00:00"
    }]}
   

  function prueba() {
    obj = JSON.parse(response);
    document.getElementById("dt").innerHTML = obj.list[0].dt;

  }