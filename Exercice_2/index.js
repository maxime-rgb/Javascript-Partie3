let text = document.getElementById("text");
let afficher = document.getElementById("afficher");
let masquer = document.getElementById("masquer");


afficher.addEventListener("click", () => {
    text.style.display = "block";
});
masquer.addEventListener("click", () => {
    text.style.display = "none";
});
