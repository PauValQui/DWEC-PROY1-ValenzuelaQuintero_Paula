
var btnBuscar = document.getElementById('buscar')

btnBuscar.addEventListener('click', function(event){

    var InfoBuscar = document.getElementById('buscar-box').value;

    const bookUrl = "https://www.googleapis.com/books/v1/volumes?q="+InfoBuscar;

    fetch(bookUrl).then(res => {
        res.json().then(
            data => {
                console.log(data);
                if(data.length > 0){
                    var añadir ="1";
                    
                data.forEach(item =>{
                    añadir += `<td>${item.volumeInfo.imageLinks}</td>`
                    añadir += `<td>${item.volumeInfo.title}</td>`
                    añadir += `<td>${item.volumeInfo.authors}</td>`
                    añadir += `<td>${item.volumeInfo.publisher}</td>`
                    añadir += `<td><a href="./Info.html?id=${item.id}>Información Extendida</a></td>`
                    console.log(añadir);
                });

                document.getElementById("#listaLibros").innerHTML = añadir;
                
                }
            }
        )
    })

});

