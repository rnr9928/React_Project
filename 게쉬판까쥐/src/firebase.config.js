
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBjJRuHxCY7zZwXnQaQUnqtQQQ_7NZIpkI",
  authDomain: "lolololo-efd91.firebaseapp.com",
  projectId: "lolololo-efd91",
  storageBucket: "lolololo-efd91.appspot.com",
  messagingSenderId: "334783805346",
  appId: "1:334783805346:web:f74f1561aa1628837ba4fb"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app;