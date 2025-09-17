//seleziona gli out
const picOut = document.querySelectorAll(".card-img");
const titleOut = document.querySelectorAll(".card-text-title");
const dateOut = document.querySelectorAll(".card-text-date");
const cards = document.querySelectorAll(".card");
//inizializza endpoint
const myEndPoint = "https://lanciweb.github.io/demo/api/pictures/";


//----------main------------
//chiamata API
axios.get(myEndPoint).then(risposta => {
    //estrapolo i dati
    let myApis = risposta.data;
    console.log("successo", myApis);
    //mando in pagina i dati ricevuti
    displayData(myApis);
    //seleziono le pics appena create e creo gli eventi
    let pics = document.querySelectorAll(".trip-pic");
    eventHandler(pics);
})
    .catch(error => {
        console.error(error);
    })


//-------funzioni-----------

//manda in pagina i dati ricevuti 
function displayData(data) {
    for (let i = 0; i < picOut.length; i++) {
        //manda in pagina l'immagine
        picOut[i].innerHTML = `<img src="${data[i].url}" alt="" class="trip-pic">`
        //manda in pagina il titolo        
        titleOut[i].innerHTML =`<span>${data[i].title}</span>`
        //manda in pagina il titolo        
        dateOut[i].innerHTML =`<span>${data[i].date}</span>`
    }
}

//aggiunge gli eventi per gestire l'hover 
function eventHandler(element){
    //non forEach perché serve salvare i
    for (let i = 0; i < element.length; i++ ){
        cards[i].addEventListener("mouseenter",
             function () {
                    console.log("mouse entrato su " + (i+1));
            });
    };

    for (let i = 0; i < element.length; i++ ){
        cards[i].addEventListener("mouseleave",
             function () {
                    console.log("mouse uscito da " + (i+1));
            });
    };
}