
var btnBuscar = document.getElementById('buscar')
/*Al hacer click en el boton buscar */
btnBuscar.addEventListener('click', function(event){
    /*guardo el valor introducido en la caja de buscar */
    var InfoBuscar = document.getElementById('buscar-box').value;

    /*Llamo a la API de Google Books y le añado el nombre de los libros por el que voy a buscar */
    const bookUrl = "https://www.googleapis.com/books/v1/volumes?q="+InfoBuscar;

    /*Llamo al metodo fecth que recibe la url y devuelve una promesa.
    El resultado lo recogemos con then y con el json la parseamos*/
    fetch(bookUrl).then(res => {
        res.json().then(
            /*Ya tengo la informacion y compruebo que haya algo */
            data => {
                console.log(data);
                if(data.length > 0){
                    var añadir ="";
                    /*Con el bucle foreach voy cogiendo la informacion que quiero de
                     la API y la introduzco en añadir como codigo html*/
                data.forEach(item =>{
                    añadir += `<td>${item.volumeInfo.imageLinks}</td>`
                    añadir += `<td>${item.volumeInfo.title}</td>`
                    añadir += `<td>${item.volumeInfo.authors}</td>`
                    añadir += `<td>${item.volumeInfo.publisher}</td>`
                    //Con este enlace mando al usuario a otra página en la que hago la llamada 
                    //a la API con XMLHttpRequest pasandole el id del libro escogido
                    añadir += `<td><a href="./Info.html?id=${item.id}>Información Extendida</a></td>`
                });
                /*introduzco el codigo recopilado en la tabla listaLibros */
                document.getElementById("#listaLibros").innerHTML = `<tr> ${añadir} </tr>`;
                
                }
            }
        )
    })

});

