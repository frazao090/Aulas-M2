// function addClassToParagraph(){
//     const paragraph = document.querySelector("p");

//     paragraph.classList.add("paragraph-black")
// }

// const classStyle = "paragraph-black";
// console.log(classStyle)
// const paragraph = document.querySelectorAll("p");
// function addClassToParagraph(){
//     for(let i = 0; i < paragraph.length; i++){
      
//         console.log(paragraph)
//         if(paragraph[i].classList.contains(classStyle)){ // Avalia
//             paragraph[i].classList.remove(classStyle) 
//         } else {
//             paragraph[i].classList.add(classStyle) // Adiciona a classe
//         }
    
//     }
// }

//     addClassToParagraph()

// const classStyle = "paragraph-black"


// function addClassToParagraph() {

//     const paragraph = document.querySelector("p");
//     paragraph.classList.toggle(classStyle)
 
// }

// addClassToParagraph()

const classStyle = "paragraph-black"

function addClassToParagraph() {
    
    const paragraph = document.querySelector("p");

   const classResult = paragraph.classList.toggle(classStyle) 
     if (classResult) { 
       paragraph.innerText = "Classe Adicionada"
     } else {
       paragraph.innerText = "Classe Removida"
     }

}

addClassToParagraph()
addClassToParagraph()
addClassToParagraph()
