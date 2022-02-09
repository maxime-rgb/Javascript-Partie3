let img1 = document.getElementById("image1");

img1.addEventListener("mouseenter", () => {
    img1.style.border= "1px solid red";
});
img1.addEventListener("mouseleave", () => {
    img1.style.border= "none";
});