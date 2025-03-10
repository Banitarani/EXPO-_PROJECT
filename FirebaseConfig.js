import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCp21stf68D1FmUKNNSXBdK9Wf3KTEp248",
  authDomain: "expo-firebase-40389.firebaseapp.com",
  projectId: "expo-firebase-40389",
  storageBucket: "expo-firebase-40389.firebasestorage.app",
  messagingSenderId: "139995066037",
  appId: "1:139995066037:web:6bc0fdb143ca88c2c558fc"
};

const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);