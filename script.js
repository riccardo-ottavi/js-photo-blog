//seleziona gli out
const mainBox = document.querySelector(".big-container");
const picOut = document.querySelectorAll(".card-img");
const titleOut = document.querySelectorAll(".card-text-title");
const dateOut = document.querySelectorAll(".card-text-date");
const cards = document.querySelectorAll(".card");
const pins = document.querySelectorAll(".pin");
const title = document.getElementById("title");
const myBody = document.getElementsByTagName("body");
const overlay = document.querySelector(".hidden-overlay");
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
    eventHandlerHover(pics, dots);
    eventHandlerClick(pics, mainBox, myApis, title);
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
function eventHandlerHover(pics, dots){
    //non forEach perché serve salvare i
    //event listener per quando entra il mouse 
    for (let i = 0; i < pics.length; i++ ){
        cards[i].addEventListener("mouseenter",
             function () {
                    console.log("mouse entrato su " + (i+1));
                    //crea e assegna ai pin la classe per l'hover
                    dots.forEach(dots => {
                        dots.classList.add("dot-hover");
                    });   
            });
    };
    //event listener per quando esce il mouse 
    for (let i = 0; i < pics.length; i++ ){
        cards[i].addEventListener("mouseleave",
             function () {
                    console.log("mouse uscito da " + (i+1));
                    //rimuove dai pin la classe per l'hover
                    dots.forEach(dots => {
                        dots.classList.remove("dot-hover");
                    });
            });
    };
}    
function eventHandlerClick(pics) {
    //event listener per quando clicchi su una card
    for (let i = 0; i < pics.length; i++) {
        cards[i].addEventListener("click",
            function () {
                //salva la card cliccata 
                let selectedCard = i;
                console.log("hai cliccato la card numero: " + selectedCard + (i+1));
                overlay.setAttribute("style","display: block");
                pics[i].classList.add("selected-event");

            });
    };
}


