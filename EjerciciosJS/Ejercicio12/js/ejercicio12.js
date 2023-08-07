let typeData = document.getElementById("phrase");
let form = document.getElementById("Form");
let sectionFinal = document.getElementById("showFinal");
let sectionPrase = document.getElementById("phrase");
let sectionStatement = document.getElementById("statement");

let inputData;

form.addEventListener("submit", (e)=>{
e.preventDefault();

inputData = e.target.text.value;
console.log(inputData);
muestraMensaje(inputData);
})
let message;
const muestraMensaje=(inputData) => {
if(!isNaN(inputData)){
message = typeof(parseInt(inputData));
sectionPrase.style.display ="none";
sectionStatement.style.display ="none";
sectionFinal.style.display ="flex";
inputData = "";
sectionFinal.innerHTML= `<h1 class="resolve" id="resolve" onclick="reloadWindow()">El tipo de dato es ${message}</h1>`;
}else{
    message = typeof(inputData);
    sectionStatement.style.display ="none";
    sectionPrase.style.display ="none";
sectionFinal.style.display ="flex";
inputData = "";
sectionFinal.innerHTML= `<h1 class="resolve" id="resolve" onclick="reloadWindow()">El tipo de dato es ${message}</h1>`;
}


return message;    
}

let reloadWindow = ()=>{
    window.location.reload();
}