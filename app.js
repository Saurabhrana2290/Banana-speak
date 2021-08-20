var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var divOutput = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";
function  getTranslationUrl(input){
    return serverUrl + "?" + "text=" + input;
}
function errorHandler(error){
    console.log("error",error);
}
function clickEventHandler(){
    var inputText = txtInput.value;

    fetch(getTranslationUrl(inputText))
    .then(
        response => response.json()
    )
    .then(
        json => {
            var translatedText=json.contents.translated;
            divOutput.innerText = translatedText;
        }
    )
    .catch(errorHandler);
}

btnTranslate.addEventListener("click",clickEventHandler);