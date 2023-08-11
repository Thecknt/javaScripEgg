let textElement = document.getElementById("text");
let text = textElement.innerHTML;

let word = text.split(" ");

console.log(word);

 let sentence = word.map( pal =>{
    
    if ( pal.length > 8){
        return `<span style="background-color: yellow;" > ${pal}</span>`
    }else{
        return pal
    }
})

let joinWords = sentence.join(" ");
textElement.innerHTML = joinWords;