document.getElementById("burger").addEventListener("change", function() {
    const navbar = document.querySelector(".navbar");
    if (this.checked) {
        navbar.style.left = "0";
    } else {
        navbar.style.left = "-100%"; /* Regresa la navbar a su posición original */
    }
});
document.querySelectorAll(".menu-link").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        this.classList.toggle("open"); // Alterna la clase 'open' para el giro de la flecha
        const submenu = this.nextElementSibling;

        // Alterna la visibilidad del submenú
        if (submenu.style.display === "block") {
            submenu.style.display = "none";
        } else {
            submenu.style.display = "block";
        }
    });
});