import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";

import {
getAuth
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

import {
getFirestore
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

import {
getStorage
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-storage.js";

const firebaseConfig = {
apiKey: "AIzaSyBASnCv4bgXK8qr0T7VehzmOqthubv7vm4",
authDomain: "autopay-a8ee7.firebaseapp.com",
projectId: "autopay-a8ee7",
storageBucket: "autopay-a8ee7.firebasestorage.app",
messagingSenderId: "460380197271",
appId: "1:460380197271:web:ffc07c79dd6e0ffd2d74d2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);