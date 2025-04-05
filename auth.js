//this is my auth.js file
// Function for User Signup

function signup() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            let user = userCredential.user;
            db.collection("users").doc(user.uid).set({
                email: user.email,
                createdAt: new Date(),
                provider: "email"
            });
            alert("Signup successful!");
            window.location.href = "index.html";
        })
        .catch(error => alert(error.message));
}
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("googleSignInBtn").addEventListener("click", googleLogin);
  });
  
// Function for User Login
function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert("Login successful!");
            window.location.href = "index.html";
        })
        .catch(error => alert(error.message));
}

// Function for Google Login
function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    
    auth.signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            db.collection("users").doc(user.uid).get()
                .then(doc => {
                    if (!doc.exists) {
                        db.collection("users").doc(user.uid).set({
                            email: user.email,
                            name: user.displayName,
                            photoURL: user.photoURL,
                            createdAt: new Date(),
                            provider: "google"
                        });
                    }
                    alert("Google login successful!");
                    window.location.href = "index.html";
                });
        }).catch((error) => {
            alert(error.message);
        });
        auth.onAuthStateChanged(user => {
            if (user) {
              window.location.href = "index.html"; // Redirect to dashboard/homepage
            }
          });
          

}

