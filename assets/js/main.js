const fotoNav = document.querySelector("img");

fotoNav.addEventListener("click", () => {

    const gear = fotoNav.getAttribute("src");

    if(gear === "/assets/images/site-images/firefox.png/"){
        fotoNav.setAttribute("src", "/assets/images/site-images/chrome.png/");
    }else{
        fotoNav.setAttribute("src","/assets/images/site-images/firefox.png/");
    }
});

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

let botao = document.querySelector("button");
let titulo = document.querySelector("h1");

function setarNome() {
    const meuNome = prompt("Insira seu nome de usuário plsss");
    if (!meuNome) {
        setarNome();
    }else{
    localStorage.setItem("nome", meuNome);
    titulo.textContent = `welcome, ${meuNome}`;
}}

botao.addEventListener("click", () => {
    setarNome();
});

if (!localStorage.getItem("nome")){
    setarNome();
}else{
    const nomeGuardado = localStorage.getItem("nome");
    titulo.textContent = `welcome, ${nomeGuardado}`;
}