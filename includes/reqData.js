import { createPoliza } from "./formPoliza.js"  
  
  // Objeto con datosVehiculo
  var datosVehiculo = {
    "Numero de Motor": '',
    "Placas": '',
    "Color": '',
    "Numero de Serie": '',
      
};

// Función para crear inputs
function crearInputs(nombre, valor, formData) {
    
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

export function formDataRequired(formData){
    console.log(formData);
    document.getElementById('vehicleButton').innerHTML = "";
    // Escribe el saludo para esta pagina
    let formDescription = document.getElementById("formDescription");
    formDescription.innerHTML =
    'Gracias <span class="text-primary">' +
    formData.nombre +
    "</span>. <br /><br /> Nos puedes dar un poco más de información para crear la cotización?";
    
    // Suponiendo que tienes un elemento en el DOM con el id "miFormulario"
    var formulario = document.getElementById("contactForm");
    formulario.innerHTML = "";
    
    // Iterar sobre las propiedades del objeto y llamar a la función crearInputs
    for (var propiedad in datosVehiculo) {
        crearInputs(propiedad, datosVehiculo[propiedad], formData);
    }
    
    // crea el boton siguiente 
    var mainDiv = document.getElementById('contactForm');  
    var botonSiguiente = document.createElement("button");
    botonSiguiente.setAttribute("type", "button");
    botonSiguiente.className = "btn btn-primary btn-lg m-2 disable";
    botonSiguiente.textContent = "Siguiente";
    mainDiv.appendChild(botonSiguiente);

    // Creamos la alerta
    var alert = document.createElement("div");
    alert.setAttribute("role", "alert");
    alert.innerHTML = ""

    // Agregar el evento onclick
    botonSiguiente.onclick = function() {
        console.log('Botón Siguiente clicado');
        // Puedes agregar más lógica aquí si es necesario
        let motor = document.getElementById('Numero de Motor');
        let placas = document.getElementById('Placas');
        let color = document.getElementById('Color');
        let serie = document.getElementById('Numero de Serie');
        console.log(motor.value);
        console.log(placas.value);
        console.log(color.value);
        console.log(serie.value);
        if(!motor.value || !placas.value || !color.value || !serie.value){
            console.log('no hay datos completos');
            alert.textContent = "Todos los campos son necesarios para crear una cotización";
            alert.className = "alert alert-danger  mt-2";
            return
        } else {
            formData = {  
                ...formData,
                motor: motor.value,
                placas: placas.value,
                color: color.value,
                serie: serie.value,
            }
            console.log(formData);
            createPoliza(formData)
        }
    };
}

