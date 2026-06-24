const btnAtaque = document.getElementById("idAtaque");
// const inputValor = document.getElementById("idValor");
const pTexto = document.getElementById("idVida");

let vida = 800;
pTexto.innerText = `Boss HP: ${vida}`;

function hit() {
    vida -= 100;

    if (vida <= 0) {
        vida = 0
        pTexto.innerText = "El jefe ha muerto, victoria!!"
    } else {
        pTexto.innerText = `Boss HP: ${vida}`;
    }
}

btnAtaque.addEventListener("click", hit);

