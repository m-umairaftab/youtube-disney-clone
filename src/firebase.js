import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB5gqurM3d5TJoTi2DN5hJoowAd-KEBFPg",
  authDomain: "disneyplus-clone-de711.firebaseapp.com",
  projectId: "disneyplus-clone-de711",
  storageBucket: "disneyplus-clone-de711.appspot.com",
  messagingSenderId: "669763952196",
  appId: "1:669763952196:web:0bd6de592b7367f5372611",
  measurementId: "G-SDXNZ5ETKG",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, provider, storage };
export default db;
