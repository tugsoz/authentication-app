import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCMGHo5rmIClaThyw1pNucEmmTL4YZF95Y",
    authDomain: "authentication-app-30fb1.firebaseapp.com",
    projectId: "authentication-app-30fb1",
    storageBucket: "authentication-app-30fb1.appspot.com",
    messagingSenderId: "877190670875",
    appId: "1:877190670875:web:e7d7af84f0e3d1b64b26be",
    measurementId: "G-D5QSZ5JFD7"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)