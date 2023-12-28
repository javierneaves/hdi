import { loadingEnd, loadingStart } from "./loading.js";
import setPackages from "./setPackages.js";

export default function getPackages() { // <= agregar la propiedad formData despues de hacer pruebas 
    // Ejemplo de uso con el objeto proporcionado, comentar al terminar de hacer pruebas
    // Llamar a la funcion getPackages desde formName.js 
var formData = {
    "nombre": "dsfds",
    "cp": "64350",
    "zipValidation": [
        {
            "IdEstado": "19",
            "Estado": "NUEVO LEON",
            "IdCiudad": "07",
            "Ciudad": "MONTERREY",
            "IdMunicipio": "039",
            "Municipio": "MONTERREY",
            "Colonia": "VALLE INFONAVIT",
            "CodigoPostal": "64350"
        },
        {
            "IdEstado": "19",
            "Estado": "NUEVO LEON",
            "IdCiudad": "07",
            "Ciudad": "MONTERREY",
            "IdMunicipio": "039",
            "Municipio": "MONTERREY",
            "Colonia": "VALLE DE INFONAVIT II SECTOR",
            "CodigoPostal": "64350"
        },
        {
            "IdEstado": "19",
            "Estado": "NUEVO LEON",
            "IdCiudad": "07",
            "Ciudad": "MONTERREY",
            "IdMunicipio": "039",
            "Municipio": "MONTERREY",
            "Colonia": "VALLE DE INFONAVIT I SECTOR",
            "CodigoPostal": "64350"
        },
        {
            "IdEstado": "19",
            "Estado": "NUEVO LEON",
            "IdCiudad": "07",
            "Ciudad": "MONTERREY",
            "IdMunicipio": "039",
            "Municipio": "MONTERREY",
            "Colonia": "VALLE DE INFONAVIT III SECTOR",
            "CodigoPostal": "64350"
        },
        {
            "IdEstado": "19",
            "Estado": "NUEVO LEON",
            "IdCiudad": "07",
            "Ciudad": "MONTERREY",
            "IdMunicipio": "039",
            "Municipio": "MONTERREY",
            "Colonia": "VALLE DE INFONAVIT IV SECTOR",
            "CodigoPostal": "64350"
        },
        {
            "IdEstado": "19",
            "Estado": "NUEVO LEON",
            "IdCiudad": "07",
            "Ciudad": "MONTERREY",
            "IdMunicipio": "039",
            "Municipio": "MONTERREY",
            "Colonia": "VALLE DE INFONAVIT V SECTOR",
            "CodigoPostal": "64350"
        },
        {
            "IdEstado": "19",
            "Estado": "NUEVO LEON",
            "IdCiudad": "07",
            "Ciudad": "MONTERREY",
            "IdMunicipio": "039",
            "Municipio": "MONTERREY",
            "Colonia": "VALLE DEL INFONAVIT",
            "CodigoPostal": "64350"
        },
        {
            "IdEstado": "19",
            "Estado": "NUEVO LEON",
            "IdCiudad": "07",
            "Ciudad": "MONTERREY",
            "IdMunicipio": "039",
            "Municipio": "MONTERREY",
            "Colonia": "VALLE INFONAVIT",
            "CodigoPostal": "64350"
        },
        {
            "IdEstado": "19",
            "Estado": "NUEVO LEON",
            "IdCiudad": "07",
            "Ciudad": "MONTERREY",
            "IdMunicipio": "039",
            "Municipio": "MONTERREY",
            "Colonia": "VALLE DE INFONAVIT 6 SECTOR",
            "CodigoPostal": "64350"
        }
    ],
    "uid": "tM8vbjoSpQaJiGHrQ3QiHvS3qHp1",
    "correo": "javierneaves@gmail.com",
    "vehicleData": [
        {
            "clave": "2086672",
            "idTipoVehiculoClave": "4579",
            "modeloLlave": "2018",
        }
    ],
    "idUso" : "4581"
  }
  
  // Crear una instancia de XMLHttpRequest
  var xhr = new XMLHttpRequest();

  // Especificar el tipo de solicitud, la URL y si la solicitud debe ser asincrónica
  xhr.open("POST", "./phpRequest/getPackages.php", true);

  // Configurar el encabezado de la solicitud para enviar datos JSON
  xhr.setRequestHeader("Content-Type", "application/json");

  // Convertir el objeto a formato JSON
  var objetoJSON = JSON.stringify(formData);

  // Configurar la función de devolución de llamada para manejar la respuesta del servidor
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
          // Manejar la respuesta del servidor (si es necesario)
          // console.log(xhr.responseText);
          var objetoJSON = JSON.parse(xhr.responseText);
          setPackages(objetoJSON, formData)
      }
  };

  // Enviar la solicitud con el objeto JSON como datos
  xhr.send(objetoJSON);
  getPackagesAmplia()
}

function getPackagesAmplia() { // <= agregar la propiedad formData despues de hacer pruebas 
    // Ejemplo de uso con el objeto proporcionado, comentar al terminar de hacer pruebas
    // Llamar a la funcion getPackages desde formName.js 
var formData = {
    "nombre": "dsfds",
    "cp": "64350",
    "zipValidation": [
        {
            "IdEstado": "19",
            "Estado": "NUEVO LEON",
            "IdCiudad": "07",
            "Ciudad": "MONTERREY",
            "IdMunicipio": "039",
            "Municipio": "MONTERREY",
            "Colonia": "VALLE INFONAVIT",
            "CodigoPostal": "64350"
        },
        {
            "IdEstado": "19",
            "Estado": "NUEVO LEON",
            "IdCiudad": "07",
            "Ciudad": "MONTERREY",
            "IdMunicipio": "039",
            "Municipio": "MONTERREY",
            "Colonia": "VALLE DE INFONAVIT II SECTOR",
            "CodigoPostal": "64350"
        },
        {
            "IdEstado": "19",
            "Estado": "NUEVO LEON",
            "IdCiudad": "07",
            "Ciudad": "MONTERREY",
            "IdMunicipio": "039",
            "Municipio": "MONTERREY",
            "Colonia": "VALLE DE INFONAVIT I SECTOR",
            "CodigoPostal": "64350"
        },
        {
            "IdEstado": "19",
            "Estado": "NUEVO LEON",
            "IdCiudad": "07",
            "Ciudad": "MONTERREY",
            "IdMunicipio": "039",
            "Municipio": "MONTERREY",
            "Colonia": "VALLE DE INFONAVIT III SECTOR",
            "CodigoPostal": "64350"
        },
        {
            "IdEstado": "19",
            "Estado": "NUEVO LEON",
            "IdCiudad": "07",
            "Ciudad": "MONTERREY",
            "IdMunicipio": "039",
            "Municipio": "MONTERREY",
            "Colonia": "VALLE DE INFONAVIT IV SECTOR",
            "CodigoPostal": "64350"
        },
        {
            "IdEstado": "19",
            "Estado": "NUEVO LEON",
            "IdCiudad": "07",
            "Ciudad": "MONTERREY",
            "IdMunicipio": "039",
            "Municipio": "MONTERREY",
            "Colonia": "VALLE DE INFONAVIT V SECTOR",
            "CodigoPostal": "64350"
        },
        {
            "IdEstado": "19",
            "Estado": "NUEVO LEON",
            "IdCiudad": "07",
            "Ciudad": "MONTERREY",
            "IdMunicipio": "039",
            "Municipio": "MONTERREY",
            "Colonia": "VALLE DEL INFONAVIT",
            "CodigoPostal": "64350"
        },
        {
            "IdEstado": "19",
            "Estado": "NUEVO LEON",
            "IdCiudad": "07",
            "Ciudad": "MONTERREY",
            "IdMunicipio": "039",
            "Municipio": "MONTERREY",
            "Colonia": "VALLE INFONAVIT",
            "CodigoPostal": "64350"
        },
        {
            "IdEstado": "19",
            "Estado": "NUEVO LEON",
            "IdCiudad": "07",
            "Ciudad": "MONTERREY",
            "IdMunicipio": "039",
            "Municipio": "MONTERREY",
            "Colonia": "VALLE DE INFONAVIT 6 SECTOR",
            "CodigoPostal": "64350"
        }
    ],
    "uid": "tM8vbjoSpQaJiGHrQ3QiHvS3qHp1",
    "correo": "javierneaves@gmail.com",
    "vehicleData": [
        {
            "clave": "2086672",
            "idTipoVehiculoClave": "4579",
            "modeloLlave": "2018",
        }
    ],
    "idUso" : "4581"
  }
  
  // Crear una instancia de XMLHttpRequest
  var xhr = new XMLHttpRequest();

  // Especificar el tipo de solicitud, la URL y si la solicitud debe ser asincrónica
  xhr.open("POST", "./phpRequest/getPackagesAmplia.php", true);

  // Configurar el encabezado de la solicitud para enviar datos JSON
  xhr.setRequestHeader("Content-Type", "application/json");

  // Convertir el objeto a formato JSON
  var objetoJSON = JSON.stringify(formData);

  // Configurar la función de devolución de llamada para manejar la respuesta del servidor
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
          // Manejar la respuesta del servidor (si es necesario)
          // console.log(xhr.responseText);
          var objetoJSON = JSON.parse(xhr.responseText);
          setPackages(objetoJSON, formData)
      }
  };

  // Enviar la solicitud con el objeto JSON como datos
  xhr.send(objetoJSON);
  getPackagesBasica()
}

function getPackagesBasica() { // <= agregar la propiedad formData despues de hacer pruebas 
    // Ejemplo de uso con el objeto proporcionado, comentar al terminar de hacer pruebas
    // Llamar a la funcion getPackages desde formName.js 
var formData = {
    "nombre": "dsfds",
    "cp": "64350",
    "zipValidation": [
        {
            "IdEstado": "19",
            "Estado": "NUEVO LEON",
            "IdCiudad": "07",
            "Ciudad": "MONTERREY",
            "IdMunicipio": "039",
            "Municipio": "MONTERREY",
            "Colonia": "VALLE INFONAVIT",
            "CodigoPostal": "64350"
        },
        {
            "IdEstado": "19",
            "Estado": "NUEVO LEON",
            "IdCiudad": "07",
            "Ciudad": "MONTERREY",
            "IdMunicipio": "039",
            "Municipio": "MONTERREY",
            "Colonia": "VALLE DE INFONAVIT II SECTOR",
            "CodigoPostal": "64350"
        },
        {
            "IdEstado": "19",
            "Estado": "NUEVO LEON",
            "IdCiudad": "07",
            "Ciudad": "MONTERREY",
            "IdMunicipio": "039",
            "Municipio": "MONTERREY",
            "Colonia": "VALLE DE INFONAVIT I SECTOR",
            "CodigoPostal": "64350"
        },
        {
            "IdEstado": "19",
            "Estado": "NUEVO LEON",
            "IdCiudad": "07",
            "Ciudad": "MONTERREY",
            "IdMunicipio": "039",
            "Municipio": "MONTERREY",
            "Colonia": "VALLE DE INFONAVIT III SECTOR",
            "CodigoPostal": "64350"
        },
        {
            "IdEstado": "19",
            "Estado": "NUEVO LEON",
            "IdCiudad": "07",
            "Ciudad": "MONTERREY",
            "IdMunicipio": "039",
            "Municipio": "MONTERREY",
            "Colonia": "VALLE DE INFONAVIT IV SECTOR",
            "CodigoPostal": "64350"
        },
        {
            "IdEstado": "19",
            "Estado": "NUEVO LEON",
            "IdCiudad": "07",
            "Ciudad": "MONTERREY",
            "IdMunicipio": "039",
            "Municipio": "MONTERREY",
            "Colonia": "VALLE DE INFONAVIT V SECTOR",
            "CodigoPostal": "64350"
        },
        {
            "IdEstado": "19",
            "Estado": "NUEVO LEON",
            "IdCiudad": "07",
            "Ciudad": "MONTERREY",
            "IdMunicipio": "039",
            "Municipio": "MONTERREY",
            "Colonia": "VALLE DEL INFONAVIT",
            "CodigoPostal": "64350"
        },
        {
            "IdEstado": "19",
            "Estado": "NUEVO LEON",
            "IdCiudad": "07",
            "Ciudad": "MONTERREY",
            "IdMunicipio": "039",
            "Municipio": "MONTERREY",
            "Colonia": "VALLE INFONAVIT",
            "CodigoPostal": "64350"
        },
        {
            "IdEstado": "19",
            "Estado": "NUEVO LEON",
            "IdCiudad": "07",
            "Ciudad": "MONTERREY",
            "IdMunicipio": "039",
            "Municipio": "MONTERREY",
            "Colonia": "VALLE DE INFONAVIT 6 SECTOR",
            "CodigoPostal": "64350"
        }
    ],
    "uid": "tM8vbjoSpQaJiGHrQ3QiHvS3qHp1",
    "correo": "javierneaves@gmail.com",
    "vehicleData": [
        {
            "clave": "2086672",
            "idTipoVehiculoClave": "4579",
            "modeloLlave": "2018",
        }
    ],
    "idUso" : "4581"
  }
  
  // Crear una instancia de XMLHttpRequest
  var xhr = new XMLHttpRequest();

  // Especificar el tipo de solicitud, la URL y si la solicitud debe ser asincrónica
  xhr.open("POST", "./phpRequest/getPackagesBasica.php", true);

  // Configurar el encabezado de la solicitud para enviar datos JSON
  xhr.setRequestHeader("Content-Type", "application/json");

  // Convertir el objeto a formato JSON
  var objetoJSON = JSON.stringify(formData);

  // Configurar la función de devolución de llamada para manejar la respuesta del servidor
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
          // Manejar la respuesta del servidor (si es necesario)
          // console.log(xhr.responseText);
          var objetoJSON = JSON.parse(xhr.responseText);
          setPackages(objetoJSON, formData)
      }
  };

  // Enviar la solicitud con el objeto JSON como datos
  xhr.send(objetoJSON);
}



/*
2089021
3829
2015
4581
// enviarObjetoAPHP(formData);

// id de usos diferentes 4596, 4581(automoviles residenciales), 4584 (pick up comercial)
*/