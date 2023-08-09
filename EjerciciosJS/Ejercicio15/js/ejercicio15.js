let form = document.getElementById("Form");
let sectionData = document.getElementById("data");
let sectionFinal = document.getElementById("showFinal");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let radio = parseInt(document.getElementById("radio").value);
  console.log(radio);

  area(radio);
  perimetro(radio);
  form.reset();

  radio = "";
});

let area = (radio) => {
  let result =Math.round(Math.PI*Math.pow(radio, 2));
  sectionData.style.display = "none";
  sectionFinal.style.display = "flex";
  sectionFinal.innerHTML += `<h1 class="resolve" id="resolve" onclick="reloadWindow()">
    </h1>
    <br>
    <p>
    El Area en base al radio ingresado (${radio}) es = ${result}
    </p>`;
  console.log(result);
  return result;
};

let perimetro = (radio) => {
  let result = Math.round(2*Math.PI*radio);
  sectionFinal.innerHTML += `<h1 class="resolve" id="resolve" onclick="reloadWindow()">
    </h1>
    <br>
    <p>
    El Perimetro del circulo en base al radio ingresado (${radio}) es = ${result}
    </p>`;
  console.log(result);
  return result;
};

let reloadWindow = () => {
    window.location.reload();
  };
