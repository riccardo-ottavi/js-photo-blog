//seleziona gli out
const mainBox = document.querySelector(".big-container");
const picOut = document.querySelectorAll(".card-img");
const titleOut = document.querySelectorAll(".card-text-title");
const dateOut = document.querySelectorAll(".card-text-date");
const cards = document.querySelectorAll(".card");
const pins = document.querySelectorAll(".pin");
console.log(pins);
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
    let dots = document.querySelectorAll(".pin");
    eventHandler(pics, dots, mainBox, myApis);
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
function eventHandler(element, element2, element3, data){
    //non forEach perché serve salvare i

    //event listener per quando entra il mouse 
    for (let i = 0; i < element.length; i++ ){
        cards[i].addEventListener("mouseenter",
             function () {
                    console.log("mouse entrato su " + (i+1));
                    //crea e assegna ai pin la classe per l'hover
                    element2.forEach(element2 => {
                        element2.classList.add("dot-hover");
                    });
                    
            });
    };

    //event listener per quando esce il mouse 
    for (let i = 0; i < element.length; i++ ){
        cards[i].addEventListener("mouseleave",
             function () {
                    console.log("mouse uscito da " + (i+1));
                    //rimuove dai pin la classe per l'hover
                    element2.forEach(element2 => {
                        element2.classList.remove("dot-hover");
                    });
            });
    };

    //event listener per quando clicchi su una card
    for (let i = 0; i < element.length; i++ ){
        cards[i].addEventListener("click",
             function () {
                //salva la card cliccata 
                    let selectedCard = i;
                    console.log("carta cliccata " + (i+1));
                    //il contenitore guadagna una classe per gestire la dimensione della big pic
                    mainBox.classList.add("selected-event");
                    console.log(data[selectedCard]);
                    //assegno al bg del big box l'url dell'immagine corrispondente alla card cliccata
                    mainBox.setAttribute("style", `background-image: url(${data[selectedCard].url});`);
                    console.log(mainBox.classList);
                    //scompaiono le cards e i dots
                    cards.forEach(card => {
                        card.classList.add("hidden");
                    });
                    pins.forEach(pins => {
                        pins.classList.add("hidden");
                    });
            });
    };

}

