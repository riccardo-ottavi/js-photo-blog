//seleziona gli out
const picOut = document.querySelectorAll(".card-img");
const titleOut = document.querySelectorAll(".card-text-title");
const dateOut = document.querySelectorAll(".card-text-date");
//inizializza endpoint
const myEndPoint = "https://lanciweb.github.io/demo/api/pictures/";




//----------main------------
//chiamata APIs
axios.get(myEndPoint).then(risposta => {
        //successo
        //estrapolo i dati
        let myApis = risposta.data;   
        console.log("successo",myApis);
        //mando in pagina i dati ricevuti
        displayData(myApis);
    })
    .catch(error => {
        console.error(error);
    })

//gestione hover



    //---------funzioni---------

    function manageHover(){
        
    }


    //manda in pagina gli oggetti passati 
    function displayData(data){
        for (let i = 0; i < picOut.length; i++){
            //mando in pagina l'immagine
            picOut[i].innerHTML = 
                    `
                        <img src="${data[i].url}" alt=""> 
                    `
            //mando in pagina il titolo        
            titleOut[i].innerHTML =
                    `
                        <span>${data[i].title}</span> 
                    `

            //mando in pagina il titolo        
            dateOut[i].innerHTML =
                    `
                        <span>${data[i].date}</span> 
                    `
        }   
    }