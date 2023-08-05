let sectionPhrase = document.getElementById("phrase");
let form = document.getElementById("Form");
let sectionShowFinal = document.getElementById("showFinal");
let result = document.getElementById("resolve");
let button = document.getElementById("button");
let message;
let arrayMessage = [];
let newValue = "";

form.addEventListener("submit", (e)=>{
e.preventDefault();

message =e.target.text.value;
console.log(message);

if(message !==""){
arrayMessage = message.split(" ");   
 console.log(arrayMessage);
}

newValue = "";
for(let i = 0; i<arrayMessage.length; i++){
  console.log(arrayMessage[i].length);

  if(arrayMessage[i].length > newValue.length){
    console.log("Ingrese al bucle")
    newValue = arrayMessage[i];
    sectionShowFinal.style.display ="flex";
    result.innerHTML =`La palabra mas larga ingresada es: ${newValue}`;
  }
}

text.value="";

})