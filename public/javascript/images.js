import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebase = require('firebase');

// Set the configuration for your app
const firebaseConfig = {
  storageBucket: 'wineshare-fc74b.appspot.com'
};
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(firebaseApp);



//module.exports = images;