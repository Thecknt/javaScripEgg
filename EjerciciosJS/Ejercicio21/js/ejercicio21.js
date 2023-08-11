let sectionShowFinal = document.getElementById("showFinal");

const Persona = [
        {
        names: "jorge",
        age: 25,
        gender:"M",
        weight: 80,
        height: 180,
        },
        {
            names: "Maria",
            age:34,
            gender :"F",
            weight:67,
            height:160,
        },
        {
            names: "Mike",
            age:19,
            gender :"O",
            weight:72,
            height:170,
        },
    ];

Persona.forEach( pers =>{
    const {names,age,gender,weight,height} = pers;
    const personas = sectionShowFinal.innerHTML += `
    <br><h2> Nombre: ${names},
    <br>Edad: ${age},
    <br>Genero: ${gender},
    <br>Peso: ${weight},
    <br>Altura: ${height}</h2><br>`;
})

