// Función para crear el formulario de pagos
export function crearFormularioPagos(formData) {
  // Escribe el saludo para esta pagina
  let formDescription = document.getElementById("formDescription");
  formDescription.innerHTML =
  'Gracias <span class="text-primary">' +
  formData.nombre +
  "</span>. <br /><br /> A continuacion puedes realizar el pago, al finalizar enviaremos la poliza a tu correo";
  

  var contactForm = document.getElementById('contactForm');
  contactForm.innerHTML = ""

  // Crear elementos del formulario
  var cardForm = document.createElement('div');
  cardForm.className = 'card';
  
  var cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  
  var cardTitle = document.createElement('h3');
  cardTitle.className = 'card-title text-center mb-4';
  cardTitle.textContent = 'Pago con Tarjeta de Crédito';
  
  var form = document.createElement('form');
  
  // Elementos del formulario
  var cardNameInput = crearInput('text', 'Nombre en la Tarjeta', 'cardName', 'Nombre en la Tarjeta');
  var cardNumberInput = crearInput('text', 'Número de Tarjeta', 'cardNumber', 'Número de Tarjeta');
  var expiryDateInput = crearInput('text', 'Fecha de Expiración', 'expiryDate', 'MM/AA');
  var cvvInput = crearInput('text', 'CVV', 'cvv', 'CVV');
  
  var formRow = document.createElement('div');
  formRow.className = 'form-row';
  formRow.appendChild(expiryDateInput);
  formRow.appendChild(cvvInput);
  
  var payButton = document.createElement('button');
  payButton.type = 'button';
  payButton.className = 'btn btn-primary btn-block';
  payButton.textContent = 'Pagar';
  
  // Agregar elementos al formulario
  form.appendChild(cardNameInput);
  form.appendChild(cardNumberInput);
  form.appendChild(formRow);
  form.appendChild(payButton);
  
  // Agregar elementos al cardBody
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(form);
  
  // Agregar cardBody al cardForm
  cardForm.appendChild(cardBody);
  
  // Agregar cardForm al contactForm
  contactForm.appendChild(cardForm);
}

// Función para crear un input
function crearInput(type, label, id, placeholder) {
  var formGroup = document.createElement('div');
  formGroup.className = 'form-group';

  var labelElement = document.createElement('label');
  labelElement.textContent = label;

  var inputElement = document.createElement('input');
  inputElement.type = type;
  inputElement.className = 'form-control';
  inputElement.id = id;
  inputElement.placeholder = placeholder;
  inputElement.required = true;

  formGroup.appendChild(labelElement);
  formGroup.appendChild(inputElement);

  return formGroup;
}
