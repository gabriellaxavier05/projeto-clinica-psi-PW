//chamando const
const h = document.querySelector(".h");
const navMenu = document.querySelector(".nav-menu");

//quando o usuário clicar, chamar a função ...
h.addEventListener("click", () => {
    h.classList.toggle('active');
    navMenu.classList.toggle('active');
})


//configurando o modal da tela inicial
const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

//pra ocultar/desocultar o modal
const toggleModal= () => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"));
};

[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});