// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTsly7448w0gwEHdj46MDj3Dn8lI_Okn8",
  authDomain: "reactfirebaserouter.firebaseapp.com",
  projectId: "reactfirebaserouter",
  storageBucket: "reactfirebaserouter.firebasestorage.app",
  messagingSenderId: "72791987498",
  appId: "1:72791987498:web:9cedd43ef11e0626887a53",
  measurementId: "G-WHJM0SQ6N6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)
