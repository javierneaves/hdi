<?php

header('Content-Type: application/json');
// Obtén los datos enviados desde JavaScript
$data = json_decode(file_get_contents('php://input'), true);

// Llama a tu función de procesamiento con el array asociativo $data
procesarDatos();

function procesarDatos()
{
  // Verificar si existe vehicleData y tiene al menos un elemento
    

    $json = file_get_contents('php://input');
    $datosArray = json_decode($json, true);

    //Variables de Conexion
    $siteID = '1035270001';
    $sitePw = 'Pa55word+1';

    $location = "https://enterpriseservices.implementation.hdi.com.mx/B2B/Partners/WCF/Autos/PublicServicesAutos.asmx";

    $request = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:asmx="http://hdi.com.mx/asmx/">
    <soapenv:Header>
       <asmx:AuthenticateHeader>
          <!--Optional:-->
          <asmx:siteID>1035270001</asmx:siteID>
          <!--Optional:-->
          <asmx:sitePwd>Pa55word+1</asmx:sitePwd>
       </asmx:AuthenticateHeader>
    </soapenv:Header>
    <soapenv:Body>
       <asmx:savequote>
          <!--Optional:-->
          <asmx:request>
             <!--Optional:-->
             <asmx:datosCotizacion>
                <!--Optional:-->
                <asmx:PaqueteCoberturas>
                   <asmx:Clave>19</asmx:Clave>
                   <asmx:Vigencia>
                      <asmx:Inicial>2023-10-31</asmx:Inicial>
                      <asmx:Final>2024-10-31</asmx:Final>
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
                         <asmx:Descripcion>Responsabilidad Civil (Límite Único y Combinado)</asmx:Descripcion>
                         <asmx:SumaAsegurada>1500000</asmx:SumaAsegurada>
                         <asmx:Deducible>25</asmx:Deducible>
                         <asmx:ProveedorAsistencia>0</asmx:ProveedorAsistencia>
                         <asmx:PrimaNeta>0</asmx:PrimaNeta>
                         <asmx:Calculada>true</asmx:Calculada>
                      </asmx:Cobertura>
                      <asmx:Cobertura>
                         <asmx:Regla>0</asmx:Regla>
                         <asmx:Clave>242</asmx:Clave>
                         <asmx:Descripcion>Asistencia Jurídica</asmx:Descripcion>
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
                         <asmx:Descripcion>Asistencia Funeraria</asmx:Descripcion>
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
                         <asmx:Descripcion>Gastos Médicos Ocupantes (Límite Único C</asmx:Descripcion>
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
                         <asmx:SumaAsegurada>0</asmx:SumaAsegurada>
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
                             <asmx:Descripcion>Exención de Deducible Por Pérdida Total Por Daños Materiales</asmx:Descripcion>
                             <asmx:SumaAsegurada>0</asmx:SumaAsegurada>
                             <asmx:Deducible>0</asmx:Deducible>
                             <asmx:ProveedorAsistencia>0</asmx:ProveedorAsistencia>
                             <asmx:PrimaNeta>0</asmx:PrimaNeta>
                             <asmx:Calculada>true</asmx:Calculada>
                          </asmx:Cobertura>
                           <asmx:Cobertura>
                             <asmx:Regla>0</asmx:Regla>
                             <asmx:Clave>355</asmx:Clave>
                             <asmx:Descripcion>Responsabilidad Civil por daños a los Ocupantes</asmx:Descripcion>
                             <asmx:SumaAsegurada>350000</asmx:SumaAsegurada>
                             <asmx:Deducible>0</asmx:Deducible>
                             <asmx:ProveedorAsistencia>0</asmx:ProveedorAsistencia>
                             <asmx:PrimaNeta>0</asmx:PrimaNeta>
                             <asmx:Calculada>true</asmx:Calculada>
                          </asmx:Cobertura>
                           <asmx:Cobertura>
                             <asmx:Regla>0</asmx:Regla>
                             <asmx:Clave>235</asmx:Clave>
                             <asmx:Descripcion>Accidentes Automovilísticos al Conductor</asmx:Descripcion>
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
                             <asmx:Descripcion>Auto Siempre</asmx:Descripcion>
                             <asmx:SumaAsegurada>5</asmx:SumaAsegurada>
                             <asmx:Deducible>0</asmx:Deducible>
                             <asmx:ProveedorAsistencia>6923</asmx:ProveedorAsistencia>
                             <asmx:PrimaNeta>0</asmx:PrimaNeta>
                             <asmx:Calculada>true</asmx:Calculada>
                          </asmx:Cobertura>     
                          <asmx:Cobertura>
                             <asmx:Regla>0</asmx:Regla>
                             <asmx:Clave>251</asmx:Clave>
                             <asmx:Descripcion>Adaptaciones y conversiones (DM)</asmx:Descripcion>
                             <asmx:SumaAsegurada>450000</asmx:SumaAsegurada>
                             <asmx:Deducible>0</asmx:Deducible>
                             <asmx:ProveedorAsistencia>0</asmx:ProveedorAsistencia>
                             <asmx:PrimaNeta>0</asmx:PrimaNeta>
                             <asmx:Calculada>false</asmx:Calculada>
                          </asmx:Cobertura>
                          <asmx:Cobertura>
                             <asmx:Regla>0</asmx:Regla>
                             <asmx:Clave>252</asmx:Clave>
                             <asmx:Descripcion>Adaptaciones y conversiones (RT)</asmx:Descripcion>
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
                <asmx:CaracteristicasVehiculo>
                  <asmx:idVehiculo></asmx:idVehiculo>
                   <asmx:idMarca>24317</asmx:idMarca>
                   <asmx:idModelo>2018</asmx:idModelo>
                   <asmx:idTipo>FORTE</asmx:idTipo>
                   <asmx:idVersion>EX, L4, 2.0L, 158 CP, 4 PUERTAS, AUT</asmx:idVersion>
                   <asmx:idTransmision>3800</asmx:idTransmision>
                   <asmx:idUso>4581</asmx:idUso>
                   <asmx:tipoVehiculo>4579</asmx:tipoVehiculo>
                   <asmx:numeroMotor>0</asmx:numeroMotor>
                   <asmx:placas>0</asmx:placas>
                   <asmx:color>0</asmx:color>
                   <asmx:numeroSerie>1157845118</asmx:numeroSerie>
                   <asmx:pasajeros>0</asmx:pasajeros>
                   <asmx:idZonaCirculacion>0</asmx:idZonaCirculacion>
                   <asmx:idTonelaje>0</asmx:idTonelaje>
                   <asmx:idServicio>4601</asmx:idServicio>
                   <asmx:DatosAdicionales>
                      <asmx:Renovaciones>0</asmx:Renovaciones>
                      <asmx:idRemolque>0</asmx:idRemolque>
                      <asmx:CPCirculacion>36720</asmx:CPCirculacion>
                   </asmx:DatosAdicionales>
                </asmx:CaracteristicasVehiculo>
                <asmx:Cliente>
                   <asmx:idTipoPersona>00</asmx:idTipoPersona>
                   <asmx:actividadPolitica>false</asmx:actividadPolitica>
                   <asmx:apellidoMaterno>LUNA</asmx:apellidoMaterno>
                   <asmx:apellidoPaterno>ARROYO</asmx:apellidoPaterno>
                   <asmx:estadoCivil>C</asmx:estadoCivil>
                   <asmx:fechaNacimiento>1987-09-18T00:00:00</asmx:fechaNacimiento>
                   <asmx:giroActividad>0</asmx:giroActividad>
                   <asmx:ocupacion>9BJG</asmx:ocupacion>
                   <asmx:primerNombre>ALEJANDRINA</asmx:primerNombre>
                   <asmx:rfc>AOLA870918</asmx:rfc>
                   <asmx:segundoNombre></asmx:segundoNombre>
                   <asmx:sexo>2</asmx:sexo>
                   <asmx:Direccion>
                      <asmx:calle>PRUEBA</asmx:calle>
                      <asmx:ciudad>07</asmx:ciudad>
                      <asmx:codigoPostal>37000</asmx:codigoPostal>
                      <asmx:colonia>CENTRO</asmx:colonia>
                      <asmx:estado>11</asmx:estado>
                      <asmx:nacionalidad>002</asmx:nacionalidad>
                      <asmx:pais>00007</asmx:pais>
                      <asmx:telefonoCasa>1234567890</asmx:telefonoCasa>
                      <asmx:numeroExterior>444</asmx:numeroExterior>
                      <asmx:numeroInterior>0</asmx:numeroInterior>
                   </asmx:Direccion>
                   <asmx:FolioMercantil>0</asmx:FolioMercantil>
                   <asmx:NombreCompletoDelApoderado></asmx:NombreCompletoDelApoderado>
                </asmx:Cliente>
                 <asmx:datosFiscales>
                   <asmx:RFC>AOLA870918</asmx:RFC>
                   <asmx:Nombre>ALEJANDRINA ARROYO LUNA</asmx:Nombre>
                   <asmx:idRegimenFiscal>43682</asmx:idRegimenFiscal>
                   <asmx:idRegimenSocietario></asmx:idRegimenSocietario>
                   <asmx:idCIF>12345678909</asmx:idCIF>
                   <asmx:CPFiscal>37000</asmx:CPFiscal>
                   <asmx:direccionFiscal>
                      <asmx:calle>PRUEBA</asmx:calle>
                      <asmx:numeroExterior>321</asmx:numeroExterior>
                      <asmx:numeroInterior>0</asmx:numeroInterior>
                      <asmx:colonia>CENTRO</asmx:colonia>
                      <asmx:ciudad>07</asmx:ciudad>
                      <asmx:estado>11</asmx:estado>
                   </asmx:direccionFiscal>
                </asmx:datosFiscales>
                <asmx:fechaInicioVigencia>2023-10-31</asmx:fechaInicioVigencia>
                <asmx:idFormaPago>326</asmx:idFormaPago>
                <asmx:idConductoCobro>1</asmx:idConductoCobro>
                <asmx:idEstado>0</asmx:idEstado>
                <asmx:idCiudad>0</asmx:idCiudad>
                <asmx:PaqueteEmitir>
                   <asmx:IdPaquete>19</asmx:IdPaquete>
                   <asmx:ListaCondiciones>
                      <asmx:CondicionesTarificar>
                         <asmx:DeducibleDM>5</asmx:DeducibleDM>
                         <asmx:DeducibleRT>10</asmx:DeducibleRT>
                      </asmx:CondicionesTarificar>
                   </asmx:ListaCondiciones>
                   <asmx:ListaConfiguraciones>
                      <asmx:ConfiguracionPaquete>
                         <asmx:InicioVigencia>2023-10-31</asmx:InicioVigencia>
                         <asmx:FinVigencia>2024-10-31</asmx:FinVigencia>
                         <asmx:EsCotizacionDiasPorMes>false</asmx:EsCotizacionDiasPorMes>
                         <asmx:Descuento>0</asmx:Descuento>
                      </asmx:ConfiguracionPaquete>
                   </asmx:ListaConfiguraciones>
                </asmx:PaqueteEmitir>
                <asmx:IDTipoSumaAsegurada>4452</asmx:IDTipoSumaAsegurada>
                <asmx:SumaAsegurada>0</asmx:SumaAsegurada>
                <asmx:InformacionAdicionalCorredor>
                   <asmx:FechaEmisionFactura>2023-10-31</asmx:FechaEmisionFactura>
                </asmx:InformacionAdicionalCorredor>
                <asmx:tipoPersona>00</asmx:tipoPersona>
             </asmx:datosCotizacion>
             <asmx:usuario>1035270001</asmx:usuario>
           </asmx:request>
        </asmx:savequote>
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