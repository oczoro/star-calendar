const env = import.meta.env;
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const config = {
  apiKey: env.VITE_APIKEY,
  authDomain: env.VITE_AUTHDOMAIN,
  projectId: env.VITE_PROJECTID,
  storageBucket: env.VITE_STORAGEBUCKET,
  messagingSenderId: env.VITE_MESSAGINGSENDERID,
  appId: env.VITE_APPID,
  measurementId: env.VITE_MEASUREMENTID,
};

const firebaseApp = initializeApp(config);

export const db = getFirestore(firebaseApp);
