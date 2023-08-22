const navBtn = document.querySelector(".nav-btn");
const icones = document.querySelectorAll(".icone-nav-antes");
const nav = document.querySelector(".navegacao-antes");
const nomeAbas = document.querySelectorAll(".nome-aba-antes");

// Navegação das páginas
navBtn.addEventListener("click", () => {
    if (nav.classList.contains("navegacao-antes")) {
        nav.classList.remove("navegacao-antes");
        nav.classList.add("navegacao");
        icones.forEach((icone) => {
          icone.classList.remove("icone-nav-antes");
          icone.classList.add("icone-nav");
        });
        nomeAbas.forEach((nomeAba) => {
            nomeAba.classList.remove("nome-aba-antes");
            nomeAba.classList.add("nome-aba");
          });
    } else {
        nav.classList.add("navegacao-antes");
        nav.classList.remove("navegacao");
        icones.forEach((icone) => {
          icone.classList.remove("icone-nav");
          icone.classList.add("icone-nav-antes");
        });
        nomeAbas.forEach((nomeAba) => {
            nomeAba.classList.remove("nome-aba");
            nomeAba.classList.add("nome-aba-antes");
          });
    }
});
    
