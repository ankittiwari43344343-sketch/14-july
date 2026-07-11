document.getElementById("saveBtn").addEventListener("click", () => {
    alert("Profile saved!");
});

document.getElementById("logoutBtn").addEventListener("click", () => {
    alert("Logged out!");
    window.location.href = "login.html";
});
