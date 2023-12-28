import { formPackages } from "./formPackages.js";
import { loadingEnd } from "./loading.js";

export default async function setPackages(packageResponse, formData) {
  
  try {
    let paqueteCoberturas = packageResponse.soap_Body.getpackagesResponse.getpackagesResult.InformacionPaquetes.ListaPaquetes.PaqueteCoberturas
    formPackages(formData, paqueteCoberturas)
    console.log(paqueteCoberturas);
    loadingEnd()
  } catch (error) {
    console.log('Ocurrio un error, intentalo nuevamente');
    loadingEnd()
  }
  
}