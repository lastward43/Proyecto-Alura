
//Funcion que encripta 
function encriptar(){
	let textarea = document.querySelector('textarea');
	let resultado = document.querySelector('.resultado')
	let texto = textarea.value;
	//Transformando el texto en minusculas
	texto = texto.toLowerCase()
	//.replace remplaza los elementos
	texto = texto.replace(/e/g, 'enter');
	texto = texto.replace(/i/g, 'imes');
	texto = texto.replace(/a/g, 'ai');
	texto = texto.replace(/o/g, 'ober');
	texto = texto.replace(/u/g, 'ufat');
	//El resultado es una linea de codigo que concatena el texto
	//con el valor del text area y le agregue un titulo
	resultado.innerHTML = `
	<h3>TEXTO ENCRIPTADO:</h3>
    <p>${texto}</p>
	`;
    resultado.classList.remove('texto-encriptado')

}

function desencriptar(){
	let textarea = document.querySelector('textarea');
	let resultado = document.querySelector('.resultado')
	let texto = textarea.value;

	//remplaza lo remplazado anteriormente dejando todo como deberia ser
	texto = texto.replace(/enter/g, 'e');
	texto = texto.replace(/imes/g, 'i');
	texto = texto.replace(/ai/g, 'a');
	texto = texto.replace(/ober/g, 'o');
	texto = texto.replace(/ufat/g, 'u');

	//El resultado es una linea de codigo que concatena el texto
	//con el valor del text area y le agregue un titulo
	resultado.innerHTML = `
	<h3>TEXTO DESENCRIPTADO:</h3>
    <p>${texto}</p>
	`;
    resultado.classList.remove('texto-encriptado')
}


//Esto es la funcion de copiar

function copiarTexto(){
	let textoEncriptado = document.querySelector('.resultado p'). textContent;
	//Aprovechando la API de portapapeles del navegador
	navigator.clipboard.writeText(textoEncriptado);
	alert('Texto copiado')
}

//Eventos para el boton encriptar
let botonEncriptar = document.querySelector('.btn button:nth-child(1)');
botonEncriptar.addEventListener('click', encriptar);
//Eventos para el boton de desencriptar
let botonDesencriptar = document.querySelector('.btn button:nth-child(2)');
botonDesencriptar.addEventListener('click', desencriptar);