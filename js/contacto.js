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

/*Boton Oscuro*/

btnMenu.addEventListener('click', mostrar);

const boscuro = document.querySelector('.BotonOscurobutton');
        const cuerpo = document.querySelector('body');

        boscuro.addEventListener('click', e => {
            cuerpo.classList.toggle('ModoOscuro')
        })



const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        apellidos:/^[a-zA-ZÀ-ÿ\s]{1,40}$/,// Letras y espacios, pueden llevar acentos.
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ //correo@correo.com
    }
/*Objeto campos para comprobar si se han validado todos los campos del formulario */
const campos = {
    nombre:false,
    apellidos:false,
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
        case "Apellido":
            validarCampo(expresiones.apellidos, e.target, 'apellido')
        break;
        case "Email":
            validarCampo(expresiones.email, e.target, 'email')
        break;
    }
}

const validarCampo = (expresion, input, campo) => {
    /*Compruebo si no es valido el input mandado y si no es valido muestra el mensaje de error */
    if(!expresion.test(input.value)){
        document.querySelector(`#grupo_${campo} .formulario__input-error`).classList.add('formulario_input-error-activo')
    }else{
        document.querySelector(`#grupo_${campo} .formulario__input-error`).classList.remove('formulario_input-error-activo')
        //Cuando sea valido cambio el campo a true
        campos[campo] = true;
    }
}


const formulario= document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');/* Cojo en un array todos los inputs del formulario*/

inputs.forEach((input) => {
    //Recorro todos los inputs y valido cuando se suelta una tecla o cuando salimos del foco
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
})

formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault();
    /*Compruebo que todo este true para confirmar y resetear el formulario */
    if( campos.nombre && campos.apellidos && campos.email && comprobarCaptcha()){
        alert("Gracias por tus comentarios.");
        formulario.reset();
    }
})

/*Captcha*/

let text;
let x;
let y;

function Captcha(){
    x= Math.floor((Math.random() * 10));
    y= Math.floor((Math.random() * 10));

    text = `${x} + ${y}`;
    document.getElementsById("Captcha").value = text;
}

function comprobarCaptcha(){
    let textComprobar = document.getElementsById('textoCaptcha').value;

    if (textComprobar == (x + y)) {
        return true;
    }
}

