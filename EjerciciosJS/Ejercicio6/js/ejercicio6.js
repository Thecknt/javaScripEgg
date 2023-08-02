let form = document.getElementById("Form");
let result = document.getElementById("result");
let showResult = document.getElementById("showResult");
let loader = document.getElementById("loader");
let statement = document.getElementById("statement");
let sectionParImpar = document.getElementById("parImpar")
let number;

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  number = e.target.number.value;

  result.innerHTML = "";

  sectionParImpar.style.display= "none";
  statement.style.display = "none";
 // Mostrar el loader
 loader.style.display = "flex";

 // Esperar un segundo usando una función asíncrona
 await delay(3000);

 // Ejecutar la función para calcular el resultado
 calc();

 // Ocultar el loader después de mostrar el resultado
 loader.style.display = "none";
});

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


function calc() {
  if (number % 2 == 0) {
    sectionParImpar.style.display= "flex";
    statement.style.display = "flex";
    form.style.display = "flex";
    showResult.style.display ="flex"
    result.innerHTML += `El numero es PAR!`;
    form.reset();
  } else {
    sectionParImpar.style.display= "flex";
    statement.style.display = "flex";
    showResult.style.display ="flex"
    loader.style.display = "none";
    form.style.display = "flex";
    result.innerHTML += `El número es IMPAR!`;
    form.reset();
  }
}
