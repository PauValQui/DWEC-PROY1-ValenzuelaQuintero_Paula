/*Funcion del menu desplegable*/
function mostrar(){

    const height = menu.scrollHeight;
    if(menu.classList.contains("desplegar")){
        menu.classList.remove("desplegar");
        menu.removeAttribute("style");
    }else{
        menu.classList.add("desplegar");
        menu.style.height = height + "px";
    }

    menu.classList.toggle("mostrar");

}

btnMenu.addEventListener('click', mostrar);

/*Boton Oscuro*/

const boscuro = document.querySelector('.BotonOscurobutton');
        const cuerpo = document.querySelector('body');

        boscuro.addEventListener('click', e => {
            cuerpo.classList.toggle('ModoOscuro')
        })


/*Creo una constante expresiones con las validaciones de cada variable */

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	apellidos:/^[a-zA-ZÀ-ÿ\s]{1,40}$/,// Letras y espacios, pueden llevar acentos.
	contraseña: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ //correo@correo.com
}

/*Creo las variables que voy a utilizar */

let registro = document.getElementsByClass("Registrarse");
let nombre = document.getElementsByClassName("Nombre");
let apellido = document.getElementsByClassName("Apellido");
let email = document.getElementsByClassName("Email");
let contraseña = document.getElementsByClassName("Contraseña");
let repiteContraseña = document.getElementsByClassName("RepiteContraseña");
let terminos = document.getElementById("terminos");

/*Llamar al evento*/

registro.addEventListener('submit', (e) =>{
	e.preventDefault();

	if(!validaNombre() && !validaApellido() && !validaEmail() && !validaContraseña && !validaRepetirContraseña() && !terminos.checked){
		document.getElementsById('formulario_mensaje').style.display="block";
	}else{
		registro.reset()
	}
});

/*Validar Nombre */

function validaNombre(){
	if(nombre.value==""){
		nombre.nextElementSibling.style.display="block";
	}else{
		if(!nombre.match(expresiones.nombre)){
			nombre.nextElementSibling.style.display="block";
		}else{
			return true;
		}
	}
}

/*Validar Apellido */

function validaApellido(){
	if(apellido.value==""){
		apellido.nextElementSibling.style.display="block";
	}else{
		if(!apellido.match(expresiones.apellido)){
			apellido.nextElementSibling.style.display="block";
		}else{
			return true;
		}
	}
}

/*Validar Email*/

function validaEmail(){
	if(email.value==""){
		email.nextElementSibling.style.display="block";
	}else{
		if(!email.match(expresiones.email)){
			email.nextElementSibling.style.display="block";
		}else{
			return true;
		}
	}
}

/*Validar Contraseña */

function validaContraseña(){
	if(contraseña.value==""){
		contraseña.nextElementSibling.style.display="block";
	}else{
		if(!contraseña.match(expresiones.contraseña)){
			contraseña.nextElementSibling.style.display="block";
		}else{
			return true;
		}
	}
}


/*Validar Repetir Contraseña */

function validaRepetirContraseña(){
	if (repiteContraseña.value != contraseña.value) {
		repiteContraseña.nextElementSibling.style.display="block";
	}else{
		return true;
	}
}
