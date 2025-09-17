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
    //successo
    //estrapolo i dati
    let myApis = risposta.data;
    console.log("successo", myApis);
    //mando in pagina i dati ricevuti
    displayData(myApis);
})
    .catch(error => {
        console.error(error);
    })


//manda in pagina i dati ricevuti 
function displayData(data) {
    for (let i = 0; i < picOut.length; i++) {
        //manda in pagina l'immagine
        picOut[i].innerHTML =
            `
                        <img src="${data[i].url}" alt="" class="trip-pic"> 
                    `

        //manda in pagina il titolo        
        titleOut[i].innerHTML =
            `
                        <span>${data[i].title}</span> 
                    `

        //manda in pagina il titolo        
        dateOut[i].innerHTML =
            `
                        <span>${data[i].date}</span> 
                    `
    }
    //seleziona le immagini appena create
    const pics = document.querySelectorAll(".trip-pic");
    //crea ed assegna gli event listener
    for (let i = 0; i < pics.length; i++ ){
        cards[i].addEventListener("mouseenter",
             function () {
                    console.log("mouse entrato su " + (i+1));
            });
    };

    for (let i = 0; i < pics.length; i++ ){
        cards[i].addEventListener("mouseleave",
             function () {
                    console.log("mouse uscito da " + (i+1));
            });
    };
}


