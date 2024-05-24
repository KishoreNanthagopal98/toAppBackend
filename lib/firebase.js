const { initializeApp } = require("firebase/app");
// const { getFirestore, doc, setDoc } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DBURL,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STOARAGEBUCKET,
  messagingSenderId: process.env.MSGSENDERID,
  appId: process.env.APPD
};

let app;
// Initialize Firebase
const initilizeFirbase = () => {
    try {
        app = initializeApp(firebaseConfig);
        return app;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

const firebasepp = () => app;

module.exports = { initilizeFirbase, firebasepp };
