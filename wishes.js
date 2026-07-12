import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAkMzgmF8NRPdX0weTJ1yqo2HIUSil2OQ0",
  authDomain: "july-f8b7b.firebaseapp.com",
  databaseURL: "https://july-f8b7b-default-rtdb.firebaseio.com",
  projectId: "july-f8b7b",
  storageBucket: "july-f8b7b.firebasestorage.app",
  messagingSenderId: "680464782562",
  appId: "1:680464782562:web:e35746ae4a958d58be7abb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

onAuthStateChanged(auth, (user) => {

  if (!user) {
    window.location.href = "login.html";
    return;
  }

  document.getElementById("sendBtn").addEventListener("click", () => {

    const receiver = document.getElementById("receiver").value;
    const message = document.getElementById("wish").value;

    if (receiver === "" || message === "") {
      alert("Please fill in all fields.");
      return;
    }

    push(ref(db, "wishes"), {
      from: user.email,
      to: receiver,
      message: message,
      time: new Date().toLocaleString()
    })
    .then(() => {
      alert("🎉 Birthday wish sent successfully!");
      document.getElementById("receiver").value = "";
      document.getElementById("wish").value = "";
    })
    .catch((error) => {
      alert(error.message);
    });

  });

});
