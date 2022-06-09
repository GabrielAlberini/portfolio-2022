// import firebaseApp from "../firebase/credenciales";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

const db = getFirestore();

function addTrabajo(infoProducto) {
  const collectionRef = collection(db, "trabajo");
  const docRef = doc(collectionRef, infoProducto.sku);
  setDoc(docRef, infoProducto);
}

function addCertificado(infoProducto) {
  const collectionRef = collection(db, "certificado");
  const docRef = doc(collectionRef, infoProducto.sku);
  setDoc(docRef, infoProducto);
}

export { addTrabajo, addCertificado };
