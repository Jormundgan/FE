const rosa = document.getElementById("rosa");
const mensaje = document.getElementById("mensaje");

rosa.addEventListener("click", () => {
    mensaje.classList.add("visible");

    // efecto extra al tocar
    rosa.style.filter = "drop-shadow(0 0 35px rgba(0,200,255,1))";

    setTimeout(() => {
        mensaje.classList.remove("visible");
        rosa.style.filter = "drop-shadow(0 0 20px rgba(0,200,255,0.6))";
    }, 4000);
});
