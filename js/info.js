const bookUrl = "https://www.googleapis.com/books/v1/volumes?q="+ getIdFromUrl();

function getIdFromUrl(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')
    return id;
}


function getInfoLibros(bookUrl){
    var promise = new Promise(function(resolve, reject){

        const req = new XMLHttpRequest();

        req.open('GET', bookUrl)
        req.onload = function(){

            if(this.status == 200 && this.readyState === 4) {
                resolve(req.response);
                const data= JSON.parse(this.response);
                console.log(data);

                document.querySelector('#titulo').innerHTML = `<p>${data.volumeInfo.title}</p>`
                document.querySelector('#autor').innerHTML = `<p>${data.volumeInfo.authors}</p>`
                document.querySelector('#editorial').innerHTML = `<p>${data.volumeInfo.publisher}</p>`
                document.querySelector('#descripcion').innerHTML = `<p>${data.volumeInfo.description}</p>`
                document.querySelector('#precio').innerHTML = `<p>${data.saleInfo.listPrice.amount}</p>`
                document.querySelector('#linklibro').innerHTML = `<a href="${data.saleInfo.buyLink}">Comprar</a>`
            }

            
        };

        req.onerror = function() {
            reject(Error('Algo no ha salido bien!'));
        };
        req.send();
    })

    return promise;
}