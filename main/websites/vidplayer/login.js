// variables
var attempts = 5;

// function
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == "DaBESTAdmin1ntheworLd"){
        alert("Login Successful");
        window.location = "success.html";
        return false;
    }
    else {
        attempts --;
        alert("You have left "+attempt+" attempt;");
        if( attempt == 0){
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
            }
    }
}