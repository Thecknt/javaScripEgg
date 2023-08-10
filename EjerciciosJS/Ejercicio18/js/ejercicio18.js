let sectionShowFinal = document.getElementById("showFinal");

const array = [true, 5, false, "hola", "adios", 2];
let words = [];
let arrayOfLetters = [];

let stringArrays = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      arrayOfLetters.push(array[i]);
    }
  }
  return arrayOfLetters;
};

const longestLetter = (arrayOfLetters) => {
  let maxLength = 0;
  for (let i = 0; i < arrayOfLetters.length; i++) {
    if (arrayOfLetters[i].length > maxLength) {
      maxLength = arrayOfLetters[i].length;
      words = [arrayOfLetters[i]];
    }
  }
  return words;
};
let suma;
let resta;
let multiplicacion;
let division;
let numberRaised;

stringArrays(array);
longestLetter(arrayOfLetters);

const operations = (array) => {
  let numberA = 0;
  let numberB;
let numberToCompare = 0;
  for (let i = 0; i < array.length; i++) {
    if ( typeof array[i] !== "string" && typeof array[i] !== true && typeof array[i] !== false) {

      if (numberA < array[i]) {
         numberA = array[i];
        
      } else {
        numberB = array[i];
      }
    }
  }

  suma = numberA + numberB;
  resta = numberA - numberB;
  multiplicacion= numberA * numberB;
  division = numberA / numberB;
  numberRaised = Math.pow(numberA, numberB)
  console.log(numberRaised);

};

operations(array);
let result1= suma > resta;
let result2 = resta < division;
sectionShowFinal.innerHTML = `
<h2>La palabra mas larga dentro del Array es: ${words}</h2>
<h3>¿El resultado de la Suma es Mayor a la Resta? <span style="color: green;"> ${result1}</span></h3>
<h3>¿El resultado de la Division es Mayor a la Resta? <span style="color: red;">${result2}</span></h3>
<p>La Suma de los numeros es: ${suma}</p><hr/>
<p>La Resta de los numeros es: ${resta} </p><hr />
<p>El resultado de la Multiplicacion es: ${multiplicacion }</p><hr/>
<p>El resultado de la Division es: ${division }</p><hr/>
<p>El resultado de la Potencia es: ${numberRaised }</p><hr/>
`;

