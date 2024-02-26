/* eslint-disable no-useless-catch */
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  createUserWithEmailAndPassword ,
  signInWithEmailAndPassword ,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2TNeoJDuMVpMaBG-bChDuuF0c3afwNSc",
  authDomain: "guestbook-b6d28.firebaseapp.com",
  projectId: "guestbook-b6d28",
  storageBucket: "guestbook-b6d28.appspot.com",
  messagingSenderId: "1081844117579",
  appId: "1:1081844117579:web:e1dd85d094ba141fd25dce"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerWithEmailAndPassword =async(email,password)=>{
  try {
    const response =await createUserWithEmailAndPassword(auth,email,password);
    const user =response.user;
    return user;
  } catch (error) {
    throw(error);
  }
}

const loginWithEmailAndPassword = async(email,password)=>{
  try {
    const response = await signInWithEmailAndPassword(auth,email,password);
    return response; 
  } catch (error) {
      throw(error);
  }
}
export {
  auth,
  registerWithEmailAndPassword,
  loginWithEmailAndPassword,
}