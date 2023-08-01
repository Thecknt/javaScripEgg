let form = document.getElementById("form");
let resultado = document.getElementById("resultado");
let resultadoFinal= document.getElementById("resultadoFinal");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
let campoTiempo = e.target.campoTiempo.value;
resultado.innerHTML = "";
if(campoTiempo!== ""){
resultadoFinal.style.display = "flex";
resultado.innerHTML += `El tiempo el dia de hoy esta ${campoTiempo} `
form.reset();
}else{
    resultadoFinal.style.display = "none";
    resultado.innerHTML = "";
    form.reset();
}
})
