import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

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

  const messages = document.getElementById("messages");

  get(ref(db, "wishes/" + user.uid)).then((snapshot) => {

    messages.innerHTML = "";

    if (!snapshot.exists()) {
      messages.innerHTML = "<h3>No birthday wishes yet ❤️</h3>";
      return;
    }

    snapshot.forEach((child) => {

      const wish = child.val();

      messages.innerHTML += `
        <div class="message">
          <div class="sender">🎉 ${wish.from}</div>
          <div class="text">${wish.message}</div>
        </div>
      `;

    });

  });

});
