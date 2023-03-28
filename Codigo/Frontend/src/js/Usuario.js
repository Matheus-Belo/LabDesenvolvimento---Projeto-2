let url = "http://localhost:9999";
localStorage.setItem('token', "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBhZG1pbi5jb20iLCJleHAiOjE2ODAwNjIxOTYsImlhdCI6MTY4MDA0NDE5Nn0.a7Dr_QOAJm02q6dHjkMaol5St0Xpw8oTFgq1dQEurRrd-xAlponfT0kWmQNSOtFfj_C4KMrl_ILOfP_E2W5K8g")
let token = localStorage.getItem('token');
let user = [];

async function Test(){
    const testData = await fetch(url + '/user/page/0/size/100', {
        method: "GET",
        headers: {
            'host': 'localhost:9999',
            'Access-Control-Allow-Origin': '*/*',
            'Content-Type': 'application/JSON',
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            'authorization': 'Bearer ' + token
        }
    });
    console.log(testData);

    var DadosTest = await JSON.stringify(testData);

    console.log(DadosTest);

}

$(document).ready(function () {
    var table = $('#Usuarios').DataTable({
        ajax: {
            urlUsers: url + '/user/page/0/size/100',
            dataSrc: "content",
        },
    });

 
    $('#Usuarios tbody').on('click', 'tr', function () {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    });

    $('#CreateUser').on('click', function () {
        
    });
 
    $('#DeletarUsuario').click(function () {
        table.row('.selected').remove().draw(false);
    });
});

async function CreateUser(){
	var DataNew = (document.getElementById("ano").value) + '/' + 
    (document.getElementById("mes").value) + '/' + 
    (document.getElementById("dia").value)

    const d = new Date(DataNew);
    console.log('body prepare');
    var body = {
        nome: String(document.getElementById("nome").value),
        email: String(document.getElementById("email").value),
        documentLegal: String(document.getElementById("documentoLegal").value),
        aniversario: d,
        phone1: String((document.getElementById("phone1").value)),
        phone2: String((document.getElementById("phone2").value)),
        sexo: String((document.getElementById("sexo").value)),
        estado: String((document.getElementById("estado").value)),
        cidade: String((document.getElementById("cidade").value)),
        rua: String((document.getElementById("rua").value)),
        numeroCasa: String((document.getElementById("numeroCasa").value)),
        destrito: String((document.getElementById("destrito").value)),
        zip: String((document.getElementById("zip").value)),
        senha: String((document.getElementById("senha").value)),
        acessso: String((document.getElementById("acesso").value))
    }

	if((ValidateCreate(	(document.getElementById("nome").value,
						document.getElementById("email").value,
						document.getElementById("documentoLegal").value,
						d,
						document.getElementById("phone1").value,
						document.getElementById("sexo").value,
						document.getElementById("estado").value,
						document.getElementById("cidade").value,
						document.getElementById("rua").value,
						document.getElementById("numeroCasa").value,
						document.getElementById("destrito").value,
						document.getElementById("zip").value,
						document.getElementById("senha").value))) == true){

        urlUser = url + "/user/create";
        const response = await fetch(urlUser, {
            method: "POST",
            headers: {
                'host': 'localhost:9999',
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/JSON',
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                'authorization': 'Bearer ' + token
            },
            body: JSON.stringify(body)
        });
        alert("Cadastro registrado com sucesso!");
		console.log(data);
	 }else{
		alert("Um ou mais campos vazios");
	}

}

async function ValidateCreate(nome, email, documentLegal, aniversario, phone1, sexo, estado, cidade, rua, numeroCasa, destrito, zip, senha, acesso){
	if(nome === null) return false;
	if(email === null) return false;
	if(documentLegal === null) return false;
	if(aniversario === null) return false;
	if(phone1 === null) return false;
	if(sexo === null) return false;
	if(estado === null) return false;
	if(cidade === null) return false;
	if(rua === null) return false;
	if(numeroCasa === null) return false;
	if(destrito === null) return false;
	if(zip === null) return false;
	if(senha === null) return false;
    if(acesso === null) return false;
	else return true;

}

async function getUserById() {
    let urlIdUser = url + "/user/getuserbyid/userId/" + 1;

    const response = await fetch(urlIdUser, {
        method: "GET",
        headers: {
            'host': 'localhost:9999',
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            'authorization': 'Bearer ' + token
        }
    });

    let data = await response.json();
    console.log(data);
}

async function getTableUsers(){

}