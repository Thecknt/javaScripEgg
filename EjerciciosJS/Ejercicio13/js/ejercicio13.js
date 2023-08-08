let form = document.getElementById("Form");
let sectionData = document.getElementById("data");
let sectionFinal = document.getElementById("showFinal");
let persona1;

class persona {
  constructor(nombre, edad, sexo, peso, altura) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
  }
}
let names;
let age;
let gender;
let weight;
let height;

form.addEventListener("submit", (e) => {
  e.preventDefault();
 
    try {
      let testGender = document.getElementById("gender").value;
      if (!["h", "H", "o", "O", "m", "M"].includes(testGender)){
        alert("Debe seleccionar un género válido");
      } else {
        let names = document.getElementById("names").value;
        console.log(names);
        let age = document.getElementById("age").value;
        let gender = testGender;
        let weight = document.getElementById("weight").value;
        let height = document.getElementById("height").value;
        out = true;
        persona1 = new persona(names, age, gender, weight, height);
        showData(persona1);
      }
    } catch (error) {
      console.log(error);
    }

  console.log(persona1);
  
});

let showData = (persona1) => {
    sectionData.style.display ="none";
  form.style.display = "none";
  sectionFinal.style.display = "flex";
  sectionFinal.innerHTML = `<h1 class="resolve" id="resolve" onclick="reloadWindow()">Los datos guardados son:
    </h1>
    <br>
    <p>
    <br> Nombre: ${persona1.nombre}
    <br> Edad: ${persona1.edad} años.
    <br> Genero: ${persona1.sexo}
    <br> Peso: ${persona1.peso} kgs.
    <br> Altura: ${persona1.altura} Cms</p>`;
};

let reloadWindow = () => {
  window.location.reload();
};
