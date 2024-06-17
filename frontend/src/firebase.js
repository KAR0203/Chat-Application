
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
            apiKey: "AIzaSyCtYElz05DAgZiRuuIkwzI6oPPrRWVDTLA",
            authDomain: "real-time-chat-applicati-622e6.firebaseapp.com",
            projectId: "real-time-chat-applicati-622e6",
            storageBucket: "real-time-chat-applicati-622e6.appspot.com",
            messagingSenderId: "779080163477",
            appId: "1:779080163477:web:d49bc71128cf3176b13b9c",
            measurementId: "G-EWX2Z71N4K"
          };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };


