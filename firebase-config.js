//this is my firebase-config.js file
if (!firebase.apps.length) {
    const firebaseConfig = {
        apiKey: "AIzaSyBeuahpyrqwsjnq-gRhbZBrjBYndpgW_zM",
        authDomain: "instamech-43e72.firebaseapp.com",
        projectId: "instamech-43e72",
        storageBucket: "instamech-43e72.appspot.com",
        messagingSenderId: "228912429615",
        appId: "1:228912429615:web:64abdd4f005f3303d2e4da",
        measurementId: "G-WXPZ7484GZ"
    };

    firebase.initializeApp(firebaseConfig);
}

// ✅ Declare globally so you can use in other scripts
const auth = firebase.auth();
const db = firebase.firestore();