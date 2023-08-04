let sectionPhrase = document.getElementById("phrase");
let form = document.getElementById("Form");
let sectionShowFinal = document.getElementById("showFinal");
let result = document.getElementById("resolve");
let message;
let newMessage = " ";
form.addEventListener("submit" , (e) =>{
e.preventDefault();

 message = e.target.text.value;

console.log(message);

if(message != " "){
for(let i= 0 ; i < message.length ; i++){
  newMessage += message.substring(i, i + 1) + " ";
  }
  sectionPhrase.style.display ="none";
  sectionShowFinal.style.display = "flex";
  result.innerHTML =` La frase ingresada es "${message}", la resultante ahora es: 
  <br>"${newMessage}"`
}

})