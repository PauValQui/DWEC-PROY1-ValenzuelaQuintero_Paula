/*Carrusel*/
var ImgIndex = 0;
showImg();

function showImg() {
       var i;
       var slides = document.getElementsByClassName("Imagenes");
       for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
       }
       ImgIndex++;
       if(ImgIndex > slides.length) {ImgIndex = 1}
       slides[ImgIndex-1].style.display = "block";
       setTimeout(showImg,3000);
}


/*Funcion del menu desplegable*/

const btnMenu= document.getElementById("btnMenu")
const menu=document.getElementById("menu")

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