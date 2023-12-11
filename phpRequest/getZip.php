<?php
// Obtener datos del formulario
$nombre = isset($_POST['nombre']) ? $_POST['nombre'] : '';
$cp = isset($_POST['cp']) ? $_POST['cp'] : '';

// Crear el nuevo XML con el CodigoPostal
$responseXML = '<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:asmx="http://hdi.com.mx/asmx/">
   <soap:Header>
      <asmx:AuthenticateHeader>
         <asmx:siteID>1035270001</asmx:siteID>
         <asmx:sitePwd>Pa55word+1</asmx:sitePwd>
      </asmx:AuthenticateHeader>
   </soap:Header>
   <soap:Body>
      <asmx:getinfoByPostalCodeResponse>
         <asmx:result>Respuesta exitosa para el CodigoPostal: ' . $cp . '</asmx:result>
      </asmx:getinfoByPostalCodeResponse>
   </soap:Body>
</soap:Envelope>';

// Devolver la respuesta
header('Content-Type: text/xml; charset=utf-8');
echo $responseXML;
?>
