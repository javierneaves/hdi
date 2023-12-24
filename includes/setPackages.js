import { loadingEnd } from "./loading.js";

export default async function setPackages(packageResponse, formData) {
  
  try {
    console.log(formData);
    console.log(packageResponse.soap_Body.getpackagesResponse.getpackagesResult.InformacionPaquetes.ListaPaquetes.PaqueteCoberturas);
    loadingEnd()
  } catch (error) {
    console.log('Ocurrio un error, intentalo nuevamente');
    loadingEnd()
  }
  
}