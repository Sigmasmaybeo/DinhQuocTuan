document.addEventListener("DOMContentLoaded", (event) => {
  


function getUsers () {
    const users = localStorage.getItem('users')
    return users ? JSON.parse(users) : [];
}

function setUsers(users) {
    localStorage.setItem('users',JSON.stringify(users));
}


document.getElementById('buttonRegister').addEventListener('click', function(event) {
    event.preventDefault();

var registerName = document.getElementById("registerName").value;
var registerPassword = document.getElementById("registerPassword").value;
var registerEmail = document.getElementById("registerEmail").value;

if (!registerName || !registerPassword || !registerEmail) {
    alert("Fill all please if you want to create a account."); 
    return;
  }

  const users = getUsers ();
  const AlreadyUser = users.find((user) => user.username === registerName);

  if (AlreadyUser) {
    alert("This account already exist");
    return;
  }

  users.push({ username: registerName, password: registerPassword });
  setUsers(users);
  alert("Add account compelete you may login right now!");
  window.location.href = "login.html";

});
})

          