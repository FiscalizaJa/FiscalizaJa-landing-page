const ditados = [
    "O pior cego é aquele que escolhe não ver.",
    "Quem não deve, não teme.",
    "A luz do sol é o melhor desinfetante.",
    "O acesso é direito, não privilégio.",
    "Inacessibilidade é uma barreira.",
    "Quem não fiscaliza, é cúmplice.",
    
]

function shuffleArray(array) {
    let index = array.length;
   
    while(index) {
        const indexAleatorio = Math.floor(Math.random() * index--);
        [array[index], array[indexAleatorio]] = 
            [array[indexAleatorio], array[index]];
    }
}

shuffleArray(ditados)

const randomIndex = Math.floor(Math.random() * ditados.length)

document.querySelector("#ditado-apply").textContent = ditados[randomIndex]