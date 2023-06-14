const frm = document.querySelector("form");

console.log(frm);

const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

frm.addEventListener("Submit", (e) => {
    e.preventDefault(); //nao envia o formulario

    //console.log("Ola mundo, botao cliclou")

    const nome = frm.inNome.value;
    const nota1 = frm.inNota1.value;
    const nota2 = frm.inNota2.value;

    const media = (nota1 + nota2) / 2;
    
})