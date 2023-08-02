let form = document.getElementById("Form");
let result = document.getElementById("result");
let finalResult = document.getElementById("showResult");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let word = e.target.letter.value;

  result.innerHTML= "";
  finalResult.style.display = "none";
  if (word === "S" || word === "N") {
    finalResult.style.display = "flex";
    result.innerHTML += `La letra ingresada es CORRECTA`;
    form.reset();
  } else {
    finalResult.style.display = "flex";
    result.innerHTML += `La letra ingresada es INCORRECTA`;
    form.reset();
  }
});
