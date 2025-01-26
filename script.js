// Import and configure Firebase
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page
    const email = document.getElementById("email").value; // Updated ID
    const password = document.getElementById("password").value; // Updated ID

    // Sign in with Firebase
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            alert("Login successful!");
            window.location.href = "search.html"; // Navigate to search page
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Error: " + errorMessage); // Show error message
        });
});
