<?php 
phpinfo();
$siteID='1035270001';
$sitePw='Pa55word+1';

header('Content-Type: application/json'); 
      

    $location ='https://enterpriseservices.implementation.hdi.com.mx/B2B/Partners/WCF/Autos/PublicServicesAutos.asmx';

    $request = "<soap12:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap12=\"http://www.w3.org/2003/05/soap-envelope\">
    <soap12:Header>
      <AuthenticateHeader xmlns=\"http://hdi.com.mx/asmx/\">
    <siteID>".$siteID."</siteID>
    <sitePwd>".$sitePw."</sitePwd>
    </AuthenticateHeader>
  </soap12:Header>
  <soap12:Body>
    <GetVehicleTypes xmlns=\"http://hdi.com.mx/asmx/\">
      <usuario>
        <usuario>".$siteID."</usuario>
      </usuario>
    </GetVehicleTypes>
  </soap12:Body>
</soap12:Envelope>";


$header = [
  'Method: POST',
  'Connection: keep-alive',
  'User-Agent: PHP-SOAP-CURL',
  'Content-Type: text/xml; charset=utf-8',
  'Transfer-Encoding: chunked',
  'Accept-Encoding: identity'

];

 $ch = curl_init($location);
 curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
 curl_setopt($ch, CURLOPT_HTTPHEADER, $header);

 curl_setopt($ch, CURLOPT_POST, true);
 curl_setopt($ch, CURLOPT_POSTFIELDS, $request);
 //curl_setopt($ch, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);

 $response = curl_exec($ch);

 $soapxml=$response;
 curl_close($ch);

 $plainXML = mungXML( trim($soapxml) );
 $arrayResult = json_encode(SimpleXML_Load_String($plainXML, 'SimpleXMLElement', LIBXML_NOCDATA));

 $arrayResult2 = json_encode(json_decode($arrayResult),JSON_PRETTY_PRINT);
 print_r($arrayResult2);


 
 // FUNCTION TO MUNG THE XML SO WE DO NOT HAVE TO DEAL WITH NAMESPACE
 function mungXML($xml)
 {
     $obj = SimpleXML_Load_String($xml);
     if ($obj === FALSE) return $xml;
 
     // GET NAMESPACES, IF ANY
     $nss = $obj->getNamespaces(TRUE);
     if (empty($nss)) return $xml;
 
     // CHANGE ns: INTO ns_
     $nsm = array_keys($nss);
     foreach ($nsm as $key)
     {
         // A REGULAR EXPRESSION TO MUNG THE XML
         $rgx
         = '#'               // REGEX DELIMITER
         . '('               // GROUP PATTERN 1
         . '\<'              // LOCATE A LEFT WICKET
         . '/?'              // MAYBE FOLLOWED BY A SLASH
         . preg_quote($key)  // THE NAMESPACE
         . ')'               // END GROUP PATTERN
         . '('               // GROUP PATTERN 2
         . ':{1}'            // A COLON (EXACTLY ONE)
         . ')'               // END GROUP PATTERN
         . '#'               // REGEX DELIMITER
         ;
         // INSERT THE UNDERSCORE INTO THE TAG NAME
         $rep
         = '$1'          // BACKREFERENCE TO GROUP 1
         . '_'           // LITERAL UNDERSCORE IN PLACE OF GROUP 2
         ;
         // PERFORM THE REPLACEMENT
         $xml =  preg_replace($rgx, $rep, $xml);
     }
 
     return $xml;
 
 } // End :: mungXML()

?>

