let form = document.getElementById("Form");
let result = document.getElementById("result");
let finalResult = document.getElementById("showResult");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let number1 = parseInt(e.target.number1.value);
  let number2 = parseInt(e.target.number2.value);
  let operation = parseInt(e.target.select.value);
  result.innerHTML = "";
  console.log(number1);
  console.log(number2);
  console.log(operation);

  switch (operation) {
    case 1:
      let Addition = number1 + number2;
      result.innerHTML += `El resultado de la Suma es = ${Addition} `
      form.reset();
      console.log(Addition);
      break;
    case 2:
      let subtract = number1 - number2;
      result.innerHTML += `El resultado de la Resta es = ${subtract} `
      form.reset();
      console.log(subtract);
      break;
    case 3:
      let multiply = number1 * number2;
      result.innerHTML += `El resultado de la Multiplicacion es = ${multiply} `
      form.reset();
      console.log(multiply);
      break;
    case 4:
      let divided = number1 / number2;
      result.innerHTML += `El resultado de la Division es = ${divided} `
      form.reset();
      console.log(divided);
      break;
    default:
        result.innerHTML += `Usted ingreso una operacion incorrecta` //alt + 96
      form.reset();
        break;
  }
});
