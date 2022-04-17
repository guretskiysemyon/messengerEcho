const userData = new Map();

userData.set("Semyon","psw100")
userData.set("Borys","exm100")

//const dataNickName = new Map();

// test input

function msgBox(msg) {
    if (msg !== undefined) {
        document.getElementById("boxTxt").innerHTML = msg;
        document.getElementById("boxBack").classList.add("show");
    } else { document.getElementById("boxBack").classList.remove("show"); }
}

//Log in 


function logIn() {
    
    console.log("entered")
    //collect form data in JavaScript variables  
    const pw = document.getElementById("inputPassword").value;
    const userName = document.getElementById("inputUser").value;

    //check empty nickname field  
    if (userName === "") {
        msgBox("Fill the first name");
        return;
    }

    //check empty password field  
    if (pw === "") {
        msgBox("Fill the password please!");
        return;
    }
    
    const realPsw = userData.get(userName);
    console.log(realPsw)
    if (realPsw === undefined){
        msgBox("Wrong Nickname.")
    }
    if (realPsw === pw){
        window.location.replace("ManePage.html");

    }
    
}

//SignUp

function signUp() {
    //collect form data in JavaScript variables  
    const user = document.getElementById("username").value;
    const nick = document.getElementById("nickname").value;
    const pw = document.getElementById("password").value;
    const checkPw = document.getElementById("check-pswrd").value;


    //check empty user user field  
    if (user === "") {
        msgBox("Fill the user name.");
        return;
    }
    if (userData.has(user)){
        msgBox("This username is already taken.")
        return;
    }

    if (nick === "") {
        msgBox("Fill the nickname");
        return;
    }

    //check empty password field  
    if (pw === "" || checkPw === "") {
        msgBox("Fill the password please!");
        return;
    }
    let checkPas = checkPassword(pw, checkPw);
    
    
    if (checkPas !== true) {
        msgBox(checkPas)
        return;
    }
    
    userData.set(user, pw)
    window.location.replace("Login.html");
    //check empty first nickname field

    msgBox("Success!")

}

function checkPassword(pw, pw2){
    if(!(/\d/.test(pw)))
        return "Password has to include digits and letters."
    if(!(/[a-zA-Z]/.test(pw)))
        return "Password has to include digits and letters."
    if (pw !== pw2)
        return "Passwords doesn't match."
    return true;
}