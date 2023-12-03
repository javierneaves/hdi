import { crearFormularioPagos } from "./formPayment.js"

export function createPoliza(formData) {
  // Escribe el saludo para esta pagina
  let formDescription = document.getElementById("formDescription");
  formDescription.innerHTML =
  'Gracias <span class="text-primary">' +
  formData.nombre +
  "</span>. <br /><br /> Estos son los datos ingresados, te enviaremos la poliza a tu correo una vez realizado el pago";
  
  
  // Obtener el div donde se mostrarán los datos
  var datosDiv = document.getElementById('contactForm');
  datosDiv.innerHTML = ""

  // Crear una lista desordenada (ul)
  var lista = document.createElement('ul');

  // Iterar sobre las propiedades del objeto y agregar cada propiedad y valor como un elemento de lista (li)
  for (var propiedad in formData) {
    var li = document.createElement('li');
    li.textContent = propiedad + ': ' + formData[propiedad];
    lista.appendChild(li);
  }

  // Agregar la lista al div
  datosDiv.appendChild(lista);
  // crea el boton siguiente 
  var botonSiguiente = document.createElement("button");
  botonSiguiente.setAttribute("type", "button");
  botonSiguiente.className = "btn btn-primary btn-lg m-2 disable";
  botonSiguiente.textContent = "Ver Opciones de pago";
  datosDiv.appendChild(botonSiguiente);

  botonSiguiente.addEventListener('click', function (e) {
    crearFormularioPagos(formData)
  });
}