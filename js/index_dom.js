import scrollTopButton from "./dom/boton_scroll.js";
import countdown from "./dom/cuenta_regresiva.js";
import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { moveBall, shortcts } from "./dom/teclado.js";
import darkTheme from "./dom/tema_oscuro.js";


const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj")
    alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
    countdown(
        "countdown", 
        "September 19, 2022 00:00:00", 
        "Feliz cumpleaños FERNANDO, CUMPLISTE TU OBJETIVO!!!"
        );
    scrollTopButton(".scroll-top-btn");
})

d.addEventListener("keydown", (e) => {
    shortcts(e);
    moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");