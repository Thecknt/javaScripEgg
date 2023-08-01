let form = document.getElementById("form");
let resultado = document.getElementById("resultado");
let resultadoFinal = document.getElementById("mostrarResultado");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  resultado.innerHTML = "";
  let radio = e.target.valor.value;

  let area = Math.round(Math.PI * radio ** 2);
  let perimetro = Math.round(2 * Math.PI * radio);

  if (radio !== "") {
    mostrarResultado.style.display = "flex";
    resultado.innerHTML += `El resultado del area es: ${area}
        <br>
        El resultado del perimetro es: ${perimetro}
        `;
    form.reset();
  } else {
    mostrarResultado.style.display = "none";
    resultado.innerHTML = "";
    form.reset();
  }
});
