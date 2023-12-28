import {showMailForm} from './formMail.js'
import { formAuth } from './formAccount.js';
import { formAuto } from './formAuto.js'
import { loadingEnd, loadingStart } from './loading.js';
import { showMessages } from './showMessages.js';
import { formPackages } from './formPackages.js';
import getPackages from './getPackages.js';

formName()

export function formName(active, formData) {
    let formDescription = document.getElementById('formDescription');
    formDescription.innerHTML = 'Para comenzar compártenos tus datos, estos son necesarios para poder generar tu cotización y contratación si así lo deseas.'
    let testData = !formData ? 'no data' : formData
    console.log(testData);
    var form = document.getElementById("contactForm");
    form.innerHTML = ""
    // Crear div
    var divNombre = document.createElement("div");
    divNombre.classList.add("mb-3");

    // Crear label para Nombre
    var labelNombre = document.createElement("label");
    labelNombre.setAttribute("for", "nombre");
    labelNombre.classList.add("form-label", "fw-bold", "text-body-secondary");
    labelNombre.innerText = "Nombre";

    // Crear input para Nombre
    var inputNombre = document.createElement("input");
    inputNombre.setAttribute("type", "text");
    inputNombre.classList.add("form-control", "border-secondary");
    inputNombre.setAttribute("id", "nombre");
    inputNombre.setAttribute("placeholder", "Escribe tu nombre");
    inputNombre.value = !formData ? '' : formData.nombre
    inputNombre.name = 'nombre'
    // Agregar label e input al div
    divNombre.appendChild(labelNombre);
    divNombre.appendChild(inputNombre);

    // Repetir el mismo proceso para el Codigo Postal

    // Crear div
    var divCodigoPostal = document.createElement("div");
    divCodigoPostal.classList.add("mb-3");

    // Crear label para Codigo Postal
    var labelCodigoPostal = document.createElement("label");
    labelCodigoPostal.setAttribute("for", "codigoPostal");
    labelCodigoPostal.classList.add("form-label", "fw-bold", "text-body-secondary");
    labelCodigoPostal.innerText = "Codigo Postal";

    // Crear input para Codigo Postal
    var inputCodigoPostal = document.createElement("input");
    inputCodigoPostal.setAttribute("type", "number");
    inputCodigoPostal.classList.add("form-control", "border-secondary");
    inputCodigoPostal.setAttribute("id", "codigoPostal");
    inputCodigoPostal.setAttribute("placeholder", "Escribe tu Codigo Postal");
    inputCodigoPostal.value = !formData ? '' : formData.cp
    inputCodigoPostal.name = 'cp'
    // Agregar label e input al div
    divCodigoPostal.appendChild(labelCodigoPostal);
    divCodigoPostal.appendChild(inputCodigoPostal);

    // Crear div para el botón
    var divBoton = document.createElement("div");
    divBoton.classList.add("container", "p-5", "text-end");

    // Crear botón
    var boton = document.createElement("button");
    boton.setAttribute("type", "submit");
    boton.classList.add("btn", "btn-primary", "btn-lg");
    boton.setAttribute("id", "btnFormName");
    boton.innerText = "Siguiente";
    boton.name = 'save_task'
    boton.disabled =  !active ?  true : false;

    // Agregar botón al div
    divBoton.appendChild(boton);

    // Agregar los elementos creados al body del documento
    form.appendChild(divNombre);
    form.appendChild(divCodigoPostal);
    form.appendChild(divBoton);
    
   // Validacion de formulario

    var alert = document.createElement("div");
    // alert.className = "alert alert-danger";
    alert.setAttribute("role", "alert");
    divCodigoPostal.appendChild(alert)
    var regex = /^\d{5}$/;

    inputCodigoPostal.addEventListener('input', function (e) {
        
        // Verifica si el código postal cumple con la expresión regular
        if (regex.test(e.target.value)) {
            // Registro valido
            boton.disabled = false;
            alert.textContent = "Codigo postal valido!";
            alert.className = "alert alert-success mt-2";
            inputCodigoPostal.addEventListener('blur', function (e) {
                alert.textContent = ''
                alert.className = ''
            });
            // Agregar temporizador para borrar la alerta después de 1 segundo
            setTimeout(function() {
                alert.textContent = '';
                alert.className = '';
            }, 500);
        } else if (!e.target.value){
            boton.disabled = true;
            alert.textContent = ''
            alert.className = ''
            inputCodigoPostal.addEventListener('blur', function (e) {
                alert.textContent = "";
                alert.className = "";
            });
        } else {
            boton.disabled = true;
            alert.textContent = "Ingrese 5 digitos en Codigo Postal!";
            alert.className = "alert alert-danger  mt-2";
            inputCodigoPostal.addEventListener('blur', function (e) {
                alert.textContent = "Ingrese 5 digitos en Codigo Postal!";
                alert.className = "alert alert-danger  mt-2";
            });
        }
    
    });

    inputNombre.addEventListener('input', function (e) {
        let nombreValidation = e.target.value
        if(!nombreValidation){
            inputNombre.className = "form-control border-danger"
        } else {
            inputNombre.className = "form-control border-secondary"
        }
    });

    // envio de formulario 

    boton.addEventListener('click', function (e) {
        e.preventDefault()
        if (!inputNombre.value) {
            inputNombre.className = "form-control border-danger"
            return
        } else {
            loadingStart()

            formData = {  
                ...formData,
                nombre: inputNombre.value,
                cp: inputCodigoPostal.value,
            }
            
            validateZip(formData)

        }
    });
    
    

    
  }
  

function validateZip(formData){
  let cp = formData.cp
  console.log(cp);

  fetch('./phpRequest/getinfobyPostalCode.php?cp=' + cp)

  .then(async response => {
      console.log(response.headers.get('content-type'));
      let infoUbicaciones
      try {
          const jsonData = await response.json();
          // Accede a la propiedad 'ListaInfoUbicacionesPorCodigo' y luego al array 'InfoUbicacionPorCodigo'
          infoUbicaciones = jsonData.soap_Body.getinfoByPostalCodeResponse.getinfoByPostalCodeResult.ListaInfoUbicacionesPorCodigo.InfoUbicacionPorCodigo
          
          // Guarda todas las direcciones obtenidas en formData
          formData = {  
            ...formData,
            zipValidation: infoUbicaciones
          }
          console.log(formData);
          // Resto de la configuración de la solicitud...
          formAuth("", formData);
          loadingEnd();
      } catch (error) {
          if (response.headers.get('content-type') && response.headers.get('content-type').includes('json')) {
              handleErrors()
              console.error('Error al parsear JSON:', error);
          } else {
              console.log('La respuesta no es JSON válido. Contenido:', await response.text());
          }
      }
      
      
  } ) 
  .catch(error => console.error('Error al obtener los datos:', error));
}

function handleErrors(){
  showMessages('El codigo postal no es valido', 'warning')  
  loadingEnd();
}
getPackages()
// formPackages() usalo para hacer pruebas al obtener el paquete
