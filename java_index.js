document.addEventListener("DOMContentLoaded" , inserirbotoes);

function inserirbotoes() {
    div = document.createElement("div");
    div.innerHTML = `
    <button onclick="tamanho('medium')">-</button> 
    <button onclick="tamanho('xxx-large')">+</button>
    `;
    document.body.prepend(div);
}