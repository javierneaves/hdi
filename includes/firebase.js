// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCEuTblcm7ld86643oDROxjFgww8BpnFN4",
    authDomain: "hdiauth.firebaseapp.com",
    projectId: "hdiauth",
    storageBucket: "hdiauth.appspot.com",
    messagingSenderId: "112173926679",
    appId: "1:112173926679:web:5ae15fd266e7950aef0f52"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const analytics = getAnalytics(app);
  export const auth = getAuth(app)