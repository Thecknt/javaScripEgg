let sectionShowFinal = document.getElementById("showFinal");

const arrayA = [];
const arrayB = [];

const randonNumbers = () => {
  for (let i = 0; i < 50; i++) {
    let randomNumber = Math.floor(Math.random(1000) * 100);

    arrayA.push(randomNumber);
  }

  for (let i = 0; i < 20; i++) {
    let randomNumber = Math.floor(Math.random(1000) * 20);
    arrayB.push(randomNumber);
  }
  sectionShowFinal.innerHTML += `<h1>El primer Array A esta compuesto por: </h1>
      <p style="color: green;">[${arrayA}]</p>
      <h1>El Array B esta compuesto por: </h1> 
      <p style="color: green;">[${arrayB}]</p>`;
  return arrayA, arrayB;
};

randonNumbers();

let orderArrayA = [];
let orderArrayB = [];

const orderArray = (arrayA, arrayB) => {
  orderArrayA = arrayA.sort(function (a, b) {
    return a - b;
  }); // hay que hacer esta funcion, porque sino los compara como strings y devuelve 1,100,2,3
  orderArrayB = arrayB.sort(function (a, b) {
    return a - b
});

  sectionShowFinal.innerHTML += `<h1>El primer Array A ordenado: </h1>
      <p style="color: green;">[${orderArrayA}]</p>
      <h1>El Array B ordenado: </h1> 
      <p style="color: green;">[${orderArrayB}]</p>`;

      return orderArrayA, orderArrayB;
};

orderArray(arrayA, arrayB);

let newArrayA =[];
let newArrayB =[];
let newArrayC = [];
let finalArray = [];

const mixArrays = (orderArrayA,orderArrayB )=>{
 newArrayA = orderArrayA.splice(1, 10); 
 newArrayA.sort(function (a, b) {return a - b;});
 newArrayB = orderArrayB.splice(1,10);
 newArrayB.sort((a,b)=> a-b );
 console.log(newArrayA,newArrayB);

 for(let i = 0; i< 10; i++){
    newArrayC.push(0.5);
 }
 console.log(newArrayC);
finalArray= newArrayA.concat(newArrayB,newArrayC);
let array20= newArrayB.concat(newArrayC)
sectionShowFinal.innerHTML+=`<hr><h4>El nuevo array, resultante es: </h4>
<p style="color: green;">[${finalArray}]</p>
<h4>El array de 20 elementos es:</h4>
<p style="color: green;">[${array20}]</p>`
}

mixArrays(orderArrayA,orderArrayB);