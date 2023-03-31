async function Loged(){
    let isLoged = "";

    if(localStorage.getItem('token') !== null && localStorage.getItem('token') !== "undefined"){
        isLoged += `<a href="Usuarios.html" class="btn btn-success btn active" role="button" aria-pressed="true">Perfil</a>`
        isLoged += `<a href="index.html" class="btn btn-danger btn active ms-2" role="button" aria-pressed="true" onclick="LogOut()">Log Out</a>`
        this.Access();
    }else{
        isLoged += `<a href="login.html" class="btn btn-danger btn active" role="button" aria-pressed="true">Login</a>`
    }

    document.getElementById("Login").innerHTML = isLoged
}

async function LogOut(){
    localStorage.removeItem('token');
}

async function AccessInCars(){
    let AdminCarros = "";

    if(localStorage.getItem('token') !== null && localStorage.getItem('token') !== "undefined"){
        AdminCarros += `<a class="nav-link active" href="RegistrarCarros.html">Carros</a>`
    }else{
        AdminCarros += `<a class="nav-link active" href="Carros.html">Carros</a>`
    }

    document.getElementById("VerifyAccess").innerHTML = AdminCarros
}

async function Access(){
    let AdminCarros = "";

    if(localStorage.getItem('token') !== null && localStorage.getItem('token') !== "undefined"){
        AdminCarros += `<a class="nav-link" href="RegistrarCarros.html">Carros</a>`
    }else{
        AdminCarros += `<a class="nav-link" href="Carros.html">Carros</a>`
    }

    document.getElementById("VerifyAccess").innerHTML = AdminCarros
}

