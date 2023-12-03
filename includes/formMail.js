import { formName } from "./formName.js";
import { formAuto } from "./formAuto.js";

export function showMailForm(active, formData) {
	console.log(formData);
  // Obtenemos los datos ya existentes de el objeto formData
  let mail = !formData.mail ? "" : formData.mail;
  let tel = !formData.tel ? "" : formData.tel;

  // Borramos los botones de los vehiculos de la siguiente pagina
  let buttonContainer = document.getElementById("vehicleButton");
  buttonContainer.innerHTML = "";

  let formDescription = document.getElementById("formDescription");
  formDescription.innerHTML =
    'Muchas gracias <span class="text-primary">' +
    formData.nombre +
    "</span>. <br /><br /> Compártenos tus datos de contacto, estos son necesarios para poder generar tu cotización y enviar la póliza a tu correo.";

  var formulario = document.getElementById("contactForm");
  formulario.innerHTML = "";

  // Crear el primer div
  var divEmail = document.createElement("div");
  divEmail.className = "mb-3";

  // Crear la etiqueta y el input para el correo electrónico
  var labelEmail = document.createElement("label");
  labelEmail.setAttribute("for", "email");
  labelEmail.className = "form-label fw-bold text-body-secondary";
  labelEmail.textContent = "Correo Electrónico";

  var inputEmail = document.createElement("input");
  inputEmail.setAttribute("type", "email");
  inputEmail.className = "form-control border-secondary";
  inputEmail.setAttribute("id", "email");
  inputEmail.setAttribute("placeholder", "Escribe tu correo electrónico");
  inputEmail.value = mail;

  // Agregar la etiqueta y el input al primer div
  divEmail.appendChild(labelEmail);
  divEmail.appendChild(inputEmail);

  // Crear el segundo div
  var divTel = document.createElement("div");
  divTel.className = "mb-3";

  // Crear la etiqueta y el input para el teléfono
  var labelTel = document.createElement("label");
  labelTel.setAttribute("for", "tel");
  labelTel.className = "form-label fw-bold text-body-secondary";
  labelTel.textContent = "Teléfono";

  var inputTel = document.createElement("input");
  inputTel.setAttribute("type", "number");
  inputTel.className = "form-control border-secondary";
  inputTel.setAttribute("id", "tel");
  inputTel.setAttribute("placeholder", "Escribe tu teléfono de contacto");
  inputTel.value = tel;

  // Agregar la etiqueta y el input al segundo div
  divTel.appendChild(labelTel);
  divTel.appendChild(inputTel);

  // Crear el tercer div para los botones
  var divButtons = document.createElement("div");
  divButtons.className = "container p-5 justify-content-between text-end";

  // Crear los botones Anterior y Siguiente
  var botonAnterior = document.createElement("button");
  botonAnterior.setAttribute("type", "button");
  botonAnterior.className = "btn btn-secondary btn-lg m-2";
  botonAnterior.textContent = "Anterior";

  var botonSiguiente = document.createElement("button");
  botonSiguiente.setAttribute("type", "button");
  botonSiguiente.className = "btn btn-primary btn-lg m-2 disable";
  botonSiguiente.textContent = "Siguiente";
	botonSiguiente.disabled =  !active ?  true : false;

  // Agregar los botones al tercer div
  divButtons.appendChild(botonAnterior);
  divButtons.appendChild(botonSiguiente);

  // Agregar el primer div al formulario
  formulario.appendChild(divEmail);
  // Agregar el segundo div al formulario
  formulario.appendChild(divTel);
  // Agregar el tercer div al formulario
  formulario.appendChild(divButtons);

  // validacion y eventos

  var alert = document.createElement("div");
  // alert.className = "alert alert-danger";
  alert.setAttribute("role", "alert");
	divEmail.appendChild(alert)
	divTel.appendChild(alert)
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  inputEmail.addEventListener("input", function (e) {
    // Validar el formato de correo electrónico
    if (emailRegex.test(e.target.value)) {
      console.log(e.target.value);
      botonSiguiente.disabled = false;
      alert.textContent = "";
      alert.className = "";
			inputEmail.addEventListener("blur", function (e) {
        alert.textContent = "";
        alert.className = "";
      });
    } else if (!e.target.value) {
      botonSiguiente.disabled = true;
      alert.textContent = "";
      alert.className = "";
      inputEmail.addEventListener("blur", function (e) {
        alert.textContent = "";
        alert.className = "";
      });
    } else {
      botonSiguiente.disabled = true;
      alert.textContent = "Ingrese un correo válido!";
      alert.className = "alert alert-danger mt-2";
      inputEmail.addEventListener("blur", function (e) {
        alert.textContent = "Ingrese un correo válido!";
        alert.className = "alert alert-danger mt-2";
      });
    }
  });

  inputTel.addEventListener("input", function (e) {
    if (e.target.value.length < 10) {
      alert.textContent = "Ingrese un telefono de 10 dígitos!";
      alert.className = "alert alert-danger mt-2";
    } else {
			
			alert.textContent = "";
      alert.className = "";
    }
  });

  botonAnterior.addEventListener("click", function (e) {
    // guarda los valores de los formularios en el objeto
    formData = {
      ...formData,
      mail: inputEmail.value,
      tel: inputTel.value,
    };
    formName("active", formData);
  });

  botonSiguiente.addEventListener("click", function (e) {
    // guarda los valores de los formularios en el objeto
    formData = {
      ...formData,
      mail: inputEmail.value,
      tel: inputTel.value,
    };
    formAuto(formData);
  });
}
