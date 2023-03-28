function login(){
    let user = document.getElementById("Username").value;
    let pass = document.getElementById("Password").value;

    if(user === "admin" && pass === "admin"){
        window.location.href = "http://www.w3schools.com";
    }
}