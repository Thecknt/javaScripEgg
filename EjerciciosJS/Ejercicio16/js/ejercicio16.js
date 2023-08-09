let sectionFinal = document.getElementById("showFinal");
let button = document.getElementById("reload");
let array1 = [];
let array2 = [];

sectionFinal.addEventListener("click", (e) => {
  randonNumbers();

  array1 = [];
  array2 = [];
});


const randonNumbers = () => {
  for (let i = 0; i < 5; i++) {
    let randomNumber1 = Math.floor(Math.random() * 100);
    let randomNumber2 = Math.floor(Math.random() * 100);

    array1.push(randomNumber1);
    array2.push(randomNumber2);
  }

  sectionFinal.innerHTML = `Los numeros son: 
    <br>[${array1}]
    <br> [${array2}]
    <br>
    <button id="reload" class="submit"> Generar </button>`;
  return array1, array2;
};
