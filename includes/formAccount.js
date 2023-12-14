import { onAuthStateChanged, 
         createUserWithEmailAndPassword, 
         getAuth, 
         updateProfile,
         GoogleAuthProvider, 
         signInWithPopup,
         signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { auth, app } from './firebase.js'
import { formName } from "./formName.js";
import { formAuto } from "./formAuto.js";
import { loadingEnd, loadingStart } from "./loading.js";
import { showMessages } from "./showMessages.js";

export function formAuth(active, formData) {
  loadingEnd()
  // Obtenemos los datos ya existentes de el objeto formData
  let mail = !formData.mail ? "" : formData.mail;
  let tel = !formData.tel ? "" : formData.tel;

  // Borramos los botones de los vehiculos de la siguiente pagina
  let buttonContainer = document.getElementById("vehicleButton");
  buttonContainer.innerHTML = "";

  let formDescription = document.getElementById("formDescription");
  formDescription.innerHTML =
    'Muchas gracias <span class="text-primary">' +
    formData.nombre +
    "</span>. <br /><br /> Ahora crearemos tu cuenta, podras acceder a tu información en cualquier momento.";

  var formulario = document.getElementById("contactForm");
  formulario.innerHTML = "";

  var container = document.createElement('div');
    container.className = 'container mt-4';

    // Formulario de registro
    var registrationForm = document.createElement('form');
    registrationForm.id = 'registrationForm';
    var emailFormGroup = document.createElement('div');
    emailFormGroup.className = 'mb-3';

    var emailLabel = document.createElement('label');
    emailLabel.textContent = 'Correo Electrónico:';
    emailLabel.className = 'form-label';
    emailLabel.setAttribute('for', 'email');
    emailFormGroup.appendChild(emailLabel);

    var emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.className = 'form-control';
    emailInput.id = 'email';
    emailInput.value = '';
    emailInput.required = true;
    emailFormGroup.appendChild(emailInput);

    registrationForm.appendChild(emailFormGroup);

    var passwordFormGroup = document.createElement('div');
    passwordFormGroup.className = 'mb-3';

    var passwordLabel = document.createElement('label');
    passwordLabel.textContent = 'Contraseña (mínimo 8 caracteres):';
    passwordLabel.className = 'form-label';
    passwordLabel.setAttribute('for', 'password');
    passwordFormGroup.appendChild(passwordLabel);

    var passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.className = 'form-control mb-2';
    passwordInput.id = 'password';
    passwordInput.minLength = 8;
    passwordInput.required = true;
    passwordInput.value = '';
    passwordInput.innerHTML = '';
    passwordFormGroup.appendChild(passwordInput);

    registrationForm.appendChild(passwordFormGroup);
    
    var containerButtons = document.createElement('div');
    containerButtons.className = 'd-grid gap-2 col-6 mx-auto';
    
    // Botón "Ingresar"
    var textGoogle = document.createElement('p');
    textGoogle.innerHTML = "O también puedes.."

    var signInButton = document.createElement('button');
    signInButton.type = 'button';
    signInButton.className = 'btn btn-secondary btn-lg mb-3';
    signInButton.id = 'signInButton';
    signInButton.textContent = 'Registrarse';
    containerButtons.appendChild(signInButton);
    
    // Botón "Ingresar con Google"
    var googleButton = document.createElement('button');
    googleButton.type = 'button';
    googleButton.className = 'btn btn-primary google-btn';
    googleButton.style.backgroundColor = '#4285f4';
    googleButton.id = 'googleButton';
    
    var googleIcon = document.createElement('img');
    googleIcon.src = './imgs/google.png';
    googleIcon.className = 'p-2';
    googleIcon.width = '50';
    googleIcon.height = '50';

    googleButton.textContent = 'Ingresar con Google'
    
    var googleButtonText = document.createTextNode('Ingresar con Google');
    
    googleButton.appendChild(googleIcon);
    
    containerButtons.appendChild(textGoogle);
    containerButtons.appendChild(googleButton);
    
    registrationForm.appendChild(containerButtons);
  // Crear el tercer div para los botones
  var divButtons = document.createElement("div");
  divButtons.className = "container p-5 justify-content-between text-end";

  // Crear los botones Anterior y Siguiente
  var botonAnterior = document.createElement("button");
  botonAnterior.setAttribute("type", "button");
  botonAnterior.className = "btn btn-secondary btn-lg m-2";
  botonAnterior.textContent = "Anterior";

  // Agregar los botones al tercer div
  divButtons.appendChild(botonAnterior);

  // Agregar el el formulario de registro al formulario
  formulario.appendChild(container);
  formulario.appendChild(registrationForm);
  
  // Agregar el tercer div al formulario
  formulario.appendChild(divButtons);

  // validacion y eventos

  var alert = document.createElement("div");
  // alert.className = "alert alert-danger";
  alert.setAttribute("role", "alert");
	//divEmail.appendChild(alert)
	//divTel.appendChild(alert)
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  botonAnterior.addEventListener("click", function (e) {
    // guarda los valores de los formularios en el objeto
    formData = {
      ...formData,
      mail: emailInput.value,
    };
    formName("active", formData);
  });

  // auth
  
  // Obtener referencias a los elementos del formulario
  var emailInput = document.getElementById('email');
  var passwordInput = document.getElementById('password');

  // Manejar el registro con correo electrónico y contraseña
  signInButton.addEventListener('click', async function (event) {
      event.preventDefault();
      var email = emailInput.value;
      var password = passwordInput.value;
     
      //  codigo para registraste con mail de firebase auth
      try{
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        // Despues de crear la cuenta inicia la pantalla de loading, guarda el objeto con los datos, abre formAuto
        .then((userCredentials) => {
          loadingStart()
          onAuthStateChanged(auth, async (user) => {
            if (user) {
                loadingStart()
                formData = {  
                  ...formData,
                  correo: email
                }
                formAuto(formData);
            } else {
                console.log('No hay usuario autenticado');
                return;
            }
          })
          formAuto(formData);
        }).catch( async (error) => {
          console.log(error);
          if(error.code === 'auth/email-already-in-use') {
            
            try{
                const credentials = await signInWithEmailAndPassword(auth, email, password)
                console.log(credentials.user.email)
                formAuto(formData);
                showMessages('Welcome '+ credentials.user.email, 'success')
                return
            }catch(error) {
                console.log(error)
                if(error.code === 'auth/wrong-password'){
                    showMessages('Password incorrecto', 'error')
                } else if(error.code === 'auth/user-not-found'){
                    showMessages('Usuario no encontrado', 'error')
                } else if(error.code === 'auth/invalid-email'){
                    showMessages('Correo no valido', 'error')
                } else {
                    showMessages('Revise los datos ingresados', 'www')
                }
                showMessages('El usuario ya existe', 'error')
            }
          } else if( error.code === 'auth/invalid-email'){
              showMessages('Ingrese un correo valido', 'error')
          } else if( error.code === 'auth/weak-password') {
              showMessages('Ingrese un password mayor a 6 caracteres', 'error')
          } else if(error.code === 'auth/internal-error'){
            showMessages('Debe ingresar una contraseña válida', 'error')
          } else if(error.code){
              showMessages('Algo salio mal, intentelo de nuevo','error')
          }
        })

     } catch (error){
         if(error.code === 'auth/email-already-in-use'){
             showMessages('El usuario ya existe', 'error')
         } else if( error.code === 'auth/invalid-email'){
             showMessages('Ingrese un correo valido', 'error')
         } else if( error.code === 'auth/weak-password') {
             showMessages('Ingrese un password mayor a 6 caracteres', 'error')
         } else if(error.code){
             showMessages('Algo salio mal, intentelo de nuevo','error')
         }
     }
  });
  
  googleButton.addEventListener('click', async () => {
    const provider = new GoogleAuthProvider()
    try {
        const credentials = await signInWithPopup(auth, provider)
        .then((credentials) =>{
          console.log(credentials);
          // Después de que la autenticación con Google sea exitosa,
          // ejecutar el código en onAuthStateChanged
          onAuthStateChanged(auth, async (user) => {
            const uid = user.uid;
            const correo = user.email;
              if (user) {
                  loadingStart()
                  console.log(uid);
                  formData = {  
                    ...formData,
                    uid: uid,
                    correo: correo
                  }
                  formAuto(formData);
              } else {
                  console.log('No hay usuario autenticado');
                  return;
              }
          })

        })

    } catch (error) {
        console.log(error);
    }
  });



}
