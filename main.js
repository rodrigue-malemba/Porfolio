//affichage de la premiere image
let portfolio = document.getElementById("portfolio");
let image1 = document.getElementById("image1");

let showImage1 = () => {
    image1.style.display = "block";
        image1.style.marginTop = "20px";
            image1.style.marginBottom = "10px";
                closeIcon1.style.display = "block";
}
portfolio.addEventListener("click", showImage1);
//masquer l'image1 au click
const closeIcon1 = document.getElementById("close-icon1");
const closeImage1 = () => {
    image1.style.display = "none";
    closeIcon1.style.display = "none";
}
closeIcon1.addEventListener("click", closeImage1)
//affichage de la deuxieme image
const personnalP = document.getElementById("projetP");
const image2 = document.getElementById("image2");

const showImage2 = () => {
    image2.style.display = "block";
        closeIcon.style.display = "block";
            image2.style.marginTop = "20px";
                image2.style.marginBottom = "10px";
}
personnalP.addEventListener("click", showImage2);
//masquer l'image2 au click
const closeIcon = document.getElementById("close-icon");
const closeImage2 = () => {
    image2.style.display = "none";
        closeIcon.style.display = "none";
}
closeIcon.addEventListener("click", closeImage2);
//affichage de la troisieme image
let projetAp = document.getElementById("projet-Ap");
let image3 = document.getElementById("image3");

const showImage3 = () => {
    image3.style.display = "block";
        image3.style.marginTop = "20px";
}
projetAp.addEventListener("click", showImage3);