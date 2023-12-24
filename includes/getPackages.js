import { loadingEnd, loadingStart } from "./loading.js";

export default function getPackages(formData) {
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
          console.log(xhr.responseText);
          loadingEnd()
      }
  };

  // Enviar la solicitud con el objeto JSON como datos
  xhr.send(objetoJSON);
}

/* / Ejemplo de uso con el objeto proporcionado
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
          "clave": "2089021",
          "idTipoVehiculoClave": "3829",
          "modeloLlave": "2015",
      }
  ],
  "idUso" : "4581"
}
2089021
3829
2015
4581
// enviarObjetoAPHP(formData);

// id de usos diferentes 4596, 4581(automoviles residenciales), 4584 (pick up comercial)
*/