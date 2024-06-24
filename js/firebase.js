// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC_SDfpgCtqlcAadiridLPwvRQoWx0ZNDE",
    authDomain: "truckload-dn.firebaseapp.com",
    databaseURL: "https://truckload-dn-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "truckload-dn",
    storageBucket: "truckload-dn.appspot.com",
    messagingSenderId: "900481280800",
    appId: "1:900481280800:web:1b36f5a0a1e56c1c6d0545",
    measurementId: "G-TN2YHGKBZ7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const myAppDB = firebaseApp.database();
const auth = firebaseApp.auth();

