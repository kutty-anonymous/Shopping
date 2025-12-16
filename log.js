
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Import the functions you need from the SDKs you need




// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics


// Add Firebase products that you want to use

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIa_smDboc6cnswt9NZ01XtRuI0prX3Zs",
    authDomain: "login-with-firebase-fe463.firebaseapp.com",
    databaseURL: "https://login-with-firebase-fe463-default-rtdb.firebaseio.com",
    projectId: "login-with-firebase-fe463",
    storageBucket: "login-with-firebase-fe463.appspot.com",
    messagingSenderId: "465038431062",
    appId: "1:465038431062:web:216dc23532e9a13c123cf7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/*
const firebaseConfig = {
    apiKey: "AIzaSyA2i5i9f7cNlYWUnYpwhoy2CsD_bHAEizg",
    authDomain: "shoping-bbe96.firebaseapp.com",
    projectId: "shoping-bbe96",
    storageBucket: "shoping-bbe96.appspot.com",
    messagingSenderId: "73705768776",
    appId: "1:73705768776:web:60d103fe0928413314557d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app)
document.getElementById('submit').addEventListener("click", function (e) {

    set(ref(db, 'user/' + document.getElementById('Name').value), {
        username: document.getElementById('Name').value,
        password: document.getElementById('Password').value
    });
    alert("Login success...")
})

function passCheck() {
    //name and password


    }
}*/
function freeze(secs) {
    var waituntil = performance.now() + secs * 1000;
    while (performance.now() < waituntil);
}
function saa(url) {
    var audio = new Audio(url);
    audio.play();
}
const mail = document.getElementById("email").value;
const pass = document.getElementById("password").value;
const sub = document.getElementById("submit");
sub.addEventListener("click", function (even) {
    event.preventDefault()
    alert(5)
})
/*if (username == "kutty" && userpass == "kutty") {
    alert("Wellcome my Queen");
    window.location.href = ""
    window.location.href = "Chat/chat.html"
    return false;
} else {
    window.location.href = "test.html"
    alert("Password Wrong Not Allowed....");
    freeze(5);
*/

