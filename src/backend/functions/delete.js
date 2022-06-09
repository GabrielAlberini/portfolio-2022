import firebaseApp from "../firebase/credenciales";
import { getFirestore, deleteDoc, doc, collection } from "firebase/firestore";

const db = getFirestore(firebaseApp);

async function deleteTrabajo(producto) {
  const result = window.confirm("Seguro que desea eliminar el trabajo?");
  if (result) {
    const coleccionRef = collection(db, "trabajo");
    const docuRef = doc(coleccionRef, producto.sku);
    const eliminado = await deleteDoc(docuRef);
    return eliminado;
  }
}

async function deleteCertificado(producto) {
  const result = window.confirm("Seguro que desea eliminar el certificado?");
  if (result) {
    const coleccionRef = collection(db, "certificado");
    const docuRef = doc(coleccionRef, producto.sku);
    const eliminado = await deleteDoc(docuRef);
    return eliminado;
  }
}

export { deleteTrabajo, deleteCertificado };
