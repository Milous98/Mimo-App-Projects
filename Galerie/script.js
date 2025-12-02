const diapo = document.querySelector(".diapo")
const closeBtn = document.getElementById("close-btn")
const clkImage = document.querySelectorAll(".img")
const diapoImg = document.querySelector(".diapo-img")


closeBtn.addEventListener("click", () => {
    diapo.style.display = "none";
})

clkImage.forEach((element) => {
    element.addEventListener("click", () => {
        diapo.style.display = "block";
        diapoImg.src = element.src;
        console.log(element.src);
    });
});