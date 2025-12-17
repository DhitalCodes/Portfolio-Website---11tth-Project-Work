function validate() {
    var username = document.getElementById("uname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;

    if (username === "" || email === "" || password === "") {
        alert("No blank values are allowed");
        return false;
    }

    if (username.length < 3) {
        alert("Username must be at least 3 characters long");
        return false;
    }
    if (username.indexOf(" ") >= 0) {
        alert("No spaces are allowed in the user name");
        return false;
    }

    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        alert("Please enter a valid email address");
        return false;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long");
        return false;
    }

    if (password.indexOf(" ") >= 0) {
        alert("No spaces are allowed in the password");
        return false;
    }

    var hasLetter = /[a-zA-Z]/.test(password);
    var hasNumber = /[0-9]/.test(password);

    if (!hasLetter || !hasNumber) {
        alert("Password must contain at least one letter and one number");
        return false;
    }

    else{
        return true;

    }
}
