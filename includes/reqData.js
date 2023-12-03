  // Objeto con datosVehiculo
  var datosVehiculo = {
    "Numero de Motor": '',
    "Placas": '',
    "Color": '',
    "Numero de Serie": '',
      
};

// Función para crear inputs
function crearInputs(nombre, valor) {
    var mainDiv = document.getElementById('contactForm');  
    var divElement = document.createElement("div");
    divElement.classList.add("mb-3");

    var labelElement = document.createElement("label");
    labelElement.setAttribute("for", nombre);
    labelElement.classList.add("form-label", "fw-bold", "text-body-secondary");
    labelElement.textContent = nombre;

    var inputElement = document.createElement("input");
    inputElement.setAttribute("type", "text");
    inputElement.classList.add("form-control", "border-secondary");
    inputElement.setAttribute("id", nombre);
    inputElement.setAttribute("placeholder", "Escribe tu " + nombre.toLowerCase());
    inputElement.setAttribute("name", nombre);
    inputElement.value = valor;

    divElement.appendChild(labelElement);
    divElement.appendChild(inputElement);

    mainDiv.appendChild(divElement);
}

// Iterar sobre las propiedades del objeto y llamar a la función crearInputs
for (var propiedad in datosVehiculo) {
    crearInputs(propiedad, datosVehiculo[propiedad]);
}
