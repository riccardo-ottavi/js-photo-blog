//seleziono i div delle immagini
const picOut = document.querySelectorAll(".card-img");
console.log(picOut);
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
            picOut[i].innerHTML = 
                    `
                        <img src="${myApis[i].url}" alt=""> 

                    `
        }
        

       
    })
    .catch(error => {
        console.error(error);
    })