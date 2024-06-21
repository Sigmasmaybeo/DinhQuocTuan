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
    alert("Are you serious right now bro?");
    return;
  }

  users.push({ username: registerName, password: registerPassword });
  setUsers(users);
  alert("Add account compelete you may login right now!");
  window.location.href = "login.html";

})


document.getElementById("buttonLogIn").addEventListener('click', function(event) {
    event.preventDefault();
    var loginName = document.getElementById("LogInName").value;
    var loginPassword = document.getElementById("LogInPassword").value;

    if(!loginName || !loginPassword) {
        alert("Fill all to login.");
        return;
    }
    const users = getUsers();
    const user = users.find(
        (user) => user.username === loginName && user.password === loginPassword
      );

      if (user) {
        alert("login compelete!");
        window.location.href = "Home.html";
      }else {
        alert("Can't find account")
      }
})


