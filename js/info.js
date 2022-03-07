
document.addEventListener("DOMContentLoaded", function () {
    getInfoLibros(getId)
})


/*Con esta funcion saco de la url el id que le he pasado desde ApiBuscar */
function getId(){
    const String = window.location.search;
    const url = new URLSearchParams(String);
    const id = url.get('id')
    return id;
}

/*Con esta funcion muestro el libro que se nos ha pasado por la url como id del libro */

function getInfoLibros(id){
    const bookUrl = "https://www.googleapis.com/books/v1/volumes?q="+ id;
    var promise = new Promise(function(resolve, reject){

        const req = new XMLHttpRequest();
        /*Abro la promesa XMLHttpRequest dandole la url de la api*/
        req.open('GET', bookUrl)
        req.onload = function(){

            if(this.status == 200 && this.readyState === 4) {
                resolve(req.response);
                const data= JSON.parse(this.response);
                console.log(data);
                /*Introduzco dentro de cada td definido la informacion del libro seleccionado */
                document.querySelector('#titulo').innerHTML = `<p>${data.volumeInfo.title}</p>`
                document.querySelector('#autor').innerHTML = `<p>${data.volumeInfo.authors}</p>`
                document.querySelector('#editorial').innerHTML = `<p>${data.volumeInfo.publisher}</p>`
                document.querySelector('#descripcion').innerHTML = `<p>${data.volumeInfo.description}</p>`
                document.querySelector('#precio').innerHTML = `<p>${data.saleInfo.listPrice.amount}</p>`
                document.querySelector('#linklibro').innerHTML = `<a href="${data.saleInfo.buyLink}">Comprar</a>`
            }

            
        };
        /*Mensaje de error */
        req.onerror = function() {
            reject(Error('Algo no ha salido bien!'));
        };
        req.send();
    })

    return promise;
}