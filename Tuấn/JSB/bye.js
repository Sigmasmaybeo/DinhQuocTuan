document.addEventListener("DOMContentLoaded", (event) => {
  
    function getUsers() {
      const users = localStorage.getItem("users"); 
      return users ? JSON.parse(users) : []; 
    }

document.getElementById('buttonLogin').addEventListener('click', function(event) {
    event.preventDefault();
  
      var loginName = document.getElementById("logInName").value;
      var loginPassword = document.getElementById("logInPassword").value;
  
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
  });
});
  
  