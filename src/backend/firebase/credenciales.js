// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";

// Añade aquí tus credenciales
const firebaseConfig = {
  apiKey: "AIzaSyDfPN_tADSVfIx0lY5yZPlw11OUyzNh8KI",
  authDomain: "portfolio-2022-50c52.firebaseapp.com",
  projectId: "portfolio-2022-50c52",
  storageBucket: "portfolio-2022-50c52.appspot.com",
  messagingSenderId: "891102530589",
  appId: "1:891102530589:web:5ec483fa9fcb1bcde80af4",
  measurementId: "G-99WF4G5ZKR"
};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;
