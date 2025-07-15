//affichage de la premiere image
let portfolio = document.getElementById("portfolio");
let image1 = document.getElementById("image1");

let showImage1 = () => {
    image1.style.display = "block";
    image1.style.marginTop = "20px";
    image1.style.marginBottom = "10px";
}
portfolio.addEventListener("mouseover", showImage1);

//affichage de la deuxieme image
const personnalP = document.getElementById("projetP");
const image2 = document.getElementById("image2");

const showImage2 = () => {
    image2.style.display = "block";
    image2.style.marginTop = "20px";
    image2.style.marginBottom = "10px";
}
personnalP.addEventListener("mouseover", showImage2);
//affichage de la troisieme image
let projetAp = document.getElementById("projet-Ap");
let image3 = document.getElementById("image3");

const showImage3 = () => {
    image3.style.display = "block";
    image3.style.marginTop = "20px";
}
projetAp.addEventListener("mouseover", showImage3);
//masquer l'image1
const nextImage1 = document.getElementById("image1");
const hideImage1 = () =>{
    image1.style.display = "none";
}
nextImage1.addEventListener("click", hideImage1);

//masquer l'image 2
const nextImage2 = document.getElementById("image2");
const hideImage2 = () =>{
    image2.style.display = "none";
    image2.style.transition = "2s";
}
nextImage2.addEventListener("click", hideImage2);

