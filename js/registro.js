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

/*Objeto campos para comprobar si se han validado todos los campos del formulario */
const campos = {
    nombre:false,
    apellidos:false,
	contraseña:false,
    email:false
}


/*Valido el formulario cogiendo el valor de name en el que estemos*/
const validarFormulario = (e) => {
    switch(e.target.name){
        case "Nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre')
            /*Mando a validarCampo la expresion para validar, el input en el que estamos para coger su valor
            y un string con el nombre para buscar dependiendo del campo */
        break;
        case "Apellidos":
            validarCampo(expresiones.apellidos, e.target, 'apellidos')
        break;
        case "Email":
            validarCampo(expresiones.email, e.target, 'email')
        break;
		case "Contraseña":
            validarCampo(expresiones.email, e.target, 'contraseña')
        break;
		case "RepiteContraseña":
            validarContraseña2();
        break;
    }
}

const validarCampo = (expresion, input, campo) => {
    /*Compruebo si no es valido el input mandado y si no es valido muestra el mensaje de error */
    if(!expresion.test(input.value)){
        document.querySelector(`#grupo_${campo} .formulario__input-error`).classList.add('formulario_input-error-activo')
		campos [campo] = false;
    }else{
        document.querySelector(`#grupo_${campo} .formulario__input-error`).classList.remove('formulario_input-error-activo')
        //Cuando sea valido cambio el campo a true
        campos[campo] = true;
    }
}

const validarContraseña2 = () =>{
	const inputcontraseña1 = document.getElementById('Contraseña')
	const inputcontraseña2 = document.getElementById('RepiteContraseña')

	if(inputcontraseña1.value !== inputcontraseña2.value){
		document.querySelector(`#grupo_repitecontraseña .formulario__input-error`).classList.add('formulario_input-error-activo')
		campos['contraseña'] = false;
	}else{
		document.querySelector(`#grupo_${campo} .formulario__input-error`).classList.remove('formulario_input-error-activo')
		//Cuando sea valido cambio el campo a true
        campos['contraseña'] = true;
        
	}
}

const registro = document.getElementById("FormularioRegistro");
const inputs = document.querySelectorAll('#FormularioRegistro input');/* Cojo en un array todos los inputs del formulario*/

inputs.forEach((input) => {
    //Recorro todos los inputs y valido cuando se suelta una tecla o cuando salimos del foco
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
})

/*Llamar al evento*/

registro.addEventListener('submit', (e) =>{
	e.preventDefault();
	const terminos = document.getElementById('terminos')
    /*Compruebo que todo este true para confirmar y resetear el formulario */
	if( campos.nombre && campos.apellidos && campos.email && campos.contraseña && terminos.checked) {
        alert("Gracias por tus comentarios.");
        formulario.reset();
    }
});


