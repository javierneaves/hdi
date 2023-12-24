<?php

header('Content-Type: application/json');
// Obtén los datos enviados desde JavaScript
$data = json_decode(file_get_contents('php://input'), true);

// Llama a tu función de procesamiento con el array asociativo $data
procesarDatos($data);

function procesarDatos($data)
{
  // Verificar si existe vehicleData y tiene al menos un elemento
  if (isset($data['vehicleData']) && count($data['vehicleData']) > 0) {
    // Obtener el array 0 de vehicleData
    $vehicleDataArray = $data['vehicleData'][0];
    $idUso = $data['idUso'];

    // Extraer variables del array 0 de vehicleData
    
    $clave = $vehicleDataArray['clave'];
    $idTipoVehiculoClave = $vehicleDataArray['idTipoVehiculoClave'];
    $modeloLlave = $vehicleDataArray['modeloLlave'];
    
    $json = file_get_contents('php://input');
    $datosArray = json_decode($json, true);

    //Variables de Conexion
    $siteID = '1035270001';
    $sitePw = 'Pa55word+1';

    $location = "https://enterpriseservices.implementation.hdi.com.mx/B2B/Partners/WCF/Autos/PublicServicesAutos.asmx";

    $request = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:asmx="http://hdi.com.mx/asmx/">
    <soapenv:Header>
       <asmx:AuthenticateHeader>
      
          <asmx:siteID>1035270001</asmx:siteID>
          <asmx:sitePwd>Pa55word+1</asmx:sitePwd>
       </asmx:AuthenticateHeader>
    </soapenv:Header>
    <soapenv:Body>
       <asmx:getpackages>
          <asmx:request>
             <asmx:idFormaPago>326</asmx:idFormaPago>
             <asmx:ciudad>0</asmx:ciudad>
             <asmx:estado>0</asmx:estado>
             <asmx:datosVehiculo>
                <asmx:idVehiculo>' . $clave . '</asmx:idVehiculo>
                <asmx:idMarca></asmx:idMarca>
                <asmx:idModelo>' . $modeloLlave . '</asmx:idModelo>
                <asmx:idTipo></asmx:idTipo>
                <asmx:idVersion></asmx:idVersion>
                <asmx:idTransmision></asmx:idTransmision>
                <asmx:idUso>' . $idUso . '</asmx:idUso>
                <asmx:tipoVehiculo>' . $idTipoVehiculoClave . '</asmx:tipoVehiculo>
                <asmx:numeroMotor>0</asmx:numeroMotor>
                <asmx:placas>0</asmx:placas>
                <asmx:color>0</asmx:color>
                <asmx:numeroSerie>0</asmx:numeroSerie>
                <asmx:pasajeros>0</asmx:pasajeros>
                <asmx:idZonaCirculacion>0</asmx:idZonaCirculacion>
                <asmx:idTonelaje>0</asmx:idTonelaje>
                <asmx:idServicio>4601</asmx:idServicio>
                <asmx:idRiesgoCarga>0</asmx:idRiesgoCarga>
                    <asmx:AjusteAdicional>
                   <asmx:IdConductoCobro>4</asmx:IdConductoCobro>
                </asmx:AjusteAdicional>
               <asmx:DatosAdicionales> 
                   <asmx:Renovaciones>0</asmx:Renovaciones>
                   <asmx:idRemolque>0</asmx:idRemolque>   
                  <asmx:CPCirculacion>36720</asmx:CPCirculacion>
                </asmx:DatosAdicionales>
             </asmx:datosVehiculo>
             <asmx:usuario>1035270001</asmx:usuario>
             <asmx:obtenerTodosPaquetes>true</asmx:obtenerTodosPaquetes>
             <asmx:paquetesConCambios>
                <asmx:PaqueteCoberturas>
                   <asmx:Clave>23</asmx:Clave>
                   <asmx:Descripcion>AMPLIA</asmx:Descripcion>
                   <asmx:Vigencia>
                      <asmx:Inicial>2023-12-14</asmx:Inicial>
                      <asmx:Final>2024-12-14</asmx:Final>
                   </asmx:Vigencia>
                   <asmx:CoberturasObligatorias>
                      <asmx:Cobertura>
                         <asmx:Regla>0</asmx:Regla>
                         <asmx:Clave>233</asmx:Clave>
                         <asmx:Descripcion>Daños Materiales</asmx:Descripcion>
                         <asmx:SumaAsegurada>0</asmx:SumaAsegurada>
                         <asmx:Deducible>5</asmx:Deducible>
                         <asmx:ProveedorAsistencia>0</asmx:ProveedorAsistencia>
                         <asmx:PrimaNeta>0</asmx:PrimaNeta>
                         <asmx:Calculada>true</asmx:Calculada>
                       </asmx:Cobertura>
                      <asmx:Cobertura>
                         <asmx:Regla>0</asmx:Regla>
                         <asmx:Clave>236</asmx:Clave>
                         <asmx:Descripcion>Robo Total</asmx:Descripcion>
                         <asmx:SumaAsegurada>0</asmx:SumaAsegurada>
                         <asmx:Deducible>10</asmx:Deducible>
                         <asmx:ProveedorAsistencia>0</asmx:ProveedorAsistencia>
                         <asmx:PrimaNeta>0</asmx:PrimaNeta>
                         <asmx:Calculada>true</asmx:Calculada>
                       </asmx:Cobertura>
                       <asmx:Cobertura>
                         <asmx:Regla>0</asmx:Regla>
                         <asmx:Clave>253</asmx:Clave>
                         <asmx:Descripcion>Responsabilidad Civil</asmx:Descripcion>
                         <asmx:SumaAsegurada>1500000</asmx:SumaAsegurada>
                         <asmx:Deducible>25</asmx:Deducible>
                         <asmx:ProveedorAsistencia>0</asmx:ProveedorAsistencia>
                         <asmx:PrimaNeta>0</asmx:PrimaNeta>
                         <asmx:Calculada>true</asmx:Calculada>
                       </asmx:Cobertura>
                       <asmx:Cobertura>
                         <asmx:Regla>0</asmx:Regla>
                         <asmx:Clave>242</asmx:Clave>
                         <asmx:Descripcion>Asistecia Jurídica</asmx:Descripcion>
                         <asmx:SumaAsegurada>0</asmx:SumaAsegurada>
                         <asmx:Deducible>0</asmx:Deducible>
                         <asmx:ProveedorAsistencia>6923</asmx:ProveedorAsistencia>
                         <asmx:PrimaNeta>0</asmx:PrimaNeta>
                         <asmx:Calculada>true</asmx:Calculada>
                       </asmx:Cobertura>                      
                   </asmx:CoberturasObligatorias>
                   <asmx:CoberturasObligatoriasOpcionales>
              <asmx:Cobertura>
                         <asmx:Regla>0</asmx:Regla>
                         <asmx:Clave>365</asmx:Clave>
                         <asmx:Descripcion>Asistecia Funeraria</asmx:Descripcion>
                         <asmx:SumaAsegurada>0</asmx:SumaAsegurada>
                         <asmx:Deducible>0</asmx:Deducible>
                         <asmx:ProveedorAsistencia>22765</asmx:ProveedorAsistencia>
                         <asmx:PrimaNeta>0</asmx:PrimaNeta>
                         <asmx:Calculada>true</asmx:Calculada>
                       </asmx:Cobertura>
                       <asmx:Cobertura>
                         <asmx:Regla>0</asmx:Regla>
                         <asmx:Clave>264</asmx:Clave>
                         <asmx:Descripcion>Extensión de Responsabilidad Civil para Automóvil Particular</asmx:Descripcion>
                         <asmx:SumaAsegurada>0</asmx:SumaAsegurada>
                         <asmx:Deducible>0</asmx:Deducible>
                         <asmx:ProveedorAsistencia>0</asmx:ProveedorAsistencia>
                         <asmx:PrimaNeta>0</asmx:PrimaNeta>
                         <asmx:Calculada>true</asmx:Calculada>
                       </asmx:Cobertura>
                       <asmx:Cobertura>
                         <asmx:Regla>0</asmx:Regla>
                         <asmx:Clave>269</asmx:Clave>
                         <asmx:Descripcion>Asistencia Médica</asmx:Descripcion>
                         <asmx:SumaAsegurada>0</asmx:SumaAsegurada>
                         <asmx:Deducible>0</asmx:Deducible>
                         <asmx:ProveedorAsistencia>6923</asmx:ProveedorAsistencia>
                         <asmx:PrimaNeta>0</asmx:PrimaNeta>
                         <asmx:Calculada>false</asmx:Calculada>
                       </asmx:Cobertura>
                       <asmx:Cobertura>
                         <asmx:Regla>0</asmx:Regla>
                         <asmx:Clave>239</asmx:Clave>
                         <asmx:Descripcion>Gastos Médicos Ocupantes</asmx:Descripcion>
                         <asmx:SumaAsegurada>20000</asmx:SumaAsegurada>
                         <asmx:Deducible>0</asmx:Deducible>
                         <asmx:ProveedorAsistencia>0</asmx:ProveedorAsistencia>
                         <asmx:PrimaNeta>0</asmx:PrimaNeta>
                         <asmx:Calculada>true</asmx:Calculada>
                       </asmx:Cobertura>
                       <asmx:Cobertura>
                         <asmx:Regla>0</asmx:Regla>
                         <asmx:Clave>366</asmx:Clave>
                         <asmx:Descripcion>Responsabilidad Civil Exceso por Muerte</asmx:Descripcion>
                         <asmx:SumaAsegurada>2000000</asmx:SumaAsegurada>
                         <asmx:Deducible>0</asmx:Deducible>
                         <asmx:ProveedorAsistencia>0</asmx:ProveedorAsistencia>
                         <asmx:PrimaNeta>0</asmx:PrimaNeta>
                         <asmx:Calculada>false</asmx:Calculada>
                       </asmx:Cobertura>
                       <asmx:Cobertura>
                         <asmx:Regla>0</asmx:Regla>
                         <asmx:Clave>267</asmx:Clave>
                         <asmx:Descripcion>Responsabilidad Civil Familiar</asmx:Descripcion>
                         <asmx:SumaAsegurada>100000</asmx:SumaAsegurada>
                         <asmx:Deducible>0</asmx:Deducible>
                         <asmx:ProveedorAsistencia>0</asmx:ProveedorAsistencia>
                         <asmx:PrimaNeta>0</asmx:PrimaNeta>
                         <asmx:Calculada>true</asmx:Calculada>
                       </asmx:Cobertura>
                       <asmx:Cobertura>
                         <asmx:Regla>0</asmx:Regla>
                         <asmx:Clave>249</asmx:Clave>
                         <asmx:Descripcion>Asistencia en viajes</asmx:Descripcion>
                         <asmx:SumaAsegurada>0</asmx:SumaAsegurada>
                         <asmx:Deducible>0</asmx:Deducible>
                         <asmx:ProveedorAsistencia>6923</asmx:ProveedorAsistencia>
                         <asmx:PrimaNeta>0</asmx:PrimaNeta>
                         <asmx:Calculada>true</asmx:Calculada>
                       </asmx:Cobertura>
                   </asmx:CoberturasObligatoriasOpcionales>
                   <asmx:CoberturasOpcionales>
          <asmx:Cobertura>
                         <asmx:Regla>0</asmx:Regla>
                         <asmx:Clave>248</asmx:Clave>
                         <asmx:Descripcion>Exención de deducible por perdida total por daños materiales</asmx:Descripcion>
                         <asmx:SumaAsegurada>0</asmx:SumaAsegurada>
                         <asmx:Deducible>0</asmx:Deducible>
                         <asmx:ProveedorAsistencia>0</asmx:ProveedorAsistencia>
                         <asmx:PrimaNeta>0</asmx:PrimaNeta>
                         <asmx:Calculada>true</asmx:Calculada>
                       </asmx:Cobertura>
                       <asmx:Cobertura>
                         <asmx:Regla>0</asmx:Regla>
                         <asmx:Clave>355</asmx:Clave>
                         <asmx:Descripcion>Responsabilidad Civil por daños a los ocupantes</asmx:Descripcion>
                         <asmx:SumaAsegurada>350000</asmx:SumaAsegurada>
                         <asmx:Deducible>0</asmx:Deducible>
                         <asmx:ProveedorAsistencia>0</asmx:ProveedorAsistencia>
                         <asmx:PrimaNeta>0</asmx:PrimaNeta>
                         <asmx:Calculada>true</asmx:Calculada>
                       </asmx:Cobertura>
                       <asmx:Cobertura>
                         <asmx:Regla>0</asmx:Regla>
                         <asmx:Clave>235</asmx:Clave>
                         <asmx:Descripcion>Accidentes automovilísticos al conductor</asmx:Descripcion>
                         <asmx:SumaAsegurada>100000</asmx:SumaAsegurada>
                         <asmx:Deducible>0</asmx:Deducible>
                         <asmx:ProveedorAsistencia>0</asmx:ProveedorAsistencia>
                         <asmx:PrimaNeta>0</asmx:PrimaNeta>
                         <asmx:Calculada>true</asmx:Calculada>
                       </asmx:Cobertura>
                       <asmx:Cobertura>
                         <asmx:Regla>0</asmx:Regla>
                         <asmx:Clave>266</asmx:Clave>
                         <asmx:Descripcion>Responsabilidad USA y Canadá</asmx:Descripcion>
                         <asmx:SumaAsegurada>150000</asmx:SumaAsegurada>
                         <asmx:Deducible>0</asmx:Deducible>
                         <asmx:ProveedorAsistencia>23295</asmx:ProveedorAsistencia>
                         <asmx:PrimaNeta>0</asmx:PrimaNeta>
                         <asmx:Calculada>true</asmx:Calculada>
                       </asmx:Cobertura>
                       <asmx:Cobertura>
                         <asmx:Regla>0</asmx:Regla>
                         <asmx:Clave>268</asmx:Clave>
                         <asmx:Descripcion>Ayuda para gastos de transporte</asmx:Descripcion>
                         <asmx:SumaAsegurada>300</asmx:SumaAsegurada>
                         <asmx:Deducible>0</asmx:Deducible>
                         <asmx:ProveedorAsistencia>0</asmx:ProveedorAsistencia>
                         <asmx:PrimaNeta>0</asmx:PrimaNeta>
                         <asmx:Calculada>true</asmx:Calculada>
                       </asmx:Cobertura>
                       <asmx:Cobertura>
                         <asmx:Regla>0</asmx:Regla>
                         <asmx:Clave>342</asmx:Clave>
                         <asmx:Descripcion>Auto siempre</asmx:Descripcion>
                         <asmx:SumaAsegurada>5</asmx:SumaAsegurada>
                         <asmx:Deducible>0</asmx:Deducible>
                         <asmx:ProveedorAsistencia>6923</asmx:ProveedorAsistencia>
                         <asmx:PrimaNeta>0</asmx:PrimaNeta>
                         <asmx:Calculada>true</asmx:Calculada>
                       </asmx:Cobertura>
                        <asmx:Cobertura>
                         <asmx:Regla>0</asmx:Regla>
                         <asmx:Clave>251</asmx:Clave>
                         <asmx:Descripcion>Adaptaciones y conversiones(DM)</asmx:Descripcion>
                         <asmx:SumaAsegurada>450000</asmx:SumaAsegurada>
                         <asmx:Deducible>0</asmx:Deducible>
                         <asmx:ProveedorAsistencia>0</asmx:ProveedorAsistencia>
                         <asmx:PrimaNeta>0</asmx:PrimaNeta>
                         <asmx:Calculada>false</asmx:Calculada>
                       </asmx:Cobertura>
                       <asmx:Cobertura>
                         <asmx:Regla>0</asmx:Regla>
                         <asmx:Clave>252</asmx:Clave>
                         <asmx:Descripcion>Adaptaciones y conversiones(RT)</asmx:Descripcion>
                         <asmx:SumaAsegurada>450000</asmx:SumaAsegurada>
                         <asmx:Deducible>0</asmx:Deducible>
                         <asmx:ProveedorAsistencia>0</asmx:ProveedorAsistencia>
                         <asmx:PrimaNeta>0</asmx:PrimaNeta>
                         <asmx:Calculada>false</asmx:Calculada>
                       </asmx:Cobertura>
                       <asmx:Cobertura>
                         <asmx:Regla>0</asmx:Regla>
                         <asmx:Clave>262</asmx:Clave>
                         <asmx:Descripcion>Equipo especial daños materiales</asmx:Descripcion>
                         <asmx:SumaAsegurada>250000</asmx:SumaAsegurada>
                         <asmx:Deducible>0</asmx:Deducible>
                         <asmx:ProveedorAsistencia>0</asmx:ProveedorAsistencia>
                         <asmx:PrimaNeta>0</asmx:PrimaNeta>
                         <asmx:Calculada>false</asmx:Calculada>
                       </asmx:Cobertura>
                       <asmx:Cobertura>
                         <asmx:Regla>0</asmx:Regla>
                         <asmx:Clave>263</asmx:Clave>
                         <asmx:Descripcion>Equipo especial robo total</asmx:Descripcion>
                         <asmx:SumaAsegurada>250000</asmx:SumaAsegurada>
                         <asmx:Deducible>0</asmx:Deducible>
                         <asmx:ProveedorAsistencia>0</asmx:ProveedorAsistencia>
                         <asmx:PrimaNeta>0</asmx:PrimaNeta>
                         <asmx:Calculada>false</asmx:Calculada>
                       </asmx:Cobertura>
                   </asmx:CoberturasOpcionales>
          
                   <asmx:Ajuste>
                      <asmx:PorcentajeAjuste>30</asmx:PorcentajeAjuste>
                      <asmx:TipoAjuste>4612</asmx:TipoAjuste>
                   </asmx:Ajuste>
                </asmx:PaqueteCoberturas>
             </asmx:paquetesConCambios>
             <asmx:IDTipoSumaAsegurada>4452</asmx:IDTipoSumaAsegurada>
             <asmx:SumaAsegurada>0</asmx:SumaAsegurada>
          </asmx:request>
       </asmx:getpackages>
    </soapenv:Body>
 </soapenv:Envelope>';



    $header = [
      'Method: POST',
      'Connection: keep-alive',
      'User-Agent: PHP-SOAP-CURL',
      'Content-Type: text/xml; charset=utf-8',
      'Transfer-Encoding: chunked'

    ];

    $ch = curl_init($location);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $header);

    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $request);
    //curl_setopt($ch, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);

    $response = curl_exec($ch);

    $soapxml = $response;
    curl_close($ch);

    $plainXML = mungXML(trim($soapxml));
    $arrayResult = json_encode(SimpleXML_Load_String($plainXML, 'SimpleXMLElement', LIBXML_NOCDATA));

    //Imprimimos para mandar a Js
    echo $arrayResult;
  } else {
    echo "No hay datos de vehicleData disponibles.\n";
    return null;
  }

}

?>

<?php

// FUNCTION TO MUNG THE XML SO WE DO NOT HAVE TO DEAL WITH NAMESPACE
function mungXML($xml)
{
  $obj = SimpleXML_Load_String($xml);
  if ($obj === FALSE)
    return $xml;

  // GET NAMESPACES, IF ANY
  $nss = $obj->getNamespaces(TRUE);
  if (empty($nss))
    return $xml;

  // CHANGE ns: INTO ns_
  $nsm = array_keys($nss);
  foreach ($nsm as $key) {
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
    $xml = preg_replace($rgx, $rep, $xml);
  }

  return $xml;

} // End :: mungXML()

?>