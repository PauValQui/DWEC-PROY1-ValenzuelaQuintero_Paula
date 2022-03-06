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
/*Creo las variables que voy a utilizar */

let nombre = document.getElementsByClassName("Nombre");
let apellido = document.getElementsByClassName("Apellido");
let email = document.getElementsByClassName("Email");

        
/*Validar Nombre */
        
function validaNombre(){
    if(nombre==""){
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
    if(apellido==""){
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
    if(email==""){
        email.nextElementSibling.style.display="block";
    }else{
        if(!email.match(expresiones.email)){
            email.nextElementSibling.style.display="block";
        }else{
            return true;
        }
    }
}

/*Captcha*/

let text, x, y, z;

function Captcha(){
    x= Math.floor((Math.random() * 10));
    y= Math.floor((Math.random() * 10));

    text = `${x} + ${y}`;
    document.getElementsById('Captcha').value = text;
}

function comprobarCaptcha(){
    let textComprobar = document.getElementsById('textoCaptcha').value;

    if (textComprobar == (x + y)) {
        return true;
    }
}

/*Comprobar y resetear formulario */

let formulario= document.getElementsById('formulario');

formulario.addEventListener('click', (e)=>{
    e.preventDefault();

    if(validaNombre() && validaEmail() && validaApellido() && comprobarCaptcha()){
        alert("Gracias por tus comentarios.");
        formulario.reset();
    }
})