// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWkJ9SEN3iYkk8vbirfZa4RftMQYSccrM",
  authDomain: "vue-chat-62367.firebaseapp.com",
  projectId: "vue-chat-62367",
  storageBucket: "vue-chat-62367.appspot.com",
  messagingSenderId: "661731622194",
  appId: "1:661731622194:web:df445769c0b4dd2f0a6b2b"
};

const app = initializeApp(firebaseConfig);

// Firestoreインスタンスを取得
const db = getFirestore(app);

export { db };

// Initialize Firebase
// const firebase = initializeApp(firebaseConfig);

// export default firebase;