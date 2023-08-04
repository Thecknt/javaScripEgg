let numbers = document.getElementById("numberAdd");
let button = document.getElementById("submit");
let sectionStatement = document.getElementById("statement");
let sectionExercise = document.getElementById("exercise");
let sectionShowFinal = document.getElementById("showFinal");
let message = document.querySelector("#inputNumbers");
let result = document.getElementById("resolve");

let currentSum = 0;
let average = 0;
let numberMin = Infinity;
let numberMax = 0;
let finalNumber = [];
let size = 0;

button.addEventListener("click", (e) => {
  let inputNumber = parseInt(document.getElementById("numberAdd").value);

  if (inputNumber > 0 && !isNaN(inputNumber)) {
    do {
        numbers.value = "";
      message = `Ingrese un nuevo numero`;
      finalNumber.push(inputNumber);
    } while (inputNumber === 0);
  } else {
    size = finalNumber.length;
    for (i = 0; i < size; i++) {
      currentSum = currentSum + parseInt(finalNumber[i]);
      if (parseInt(finalNumber[i]) > numberMax) {
        numberMax = parseInt(finalNumber[i]);
      }

      if (
        parseInt(finalNumber[i]) < numberMin &&
        parseInt(finalNumber[i]) !== 0
      ) {
        numberMin = parseInt(finalNumber[i]);
      }
    }
    average = currentSum / size;
  }

  if(inputNumber == 0){
    sectionShowFinal.style.display = "flex";
    result.innerHTML += `<br> El promedio de los numeros ingresados es: ${average}`;
    result.innerHTML += `<br> La suma de los numeros ingresados es: ${currentSum}`;
    result.innerHTML += `<br> El maximo valor ingresado fue: ${numberMax}`;
    result.innerHTML += `<br> El minimo valor ingresado fue: ${numberMin}`;
}
    
});
