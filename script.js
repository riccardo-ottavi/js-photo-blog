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
const closeBtn = document.getElementById("close-overlay");
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
    eventHandlerHover(pics, dots, pins);
    eventHandlerClick(pics, closeBtn, overlay, pins, cards);
})
    .catch(error => {
        console.error(error);
    })


//-------funzioni-----------
//manda in pagina i dati ricevuti 
function displayData(data) {
    for (let i = 0; i < picOut.length; i++) {
        //manda in pagina l'immagine
        picOut[i].innerHTML = `<img src="${data[i].url}" alt="" class="trip-pic img-small-hover">`
        //manda in pagina il titolo        
        titleOut[i].innerHTML =`<span>${data[i].title}</span>`
        //manda in pagina il titolo        
        dateOut[i].innerHTML =`<span>${data[i].date}</span>`
    }
}
//aggiunge gli eventi per gestire l'hover 
function eventHandlerHover(pics, dots, pins) {
        //non forEach perché serve salvare i
        //event listener per quando entra il mouse 
        for (let i = 0; i < pics.length; i++) {
            cards[i].addEventListener("mouseenter",
                function () {
                    cards[i].classList.add("card-small-transform");
                    cards[i].classList.add("card-small-rotate");
                    console.log("mouse entrato su " + (i + 1));
                    //crea e assegna ai pin la classe per l'hover
                    dots.forEach(dot => {
                        dot.classList.add("dot-hover");
                    });
                });
        };
        //event listener per quando esce il mouse 
        for (let i = 0; i < pics.length; i++) {
            cards[i].addEventListener("mouseleave",
                function () {
                    console.log("mouse uscito da " + (i + 1));
                    cards[i].classList.remove("card-small-transform");
                    cards[i].classList.remove("card-small-rotate");
                    //rimuove dai pin la classe che lo nasconde
                    dots.forEach(dots => {
                        dots.classList.remove("dot-hover");
                    });
                });
        };
}
function eventHandlerClick(pics, closeBtn, overlay, pins, cards) {
    let selectedPic =[];
    let selectedCardIndex = null;
    //event listener per quando clicchi su una card
    for (let i = 0; i < pics.length; i++) {
        cards[i].addEventListener("click",
            function () {
                cards[i].classList.remove("card-small-transform");
                cards[i].classList.remove("card-small-rotate");
                //salva la card cliccata 
                selectedCardIndex = i;
                //resetta l'hover che nell
                console.log("hai cliccato la card numero: " + selectedCardIndex + (i + 1));
                //mostra l' overlay
                overlay.setAttribute("style", "display: block");
                pics[i].classList.add("selected-event");
                selectedPic = pics[i];
                pics[i].classList.remove("img-small-hover");
                //nascondo il pin della card selezionata
                pins[selectedCardIndex].setAttribute("style", "display: none");
                cards[selectedCardIndex].setAttribute("style", "transform: none");       
            })
    };

    //evento per chiudere overlay
    closeBtn.addEventListener("click",
        function () {
            cards[selectedCardIndex].classList.add("card-small-rotate");
            cards[selectedCardIndex].classList.add("card-small-transform");
            overlay.setAttribute("style", "display: none");
            selectedPic.classList.remove("selected-event");
            //resetta le proprietà per far funzionare hover
            for (let i = 0; i < pins.length; i++) {
                pins[selectedCardIndex].style.removeProperty("display");
                cards[selectedCardIndex].style.removeProperty("transform"); 
                pics[selectedCardIndex].classList.add("img-small-hover");
            };
            
             
        }
    )
    
};
    
    


    
                