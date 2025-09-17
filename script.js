console.log("prova");
const myEndPoint = "https://lanciweb.github.io/demo/api/pictures/";

axios.get(myEndPoint)
    .then(risposta => {
        //successo
        console.log("ciao 1")
    })
    .catch(error => {
        console.error(error);
    })