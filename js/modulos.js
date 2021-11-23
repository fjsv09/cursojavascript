import Saludar, {saludar, PI, usuario} from "./constantes.js";
import {aritmetica} from "./aritmeticas.js";


console.log("Archivo modulos.js");
console.log(PI, usuario);
console.log(aritmetica.sumar(3, 4), aritmetica.restar(3, 4));

saludar();

let saludo = new Saludar();
saludo;