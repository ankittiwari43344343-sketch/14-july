import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
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
const db = getDatabase(app);

const searchInput = document.getElementById("searchInput");
const results = document.getElementById("results");

searchInput.addEventListener("input", searchUsers);

function searchUsers() {

const search = searchInput.value.toLowerCase().trim();

results.innerHTML = "";

if(search === "") return;

get(ref(db,"users")).then((snapshot)=>{

snapshot.forEach((child)=>{

const user = child.val();

const username = (user.username || "").toLowerCase();
const userid = (user.userid || "").toLowerCase();
const name = (user.name || "").toLowerCase();

if(
username.includes(search) ||
userid.includes(search) ||
name.includes(search)
){

results.innerHTML += `
<div class="card">

<div class="icon">👤</div>

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

if(results.innerHTML===""){
results.innerHTML="<h3>No user found.</h3>";
}

});

}
