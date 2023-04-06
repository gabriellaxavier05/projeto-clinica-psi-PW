//menu
//chamando const
const h = document.querySelector(".h");
const navMenu = document.querySelector(".nav-menu");

//quando o usuário clicar, chamar a função ...
h.addEventListener("click", () => {
    h.classList.toggle('active');
    navMenu.classList.toggle('active');
})