var originalUsername = 'vignesh@test.com';
var originalPassword = 'test123';
var login = document.getElementById('login-button')
login.addEventListener('click', function(event){
    event.preventDefault();
    var username = document.getElementById('username').value
    var pasword = document.getElementById('password').value
    console.log(username)
    console.log(pasword)

    if (originalUsername.match(username) && 
        originalPassword.match(pasword)) {
           alert("Login Sucess")        
        } else {
           alert("Invalid credentials")
        }
        var frm = document.getElementById('login-form');
        frm.reset();
})