let readme = document.getElementById("portfolio");
let port = document.getElementById("image1");

let showPortfolio = () => {
    port.style.display = "block";
    port.style.marginTop = "20px";
    port.style.marginBottom = "10px";
}
readme.addEventListener("click", showPortfolio);


const personnalP = document.getElementById("projetP");
const open = document.getElementById("image2");

const openPortfolio = () => {
    open.style.display = "block";
    open.style.marginTop = "20px";
    open.style.marginBottom = "10px";
}
personnalP.addEventListener("click", openPortfolio);

