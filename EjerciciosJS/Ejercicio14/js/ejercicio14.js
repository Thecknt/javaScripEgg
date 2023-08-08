let form = document.getElementById("Form");
let sectionData = document.getElementById("data");
let sectionFinal = document.getElementById("showFinal");
let libro1;

class libro {
  constructor(isbn, title, author, pages) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

form.addEventListener("submit", (e)=>{
e.preventDefault();
try {
    let numberISBN = parseInt(document.getElementById("isbn").value);
    let titleBook = document.getElementById("names").value;
    let authorBook = document.getElementById("Author").value;
    let numPages = parseInt((document.getElementById("pages").value));

    libro1 = new libro(numberISBN,titleBook,authorBook,numPages);

    showData(libro1);
} catch (error) {
    console.log(error);
    alert("valores Incorrectos, intente nuevamente");
}

})

let showData = (libro1) => {
    sectionData.style.display ="none";
  form.style.display = "none";
  sectionFinal.style.display = "flex";
  sectionFinal.innerHTML = `<h1 class="resolve" id="resolve" onclick="reloadWindow()">El Libro guardado es:
    </h1>
    <br>
    <p>
    <br> ISBN: ${libro1.isbn}.
    <br> Titulo del Libro: ${libro1.title}.
    <br> Autor: ${libro1.author}.
    <br> Cantidad de paginas: ${libro1.pages} kgs.
    </p>`;
};

let reloadWindow = () => {
    window.location.reload();
  };
