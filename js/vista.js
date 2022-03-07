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

/*Boton Ver Más*/

function VerMas(){
    if(document.getElementById('Vermas').style.display=='block'){
        document.getElementById('Vermas').style.display='none';
    }else {
        document.getElementById('Vermas').style.display='block'
    }
}


