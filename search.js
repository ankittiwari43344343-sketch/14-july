import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "july-f8b7b.firebaseapp.com",
  databaseURL: "https://july-f8b7b-default-rtdb.firebaseio.com",
  projectId: "july-f8b7b",
  storageBucket: "july-f8b7b.firebasestorage.app",
  messagingSenderId: "680464782562",
  appId: "1:680464782562:web:e35746ae4a958d58be7abb"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const input = document.getElementById("searchInput");
const results = document.getElementById("results");

input.addEventListener("input", () => {

const text = input.value.toLowerCase().trim();

results.innerHTML = "";

if(text=="") return;

get(ref(db,"users")).then((snapshot)=>{

snapshot.forEach((child)=>{

const user = child.val();

const username = (user.username || "").toLowerCase();
const userid = (user.userid || "").toLowerCase();

if(username.includes(text) || userid.includes(text)){

results.innerHTML += `
<div class="card">

<h3>${user.name}</h3>

<p>@${user.username}</p>

<p>🆔 ${user.userid}</p>

<a href="user.html?uid=${child.key}">
<button>View Profile</button>
</a>

</div>
`;

}

});

});

});
