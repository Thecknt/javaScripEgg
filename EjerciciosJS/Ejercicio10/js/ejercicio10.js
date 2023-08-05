let sectionPhrase = document.getElementById("phrase");
let form = document.getElementById("Form");
let sectionShowFinal = document.getElementById("showFinal");
let result = document.getElementById("resolve");
let button = document.getElementById("button");
let message;
let newMessage = " ";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  message = e.target.text.value;

  if (message != "") {
    for (let i = message.length; i >= 0; i--) {
      newMessage += message.substring(i, i + 1);
    }

    sectionPhrase.style.display = "none";
    sectionShowFinal.style.display = "flex";

    result.innerHTML = ` La frase ingresada es "${message}", la resultante ahora es: 
  <br>"${newMessage}"`;
  message = "";
  newMessage = "";
  form.reset();
  }
  
  text.value = "";
});

sectionShowFinal.addEventListener("click", (e) => {

  sectionShowFinal.style.display = "none";
  sectionPhrase.style.display = "flex";
});
