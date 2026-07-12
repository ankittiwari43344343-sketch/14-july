import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import {
  getDatabase,
  ref,
  set,
  get
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

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

auth.onAuthStateChanged((user) => {

  if (!user) {
    window.location.href = "login.html";
    return;
  }

  const uid = user.uid;

  // Load existing profile
  get(ref(db, "users/" + uid)).then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();

      document.getElementById("name").value = data.name || "";
      document.getElementById("dob").value = data.dob || "";
      document.getElementById("bio").value = data.bio || "";
    }
  });

  // Save profile
  document.getElementById("saveBtn").addEventListener("click", () => {

    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const bio = document.getElementById("bio").value;

    set(ref(db, "users/" + uid), {
      name: name,
      dob: dob,
      bio: bio,
      email: user.email
    }).then(() => {
      alert("Profile saved successfully!");
    });

  });

});
