import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDWkJ9SEN3iYkk8vbirfZa4RftMQYSccrM",
    authDomain: "vue-chat-62367.firebaseapp.com",
    projectId: "vue-chat-62367",
    storageBucket: "vue-chat-62367.appspot.com",
    messagingSenderId: "661731622194",
    appId: "1:661731622194:web:df445769c0b4dd2f0a6b2b"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;