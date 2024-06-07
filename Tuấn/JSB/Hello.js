var users = [
    { username: "user1", password: "password1" }, 
    { username: "user2", password: "password2" },
    { username: "user3", password: "password3" }
  ];
document.getElementById("registerForm").addEventListener ("submit",function(event) {event.preventDefault();

var registerUserName = document.getElementById("registerName"). value;
var registerUserPassword = document.getElementById("registerPassword"). value;

var existingUser = users.find(function (user){
    return user.username == registerUserName && user.password == registerUserPassword;
})

if(existingUser) {
    alert("bị trùng tài khoản")
}

else {
    users.push ({username: registerUserName, password: registerUserPassword})
    alert("Đăng ký thành công")
}

});

document.getElementById("logInForm").addEventListener ("submit",function(event) { event.preventDefault();

var logInUserName = document.getElementById("logInName"). value;
var logInPassword = document.getElementById("logInPassword"). value;

var foundUser = users.find(function (user){
    return user.username == logInUserName && user.password == logInPassword });

    if (foundUser) {
        alert("Đăng Nhập Thành Công");
        window.location.href="Home.html"
    }

    else {
        alert("Đăng Nhập Thất bại")
    }

});
