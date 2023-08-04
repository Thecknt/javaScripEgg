const form = document.getElementById("Form");
const instruction = document.getElementById("instruction");
const numberToAdd = document.getElementById("numberToAdd");
const showResult = document.getElementById("final");
const result = document.getElementById("finalMessage");
const message = document.getElementById("message");
let botton = document.getElementById("submit");
let botton2 = document.getElementById("submit2");
let sectionExercise = document.getElementById("exercise");

let finalNumber = 0;
let currentSum = 0;

botton.addEventListener('click', (e) => {
  e.preventDefault();
  instruction.style.display = "none";
  numberToAdd.style.display = "flex";
  finalNumber = parseInt(document.getElementById("numberLimit").value);
  console.log(finalNumber + "numero final");

  message.innerHTML = `Ingrese un numero`;
});

botton2.addEventListener('click', (e) => {
  e.preventDefault();

  let inputNumber = document.getElementById("optionalNumber");
  console.log(inputNumber.value);
  let numberF = parseInt(inputNumber.value);
  console.log(numberF);
  if (currentSum <= finalNumber) {
    console.log("entro a la primer condicion")
  if (!isNaN(numberF) && numberF !=0) {
   
    currentSum += numberF;
    inputNumber.value = "";
    console.log(currentSum);
    if(currentSum >= finalNumber){
      sectionExercise.style.display = "none";  
    showResult.style.display = "flex";
    result.innerHTML = "Se llegó a la cuenta!";
    }
  }   
      console.log("Llegamos al número " + currentSum); 
      
    }
 
    message.innerHTML = "Ingrese otro numero";
    
});
