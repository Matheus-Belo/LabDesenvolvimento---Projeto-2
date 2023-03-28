const API_URL = 'http://localhost:7070/'
const sizes = 10;
var currentPage = 0;
var tokenL = localStorage.getItem('token');

var listOfTableContent = []
var selectedUserToReservation = []
var availableDatesResponse
var savedData


//----------------------------------HTML CALLS -------------------------------------------------------------------------------------------------------------------
  
async function onClickPostCreateUsuario(){
    console.log('body prepare');
    var urlUsuario = API_URL + "/Users";
    var body = {
        nome: String(document.getElementById("nome").value),
        email: String(document.getElementById("email").value),
        documentLegal: String(document.getElementById("documentoLegal").value),
        aniversario: Date(document.getElementById("aniversario").value),
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
        senhaRepetida: String((document.getElementById("senhaRepetida").value))
    }
    console.log(body)
    const response = await fetch(urlUsuario, {
        method: "POST",
        headers: {
            'host': 'localhost:8080',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/JSON',
            'authorization': 'Bearer ' + tokenL
        },
        body: JSON.stringify(body)
    });

    let data = await response.json();
    console.log(data);
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Montar tabela no HTML com JS para usuarios
function showContentIn(data, elementId){
	table = 
"	<div>\
	  <table class=\"table table-striped\">\
		<thead>\
		  <tr>\
			<th scope=\"col\">#</th>\
			<th scope=\"col\">Nome</th>\
			<th scope=\"col\">Email</th>\
			<th scope=\"col\">Aniversario</th>\
            <th scope=\"col\">Telefone</th>\
			<th scope=\"col\">Telefone 2</th>\
            <th scope=\"col\">Documento Legal</th>\
            <th scope=\"col\">Endereço</th>\
			<th scope=\"col\">Sexo</th>\
            <th scope=\"col\">Cargo</th>\
		  </tr>\
		</thead>\
		<tbody>"+
			getTableBody(data.content)
		+
		"</tbody>\
	  </table>\
	</div>\
"
		  

	$("#"+elementId)[0].innerHTML = table
}

function getTableBody(content){
	tableBody = "";
	listOfTableContent = content
	for(i = 0; i < content.length; i++){
		tableBody +=  "<tr>\
			<th scope=\"row\">"
				+content[i]['idUser']+
			"</th>\
			<td>"+content[i]['name']+"</td>\
			<td>"+content[i]['email']+"</td>\
			<td>"+content[i]['birthDate']+"</td>\
			<td>"+content[i]['phone1']+"</td>\
            <td>"+content[i]['phone2']+"</td>\
            <td>"+content[i]['legal_document']+"</td>\
            <td>"+content[i]['address']+"</td>\
            <td>"+content[i]['sexo']+"</td>\
            <td>"+content[i]['roles']+"</td>\
			<td><button type=\"button\" class=\"page-link\" onclick=\"add("+i+")\">Anterior</button>\</td>\
		  </tr>"
	}
	return tableBody;
}

//Montar botoes de paginação
function showPagination(data, elementId, path){
	console.log(data, elementId, path)
	
	let currentPage = data['number']
	let previousPage = currentPage-1
	let totalPages = data['totalPages']
	let nextPage = totalPages-1 == currentPage? currentPage : currentPage+1
	
	
	pagesBtn = ""
	
	for(i = 0; i < totalPages; i++){
		isOnPage = currentPage == i
		
		pagesBtn += "<li class=\"page-item\"><button "+(isOnPage? "disabled": "")+
			" type=\"button\" class=\"page-link"+(isOnPage? " disabled":"")+"\" onclick=\"get('book/page/"+i+"/size/"+sizes+"', 'table_content')\">"+i+"</button></li>"
	}
	

	pagination = "<nav aria-label=\"Page navigation example\">\
	  <ul class=\"pagination\">\
		<li class=\"page-item disable\">\
		  <button "+(previousPage < 0? "disabled": "")+" type=\"button\" class=\"page-link "+(previousPage < 0? "disabled": "")+"\" onclick=\"get('book/page/"+previousPage+"/size/"+sizes+"', 'table_content')\">Anterior</button>\
		</li>"
		+pagesBtn+
		"<li class=\"page-item\">\
		  <button "+(totalPages-1 == currentPage? "disabled": "")+" type=\"button\" class=\"page-link "+(totalPages-1 == currentPage? "disabled": "")+"\" onclick=\"get('book/page/"+nextPage+"/size/"+sizes+"', 'table_content')\">Próximo</button>\
		</li>\
	  </ul>\
	</nav>"
	
	$("#"+elementId+"_pagination")[0].innerHTML =  pagination
}