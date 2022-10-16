import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDBwjTj_erzsJJKNfMOe8pYheZblf_4WNs",
  authDomain: "yoyo-9109a.firebaseapp.com",
  projectId: "yoyo-9109a",
  storageBucket: "yoyo-9109a.appspot.com",
  messagingSenderId: "916870706376",
  appId: "1:916870706376:web:0f9fbb6a1aa023a744e1fd"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);