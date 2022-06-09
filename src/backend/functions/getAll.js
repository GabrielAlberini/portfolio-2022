import firebaseApp from "../firebase/credenciales";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(firebaseApp);

async function getAllTrabajo() {
  const productos = [];
  const collectionRef = collection(db, "trabajo");
  const snapshot = await getDocs(collectionRef);
  snapshot.forEach((doc) => {
    productos.push(doc.data());
  });
  productos.sort((a, b) => {
    const transformSKUa = Number(a.sku);
    const transformSKUb = Number(b.sku);
    if (transformSKUa > transformSKUb) {
      return -1;
    }
    if (transformSKUa < transformSKUb) {
      return 1;
    }
    return 0;
  });
  return productos;
}

async function getAllCertificado() {
  const productos = [];
  const collectionRef = collection(db, "certificado");
  const snapshot = await getDocs(collectionRef);
  snapshot.forEach((doc) => {
    productos.push(doc.data());
  });
  productos.sort((a, b) => {
    const transformSKUa = Number(a.sku);
    const transformSKUb = Number(b.sku);
    if (transformSKUa > transformSKUb) {
      return -1;
    }
    if (transformSKUa < transformSKUb) {
      return 1;
    }
    return 0;
  });
  return productos;
}

export { getAllTrabajo, getAllCertificado };
