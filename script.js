const switchto = document.getElementById("switch");
const logintitle = document.getElementById("login-title");
const logindetail = document.getElementById("login-detail");
const register = document.getElementById("register");
const message = document.getElementById("message");
const role= document.getElementById("role");
const opt=document.getElementById(".opt");

let isLogin = true;

switchto.addEventListener("click", function(event) {
    event.preventDefault();
    
    if (isLogin) {
        
        logindetail.style.display = "none";
        register.style.display = "block";

        
        logintitle.textContent = "Sign Up";
        switchto.textContent = "Login";
        switchto.parentElement.firstChild.textContent = "Already have an account? ";
    } else {
        
        logindetail.style.display = "block";
        register.style.display = "none";

        
        logintitle.textContent = "Login";
        switchto.textContent = "Sign Up";
        switchto.parentElement.firstChild.textContent = "Don't have an account? ";
    }
    isLogin = !isLogin;
    
});
logindetail.addEventListener("submit", function(event) {
    event.preventDefault();
     window.location.href = "dashboard.html";

});
const registerForm = document.getElementById("register");

registerForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("reg-name").value;
    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;
    const confirm = document.getElementById("reg-confirm").value;
    const city = document.getElementById("reg-city").value;

    if(password !== confirm){
        alert("Passwords do not match!");
        return;
    }
    const user = { name, email, password, city };
    localStorage.setItem("currentUser", JSON.stringify(user));

    alert("Registration successful!");
    window.location.href = "dashboard.html";
});