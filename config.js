// config.js
const { initializeApp } = require("firebase/app");
const { getFirestore, collection } = require("firebase/firestore");

const firebaseConfig = {
    apiKey: "ApiKet",
    authDomain: "authDomain",
    projectId: "fir-projectId",
    storageBucket: "storageBucket",
    messagingSenderId: "messagingSenderId",
    appId: "1:appId",
    measurementId: "G-measurementId"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Reference to the 'Users' collection
const User = collection(db, "Users");

module.exports = User;
