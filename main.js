let readme = document.getElementById("portfolio");
let port = document.getElementById("image1");

let showPortfolio = () => {
    port.style.display = "block";
}
readme.addEventListener("click", showPortfolio);

const personnalP = document.getElementById("projetP");
const open = document.getElementById("image2");

const openPortfolio = () => {
    open.style.display = "block";
}
personnalP.addEventListener("click", openPortfolio);