let sectionShowFinal = document.getElementById("showFinal");
const writeArrayA = document.getElementById("arrayA");

let arrayA = [];
let arrayB = [];

const createArrayA = (arrayA)=>{
for(let i = 3; i<=15 ; i+=3){
arrayA.push([[i]]);
}
return arrayA;

}

const showArrayA =()=>{
    writeArrayA.innerHTML += `[`
for (let i = 0; i < arrayA.length; i++) {
    
    for (let j = 0; j < arrayA[i].length; j++) {
        writeArrayA.innerHTML += `[${arrayA[i][j]}]`;
    } 
    writeArrayA.innerHTML += ``;
  }
  writeArrayA.innerHTML += `]`
}


createArrayA(arrayA);
showArrayA(arrayA);

arrayB = [ ...arrayA];

console.log(arrayA);

arrayB.shift();
arrayB.push(18);

console.log(arrayA);
sectionShowFinal.innerHTML+=`<h2>[${arrayB}]</h2>`;