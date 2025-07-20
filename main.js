//variable
let darkMode = document.getElementById("dark-mode");
let lightMode = document.getElementById("light-mode");
let paragraph = document.querySelector("p");
let corps = document.querySelector("body");
let projetAp = document.getElementById("projet-Ap");
let image3 = document.getElementById("image3");
let portfolio = document.getElementById("portfolio");
let image1 = document.getElementById("image1");
const closeIcon1 = document.getElementById("close-icon1");
const closeIcon = document.getElementById("close-icon");
const personnalP = document.getElementById("projetP");
const image2 = document.getElementById("image2");
//activer mode sombre
const activeDark = () => {
    corps.style.backgroundColor = "black";
    paragraph.style.color = "white";
    lightMode.style.backgroundColor = "white";
    lightMode.style.display = "block";
    lightMode.style.borderRadius = "5px";
    darkMode.style.display = "none";
    closeIcon1.style.backgroundColor = "white";
    closeIcon.style.backgroundColor = "white";
    closeIcon.style.borderRadius = "5px";
    closeIcon1.style.borderRadius = "5px";
    projetAp.style.color = "white";
    portfolio.style.color = "white";
    personnalP.style.color = "white";
}
darkMode.addEventListener("click", activeDark);

//activer mode clair

const activeLight = () => {
    paragraph.style.color = "black";
    darkMode.style.display = "block";
    darkMode.style.borderRadius = "5px";
    darkMode.style.border = "1px solid black"
    lightMode.style.display = "none";
    corps.style.backgroundColor = "white";
    projetAp.style.color = "black";
    portfolio.style.color = "black";
    personnalP.style.color = "black";
}
lightMode.addEventListener("click", activeLight);
//affichage de la premiere image

let showImage1 = () => {
    image1.style.display = "block";
        image1.style.marginTop = "20px";
            image1.style.marginBottom = "10px";
                closeIcon1.style.display = "block";
}
portfolio.addEventListener("click", showImage1);
//masquer l'image1 au click
const closeImage1 = () => {
    image1.style.display = "none";
    closeIcon1.style.display = "none";
}
closeIcon1.addEventListener("click", closeImage1)
//affichage de la deuxieme image

const showImage2 = () => {
    image2.style.display = "block";
        closeIcon.style.display = "block";
            image2.style.marginTop = "20px";
                image2.style.marginBottom = "10px";
}
personnalP.addEventListener("click", showImage2);
//masquer l'image2 au click
const closeImage2 = () => {
    image2.style.display = "none";
        closeIcon.style.display = "none";
}
closeIcon.addEventListener("click", closeImage2);
//affichage de la troisieme image

const showImage3 = () => {
    image3.style.display = "block";
        image3.style.marginTop = "20px";
}
projetAp.addEventListener("click", showImage3);