const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit",(e) => {
    e.preventDefault();

    const nome = frm.inNome.value;
    const masculino = frm.inMasculino.checked;
    const altura = Number(frm.inAltura);

    let peso;

    if (masculino){
        peso = 22 * (altura*altura);
    } else {
        peso = 21 * Math.pow(altura, 2);
    }

    resp.innerText = '${nome}: Seu peso ideal é ${peso} Kg.'
})

frm.addEventListener("reset", {} =>) {
    resp.innerText = "";
}