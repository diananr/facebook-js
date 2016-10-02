window.addEventListener("load", cargaPagina);

var caja = document.getElementById("cajaTexto");

function cargaPagina(){
	caja.addEventListener("click", resaltardiv);
	var btnPublicar = document.getElementById("btn");
	btnPublicar.addEventListener("click", publicarPost);
}
function resaltardiv(){
	caja.textContent = "";
}
function publicarPost(){
	var publicaciones = document.getElementById("publicaciones");
	
	var nuevoPost = document.createElement("div");
	var caraimg = document.createElement("div");
	var nombreimg = document.createElement("span");
	var contenHora = document.createElement("div");
	var texto = document.createElement("div");

	texto.textContent = caja.textContent;

	nuevoPost.classList.add("nuevoPost");
	caraimg.classList.add("caraimg");
	nombreimg.classList.add("nombre");
	contenHora.classList.add("horaPubli");

	var fecha = new Date();
	var hora = fecha.getHours();
	var min = fecha.getMinutes();
	contenHora.textContent = hora + ":" + min;

	nombreimg.textContent = "Maya";

	publicaciones.insertBefore(nuevoPost, publicaciones.childNodes[0]);
	nuevoPost.insertBefore(caraimg, nuevoPost.childNodes[0]);
	nuevoPost.insertBefore(nombreimg, nuevoPost.childNodes[1]);
	nuevoPost.insertBefore(contenHora,nuevoPost.childNodes[2]);
	nuevoPost.insertBefore(texto, nuevoPost.childNodes[3]);
	
	caja.textContent = "";
}