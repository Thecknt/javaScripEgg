let sectionFinal = document.getElementById("showFinal");
let button = document.getElementById("reload");
let array1 = [];


sectionFinal.addEventListener("click", (e) => {
  randonNumbers();
  deleteNumbers(array1);

  array1 = [];
 
});

const randonNumbers = () => {
  for (let i = 0; i < 5; i++) {
    let randomNumber1 = Math.floor(Math.random() * 100);

    array1.push(randomNumber1);
  }

  sectionFinal.innerHTML = `<h1>El primer Array esta compuesto por: 
    <br>[${array1}]
    <br></h1>`;
  return array1;
};

const deleteNumbers = (array1)=>{
    
for(let i = 0; i <2 ;i++){
    array1.pop();
}

sectionFinal.innerHTML += `<h1>El array modificado es: 
<br>[${array1}]</h1>
<button id="reload" class="submit"> 
<img src="images/reciclaje.png" alt="" srcset="" style="width: 20px; height: 20px;"> 
</button>`;
return array1;
}
