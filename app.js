var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var divOutput = document.querySelector("#output");
function clickEventHandler(){
    divOutput.innerHTML="ajajajjajaj  " + txtInput.value;
}

btnTranslate.addEventListener("click",clickEventHandler);