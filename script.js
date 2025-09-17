//seleziono i div delle immagini
const picOut = document.querySelectorAll(".card-img");
const titleOut = document.querySelectorAll(".card-text-title");
const dateOut = document.querySelectorAll(".card-text-date");
//inizializza endpoint
const myEndPoint = "https://lanciweb.github.io/demo/api/pictures/";



//chiamata APIs
axios.get(myEndPoint).then(risposta => {
        //successo

        //estrapolo i dati
        let myApis = risposta.data;   
        console.log("successo",myApis);
        //mando in pagina i dati ricevuti
        for (let i = 0; i < picOut.length; i++){
            //mando in pagina l'immagine
            picOut[i].innerHTML = 
                    `
                        <img src="${myApis[i].url}" alt=""> 
                    `
            //mando in pagina il titolo        
            titleOut[i].innerHTML =
                    `
                        <span>${myApis[i].title}</span> 
                    `

            //mando in pagina il titolo        
            dateOut[i].innerHTML =
                    `
                        <span>${myApis[i].date}</span> 
                    `
        }   
        

       
    })
    .catch(error => {
        console.error(error);
    })