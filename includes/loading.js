export function loadingStart(){
  document.getElementById("loading").classList.remove("invisible");
}
export function loadingEnd(){
  document.getElementById("loading").classList.add("invisible");
}    
/*

<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:asmx="http://hdi.com.mx/asmx/">
   <soap:Header>
      <asmx:AuthenticateHeader>
         <asmx:siteID>1035270001</asmx:siteID>
         <asmx:sitePwd>Pa55word+1</asmx:sitePwd>
      </asmx:AuthenticateHeader>
   </soap:Header>
   <soap:Body>
      <asmx:getinfoByPostalCode>
         <asmx:request>
            <asmx:CodigoPostal>64350</asmx:CodigoPostal>
         </asmx:request>
      </asmx:getinfoByPostalCode>
   </soap:Body>
</soap:Envelope>

*/