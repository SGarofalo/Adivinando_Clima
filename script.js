//selecciono el boton submitButton: cuando el usuario haga clic en el botón, se ejecutará la función.
document.getElementById("submitButton").addEventListener("click", function () {
    let city = document.getElementById("cityInput").value; //ingreso la cdad:dentro de la funcion, se obtiene el valor ingresado en el campo de texto con el id "cityInput" y se guarda en la variable city
    let apiKey = "fdd533266e28101881f610f2b8f1ebe1"; //le asigno una de las claves de API proporcionadas a la variable apiKey
    let apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=" +
      apiKey; //construyo la URL de la API: concatenando la ciudad ingresada y la clave de API
  
    $.getJSON(apiUrl, function (data) {
      document.querySelector(".container").style.visibility = "visible";
      document.querySelector("#ciudad").textContent = data.name; //selecciono el elemento con el id "ciudad" y se asigna el nombre de la ciudad recibido en la rta de la API utilizando data.name
      document.querySelector("#temperatura").innerHTML = Math.round(data.main.temp - 273.15); //se asigna la temperatura actual en grados celsius, restando 273.15 a la temperatura en kelvin
      document.querySelector("#wicon").src =
        "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"; //selecciono el elemento con el id "wicon" y se asigna la URL de la imagen del icono del clima utilizando data.weather[0].icon
      document.querySelector("#descripcion").textContent =
        data.weather[0].description; //selecciono el elemento con el id "descripcion" y se asigna la descripcion del clima utilizando data.weather[0].description
    }).fail(function () {
      alert("Error: Ciudad no encontrada"); //si la soli AJAX falla, se muestra una alerta indicando que la cdad no se encontro
    });
  
    document.getElementById("cityInput").value = "";
  });
  