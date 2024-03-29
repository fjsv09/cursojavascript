/*console.log(window);
console.log(document);
        
let texto = "Hola, soy tu amigo y docente digital. Jonathan MirCha";
const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
        
hablar(texto);*/

/*





*/

/*console.log("********** Elementos del Documento **********");
console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);

setTimeout(() => {
    console.log(document.getSelection().toString())
}, 3000);

document.write("<h2>Hola Mundo desde el DOM</h2>");*/

/*





*//*
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementByld("menu"));
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach((el) => console.log(el));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAl(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelector("#menu li"));
console.log(document.querySelectorAll("#menu li"));
*/
/*





*/
/*console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "en";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang);

const linkDOM = document.querySelector(".link-dom");

linkDOM.setAttribute("target", "_blank");
linkDOM.setAttribute("rel", "noopener");
linkDOM.setAttribute("href", "https://youtube.com/jonmircha");
console.log(linkDOM.hasAttribute("rel"));
linkDOM.removeAttribute("rel");
console.log(linkDOM.hasAttribute("rel"));


//Data-Attributes
console.log(linkDOM.getAttribute("data-description"));
console.log(linkDOM.dataset);
console.log(linkDOM.dataset.description);
linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log(linkDOM.dataset.description);
linkDOM.dataset.description = "Suscríbete a mi canal y comparte";
console.log(linkDOM.dataset.description);*/
/*





*/

/*const linkDOM = document.querySelector(".link-dom");

console.log(linkDOM.style);
console.log(linkDOM.getAttribute("style"));
console.log(linkDOM.style.backgroundColor);
console.log(linkDOM.style.color);
console.log(window.getComputedStyle(linkDOM));
console.log(window.getComputedStyle(linkDOM).getPropertyValue("color"));


linkDOM.style.setProperty("text-decoration", "none");
linkDOM.style.setProperty("display", "block");
linkDOM.style.width = "50%"
linkDOM.style.textAlign = "center";
linkDOM.style.marginLeft = "auto"
linkDOM.style.marginRight = "auto";
linkDOM.style.padding = "1rem";
linkDOM.style.borderRadius = ".5rem";

console.log(linkDOM.style);
console.log(linkDOM.getAttribute("style"));
console.log(window.getComputedStyle(linkDOM));

//Variable CSS - Custom Properties CSS
const html = document.documentElement,
body = document.body;

let varDarkColor = getComputedStyle(html).getPropertyValue("--dark-color");
let varYellowColor = getComputedStyle(html).getPropertyValue("--yellow-color");
console.log(varDarkColor);
console.log(varYellowColor);

body.style.backgroundColor = varDarkColor;
body.style.color = varYellowColor;

html.style.setProperty("--dark-color", "#000");
varDarkColor = getComputedStyle(html).getPropertyValue("--dark-color");

body.style.setProperty("background-color", varDarkColor);
*/

/*






*/
/*
const card = document.querySelector(".card");
console.log(card);
console.log(card.className);
console.log(card.classList);
console.log(card.classList.contains("rotate-45"));
card.classList.add("rotate-45");
console.log(card.classList.contains("rotate-45"));
console.log(card.className);
console.log(card.classList);
card.classList.remove("rotate-45");
console.log(card.classList.contains("rotate-45"));
card.classList.toggle("rotate-45");
console.log(card.classList.contains("rotate-45"));
card.classList.toggle("rotate-45");
console.log(card.classList.contains("rotate-45"));
card.classList.toggle("rotate-45");
card.classList.replace("rotate-45", "rotate-135");
card.classList.add("opacity-80", "sepia");
card.classList.remove("opacity-80", "sepia");
card.classList.toggle("opacity-80");
card.classList.toggle("sepia");
*/
/*






*/
/*
const whatIsDOM = document.getElementById("que-es");

let text = `
    <p>
        El Modelo de Objetos del Documento (<b> <i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
    </p>
    <p>
        Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
        <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.
        </mark>
    </p>|
`;

// whatIsDOM.innerText = text;
whatIsDOM.textContent = text;
whatIsDOM.innerHTML = text;
// whatIsDOM.outerHTML = text;
*/

/*






*/
/*const cards = document.querySelector(".cards");

console.log(cards);
console.log(cards.children);
console.log(cards.childNodes);
console.log(cards.children[2]);
console.log(cards.parentElement);
console.log(cards.firstElementChild);
console.log(cards.lastElementChild);
console.log(cards.previousElementSibling);
console.log(cards.nextElementSibling);
console.log(cards.closest("div"));
console.log(cards.closest("body"));
console.log(cards.children[3].closest("section"));*/
/*





*/
/*const figure = document.createElement("figure"),
img = document.createElement("img"),
figcaption = document.createElement("figcaption"),
figcaptionText = document.createTextNode("Animals"),
cards = document.querySelector(".cards");
const figure2 = document.createElement("figure");


img.setAttribute("src", "https://placeimg.com/200/200/animals");
img.setAttribute("alt", "Animals");
figure.classList.add("card")

figcaption.appendChild(figcaptionText);
figure.appendChild(img);
figure.appendChild(figcaption);
cards.appendChild(figure);


figure2.innerHTML= `
    <img src="https://placeimg.com/200/200/people" alt="People">
    <figcaption>People</figcaption>
`;

figure2.classList.add("card");
cards.appendChild(figure2);

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
ul = document.createElement("ul")

document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild(ul);

estaciones.forEach(el => {
    const li = document.createElement("li");
    li.textContent = el;
    ul.appendChild(li);
});

const continentes = ["Africa", "América", "Asia", "Europa", "Oceanía"],
ul2 = document.createElement("ul");

document.write("<h3>Continentes del mundo</h3>");
document.body.appendChild(ul2);

ul2.innerHTML = "";
continentes.forEach(el => (ul2.innerHTML += `<li>${el}</li`));

const meses = ["Enero",
"Febrero",
"Marzo",
"Abril",
"Mayo",
"Junio",
"Julio",
"Agosto",
"Septiembre",
"Octubre",
"Noviembre",
"Diciembre"
];

ul3 = document.createElement("lu");
fragmento = document.createDocumentFragment();

meses.forEach(el => {
    const li = document.createElement("li");
    li.textContent = el;
    fragmento.appendChild(li);
});

document.write("<h3>Meses del Año</h3>");
ul3.appendChild(fragmento);
document.body.appendChild(ul3);*/
/*



*/
/*const cards = document.querySelector(".cards"),
template = document.getElementById("template-card").content,
fragment = document.createDocumentFragment(),
cardContent = [
    {
        title: "Tecnología",
        img: "https://placeimg.com/200/200/tech",
    },
    {
        title: "Animales",
        img: "https://placeimg.com/200/200/animals",
    },
    {
        title: "Arquitectura",
        img: "https://placeimg.com/200/200/arch",
    },
    {
        title: "Gente",
        img: "https://placeimg.com/200/200/people",
    },
    {
        title: "Naturaleza",
        img: "https://placeimg.com/200/200/nature",
    },
];

cardContent.forEach(el => {
    template.querySelector("img").setAttribute("src", el.img);
    template.querySelector("img").setAttribute("alt", el.title);
    template.querySelector("figcaption").textContent = el.title;

    let clone = document.importNode(template, true);
    fragment.appendChild(clone);
});

cards.appendChild(fragment);*/
/*




*/
/*const cards = document.querySelector(".cards"),
newCard = document.createElement("figure"),
cloneCards = cards.cloneNode(true);

newCard.innerHTML = `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption>Any</figcaption>
`;

newCard.classList.add("card");

// cards.replaceChild(newCard, cards.children[2]);
// cards.insertBefore(newCard, cards.firstElementChild);
// cards.removeChild(cards.lastElementChild);
document.body.appendChild(cloneCards);*/
/*




*/
/*
insertAdjacent.
insertAdjacentElement(position, el)
insertAdjacentHTML(position, html)
insertAdjacentText(position, text)
Posiciones:
beforebegin(hermano anterior)
afterbegin(primer hijo)
beforeend(ultimo hijo)
afterend(hermano siguiente)
*/
/*const cards = document.querySelector(".cards"),
newCard = document.createElement("figure");

let contenCard = `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption></figcaption>
`;
newCard.classList.add("card");

newCard.insertAdjacentHTML("beforeend", contenCard);
newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");
cards.insertAdjacentElement("afterbegin", newCard);*/

// Agrega al inicio 
// cards.prepend(newCard);
// Agrega al final
// cards.append(newCard);
// Agrega como hermano anterior a la section cards
// cards.before(newCard);
// Agrega como hermano posterior a la section cards
// cards.after(newCard);
/*




*/
/*function holaMundo() {
    alert("Hola Mundo");
    console.log(event);
}

function saludar(nombre = "Desconocid@") {
    alert(`Hola ${nombre}`);
    console.log(event);
}

const eventoSemantico = document.getElementById("evento-semantico"),
eventoMultiple = document.getElementById("evento-multiple");
eventoRemover = document.getElementById("evento-remover");

eventoSemantico.onclick = holaMundo;
eventoSemantico.onclick = function (e) {
    alert("Hola Mundo manejador de eventos semanticos");
    console.log(e);
    console.log(event);
};

eventoMultiple.addEventListener("click", holaMundo);
eventoMultiple.addEventListener("click", (e) => {
    alert("Hola Mundo manejador de eventos múltiples");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(event);
});

eventoMultiple.addEventListener("click", () => { 
    saludar()
    saludar("Fernando");
});

const removerDobleClick = (e) => {
    alert(`Removiendo el evento de tipo ${e.type}`);
    console.log(e);
    eventoRemover.removeEventListener("dblclick", removerDobleClick);
    eventoRemover.disabled = true;
}

eventoRemover.addEventListener("dblclick", removerDobleClick);*/
/*




*/
// const $divEventos = document.querySelectorAll(".eventos-flujo div"),
// $linkEventos = document.querySelector(".eventos-flujo a");

/*function flujoEventos(e) {
    console.log(`Hola te saluda ${this}, el click lo origino ${e.target.className}`);
    // e.stopPropagation();
}

document.addEventListener("click", (e) => {
    console.log("Click en ", e.target);

    if (e.target.matches(".eventos-flujo div")) {
        flujoEventos(e);
    }

    if (e.target.matches(".eventos-flujo a")) {
        alert("Fernando");
        e.preventDefault();
    }

});*/

/*$divEventos.forEach(div => {
    // FASE DE BURBUJA
    div.addEventListener("click", flujoEventos);
    // div.addEventListener("click", flujoEventos, false);
    // FASE DE CAPTURA
    // div.addEventListener("click", flujoEventos, true);
    // div.addEventListener("click", flujoEventos, {
    //     capture: false,
    //     once: true,
    // });
});

$linkEventos.addEventListener("click", (e) => {
    alert("Fernando");
    // Detiene el comportamiento por defecto del formulario
    e.preventDefault();
    e.stopPropagation();
});*/

/*window.addEventListener("resize", e => {
    console.clear();
    console.log("********** Evento Risize *********");
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.outerWidth);
    console.log(window.outerHeight);
    console.log(e);
});

window.addEventListener("scroll", e => {
    console.clear();
    console.log("********** Evento Scroll **********");
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
});

window.addEventListener("load", e => {
    // console.clear();
    console.log("********** Evento Load **********");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
});

document.addEventListener("DOMContentLoaded", e => {
    console.log("********** Evento DOMContentLoaded **********");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
});*/

// window.alert("Alerta");
// window.confirm("Confirmación");
// window.prompt("Aviso");
/*const $btnAbrir = document.getElementById("abrir-ventana"),
$btnCerrar = document.getElementById("cerrar-ventana"),
$btnImprimir = document.getElementById("imprimir-ventana");

let ventana;

$btnAbrir.addEventListener("click", e => {
    ventana = window.open("https://jonmircha.com")
});

$btnCerrar.addEventListener("click", e => {
    // window.close()
    ventana.close()
});

$btnImprimir.addEventListener("click", e => {
    window.print();
});*/

/*console.log("*************** Objeto URL (locaction) ***************");
console.log(location);
//La ruta de la cual se origina: http://127.0.0.1:5500
console.log(location.origin);
//El protocolo: http:
console.log(location.protocol);
//Host: 127.0.0.1:5500
console.log(location.host);
//Hostname: 127.0.0.1
console.log(location.hostname);
//Puerto: 5500
console.log(location.port);
Href: http://127.0.0.1:5500/60_dom.html
console.log(location.href);
//Para rutas amigables url/contactos
console.log(location.hash);
//Variables: ?nombre=jose&edad=22
console.log(location.search);
//Archivo consultado: /60_dom.html
console.log(location.pathname);
// location.reload()*/

/*console.log("*************** Objeto Historia (history) ***************");
console.log(history);
console.log(history.length);
//Cuantas pagínas quieres ir hacia atrás 
// console.log(history.back(3));
//Cuantas pagínas quieres ir hacia adelante 
// console.log(history.forward(3));
//Mismo manejo que el back pero con signo - (atrás) y que forward con signo + (adelante)
// console.log(history.go(-1));*/

console.log("*************** Objeto Navegador (navigator) ***************");
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent);


