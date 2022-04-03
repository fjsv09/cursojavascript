import networkStatus from "./deteccion_red.js";
import scrollTopButton from "./dom/boton_scroll.js";
import countdown from "./dom/cuenta_regresiva.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import hamburgerMenu from "./dom/menu_hamburguesa.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
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
    responsiveMedia(
        "youtube", 
        "(min-width: 1024px)", 
        `<a href="https://youtu.be/Ojfsk61lDM4" target="_blank" rel="noopener">Ver Video</a>`, 
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/Ojfsk61lDM4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        );
    responsiveMedia(
        "gmaps", 
        "(min-width: 1024px)", 
        `<a href="https://goo.gl/maps/ZyZ2HVJmPHCnvKVf9" target="_blank" rel="noopener">Ver Mapa</a>`, 
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661513756123!2d-99.16979339904985!3d19.4270256458275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses-419!2spe!4v1648245073297!5m2!1ses-419!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        );
    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
});

d.addEventListener("keydown", (e) => {
    shortcts(e);
    moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();