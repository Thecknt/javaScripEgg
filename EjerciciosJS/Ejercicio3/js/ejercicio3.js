let form = document.getElementById("Form");
let resolve = document.getElementById("resolve");
let finalResolve = document.getElementById("showResolve");

form.addEventListener("submit", (e) => {
e.preventDefault();
resolve.innerHTML= "";

let age = e.target.valueNumber.value;

if(age>=18){
    finalResolve.style.display = "flex";
    resolve.innerHTML += `Su edad de ${age} determina que es mayor de 18 años <br>`
    resolve.innerHTML += `<img src="./images/vote.jpg" alt="You can vote!" srcset="" class="adult"></img> `
    form.reset();
} else {
    finalResolve.style.display = "flex";
    resolve.innerHTML += `Su edad de ${age} determina que es menor de 18 años <br>`
    resolve.innerHTML += `<img src="./images/menor.avif" alt="You will have to wait!!" srcset="" class="minor"></img> `
form.reset();
}
} 
)