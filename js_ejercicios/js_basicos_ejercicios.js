// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
function validarCadena(c) {
    try {
        if (typeof c === "string") {
            console.log(`El número de caracteres es: ${c.length}`);            
        } else {
            throw new Error("El contenido ingresado no es un STRING");
        }
    } catch (error) {
        console.log(`Se produjo el siguiente error ${error}`);
    }
}

const validarCadena2 = (cadena = "") => (!cadena) ? console.warn("No ingresaste ninguna cadena") : console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`)

// validarCadena("cadena");

// validarCadena2();
// validarCadena2("Hola amegos");

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
function numCarateres(c, num) {
    try {
        if (typeof c === "string" && !isNaN(num)) {            
            if (num > 0 && num < c.length) {
                console.log(`Cadena recortada: ${c.slice(0, num)}`);                
            } else {
                throw new Error("La cantidad de carateres a mostrar está fuera del rango");                
            }
        } else {
            throw new Error("No es el tipo de datos requeridos");
        }
    } catch (error) {
        console.log(`Se produjo el siguiente error ${error}`);
    }
}

const recortarCadena = (cadena = "", longuitud = undefined) => {
    (!cadena) 
    ? console.warn("No ingresaste una cadena de texto") 
    : (longuitud === undefined || longuitud < 0 || longuitud > cadena.length)
        ? console.warn("No ingresaste la longuitud para recortar el texto")
        : console.info(cadena.slice(0, longuitud));
}

// recortarCadena("Hola pe", 6);
// numCarateres("cadena2", 3 );

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
function arrayCadena(c, sep) {
    try {
        if (typeof c === "string") {
            let arr = c.split(sep);
            console.log(`El array a raíz de la cadena es:`);              
            console.log(arr);
        } else {
            throw new Error("El contenido ingresado no es un STRING");
        }
    } catch (error) {
        console.log(`Se produjo el siguiente error ${error}`);
    }
}

const cadenaAArreglo = (cadena = "", separador = undefined) => {
    (!cadena) 
    ? console.warn("No ingresaste una cadena de texto") 
    : (separador === undefined)
        ? console.warn("No ingresaste algun separador")
        : console.info(cadena.split(separador));
} 

// cadenaAArreglo("hola estoy", " ");
// arrayCadena("Hola putos putitos", " ");

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
function numRepetidos(c, num) {
    try {
        if (typeof c === "string" && !isNaN(num)) {            
            if (num > 0 && num <= c.length) {
                console.log(`Cadena repetida: ${c.repeat(num)}`);                
            } else {
                throw new Error("La cantidad de carateres a repetir está fuera del rango");                
            }
        } else {
            throw new Error("No es el tipo de datos requeridos");
        }
    } catch (error) {
        console.log(`Se produjo el siguiente error ${error}`);
    }
}

const palabraARepetir = (cadena = "", veces = undefined) => {
    (!cadena) 
    ? console.warn("No ingresaste una cadena de texto") 
    : (veces === undefined || Math.sign(veces) === -1)
        ? console.warn("No se ingreso una cantidad validad")
        : console.info(`Cadena repetida: ${cadena.repeat(veces)}`);
} 

// palabraARepetir("hola", 3)

// numRepetidos("hola", "3");


// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
/*split() separará cada carácter de una cadena y lo convertirá en un array.
reverse() tomará esa matriz e invertirá los elementos dentro de ella.
join() unirá los caracteres que han sido invertidos por la función reverse().*/

const invertirPalabra = (cadena = "") => {
    (!cadena) 
    ? console.warn("No ingreso ninguna palabra")
    : console.log(cadena.split("").reverse().join(""));
}

invertirPalabra("Hola mundo")

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
console.clear();
const contarPalabra = (cadena = "", palabra = "") => {
    
    if (!cadena) return console.warn("No ingreso ninguna palabra");
    
    let aux = cadena.split(" ");
    let count = 0;
    aux.forEach(element => {
        if (element === palabra) count++;
    });
    console.log(count);        
    
}
contarPalabra("hola mundo adios mundo", "mundo");

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
console.clear();
const palindromo = (palabra = "") => {
    palabra = palabra.toLowerCase();
    let palindro = palabra.split("").reverse().join("");
    
    (!palabra) 
    ? console.warn("No ingreso ninguna palabra") 
    : (palabra === palindro) 
    ? console.info("La palabra es un palindromo") 
    : console.warn("La palabra no es un palindromo");
}
palindromo("ana");

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
console.clear();
const patron = (texto = "", patron = "") => {

    if (!texto || !patron) {
        console.log("No ingreso una cadena y/o patron requerido") 
    }else {
        let aux = texto.split(patron).join("");
        console.info("Patrón eliminado: ", aux);
    }    
}

patron("xy1, xy2, xy3", "xy");

const patron2 = (texto = "", patron = "") => {
    (!texto) 
    ? console.log("No ingreso una cadena requerida") 
    :(!patron)
        ?console.log("No ingreso patron requerido") 
        :console.info(texto.replace(new RegExp(patron, "ig"), ""));
        
}

patron2("xy1, xy2, xy3", "xy");


// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
console.clear();

const numAleatorio = (min = undefined, max = undefined) => {
    return  Math.round((Math.random() * (max - min + 1)) + min);
}

console.log(numAleatorio(501, 600));


// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
console.clear();

const capicua = (numero = undefined) => {
    if (!numero) return console.warn("No ingreso ningun número");
    
    if (typeof numero !== "number") return console.warn("El valor ingresado no es un numero");

    let capicua = numero.toString().split("").reverse().join("");
    let capicuaInt = parseInt(capicua);
        
    (numero === capicuaInt) 
    ? console.info("El número es capicúa") 
    : console.warn("El número es no capicúa");
}
capicua(191);
// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
console.clear();

const factorial = (numero = undefined) => {
    if (numero === undefined) return console.warn("No ingreaste un número"); 
    if (numero === 0) return console.warn("El número no puede ser 0"); 
    if (Math.sign(numero) === -1) return console.warn("El número no puede ser negativo"); 
    if (typeof numero !== "number") return console.warn("El valor ingresado no es un número"); 
    
    let aux = 1; 
    for (let i = 1; i <= numero; i++) {
        aux = aux * i;
    }
    console.info(`El factorial de ${numero} es: ${aux}`);
}

factorial("5");

// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
console.clear();

const primo = (numero = undefined) => {
    if (numero === undefined) return console.warn("No ingreaste un número"); 
    if (numero === 0) return console.warn("El número no puede ser 0"); 
    if (numero === 1) return console.warn("El número no puede ser 0"); 
    if (Math.sign(numero) === -1) return console.warn("El número no puede ser negativo"); 
    if (typeof numero !== "number") return console.warn("El valor ingresado no es un número"); 
    
    let aux = 0; 
    for (let i = 1; i <= numero; i++) {
        if (numero%i === 0) aux++;
    }
    (aux === 2) ? console.info(`El número ${numero} es primo`) : console.info(`El número ${numero} no es primo`)
}

primo(2);

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
console.clear();

const parImpar = (numero = undefined) => {
    if (numero === undefined) return console.warn("No ingreaste un número"); 
    if (typeof numero !== "number") return console.warn("El valor ingresado no es un número"); 
    
    (numero%2 === 0) ? console.info(`El número ${numero} es par`) : console.info(`El número ${numero} es impar`)
}
parImpar(5);


// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
console.clear();

const convertirCAF = (grados = undefined, tipo = "") => {
    if (grados === undefined) return console.warn("No ingreaste cantidad de grados a convertir"); 
    if (typeof grados !== "number") return console.warn("El valor ingresado no es un número"); 
    if (!tipo) return console.warn("No ingreaste tipo de conversión"); 
    if (typeof tipo !== "string") return console.warn("El valor ingresado no es un tipo de conversión"); 


    let conversion = 0;
    switch (tipo) {
        case "C":
            conversion = (grados - 32) / 5/9;
            console.info(`De ${grados} Fahrenheit a ${conversion} Celsius`);
            break;
        case "F":
            conversion = (grados * 9/5) + 32;
            console.info(`De ${grados} Celsius a ${conversion} Fahrenheit `);
            break;
    
        default:
            console.info("Opción no valida")
            break;
    }
}

convertirCAF(5, "F");

// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
console.clear();
const convertirBAD = (numero, base) => {
    if (numero === undefined) return console.warn("No se ingreso un número"); 
    if (typeof numero !== "number") return console.warn("El valor ingresado no es un número"); 
    if (base === undefined) return console.warn("No se ingreso la base a convertir"); 
    if (typeof base !== "number") return console.warn("El valor ingresado no es un número"); 

    switch (base) {
        case 2:
            console.info(`El decimal ${numero} convertido es ${parseInt(numero, base)} base 10`)
            break;
        case 10:
            console.info(`El binario ${numero} convertido es ${numero.toString(2)} base 2`)
            break;
    
        default:
            console.info("Opción no valida");
            break;
    }
}

convertirBAD(101, 10);

// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
console.clear();

const descuento = (numero = undefined,  desc = undefined) => {
    if (numero === undefined) return console.warn("No se ingreso un número"); 
    if (typeof numero !== "number") return console.warn("El valor ingresado no es un número"); 
    if (numero === 0) return console.warn("El número no puede ser 0"); 
    if (Math.sign(numero) === -1) return console.warn("El número no puede ser negativo");
    
    if (desc === undefined) return console.warn("No se ingreso el descuento"); 
    if (typeof desc !== "number") return console.warn("El valor ingresado no es un número"); 
    if (Math.sign(desc) === -1) return console.warn("El descuento no puede ser negativo");

    console.info(`Monto con descuento es ${(numero = numero - (numero * desc/100))}`)
}

descuento(1000, 20);

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
console.clear();

const fechaDate = (fecha = undefined) => {
    if (fecha === undefined) return console.warn("El valor que ingresaste no es una fecha valida");
    if (!fecha instanceof Date) return console.error("El valor que ingresaste no e suna fecha valida");

    let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
    aniosEnMS = 1000 * 60 * 60 * 24 * 365,
    aniosHumanos = Math.floor(hoyMenosFecha/aniosEnMS);

    return (Math.sign(aniosHumanos) === -1)
    ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`)
    :(Math.sign(aniosHumanos) === 1)
        ?console.info(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}.`)
        :console.info(`Estamos en el año actual ${fecha.getFullYear()}.`)

}

fechaDate(new Date(1999, 9, 19));

// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
console.clear();

const contarLetras = (cadena = "") => {
    if (!cadena) return console.warn("No ingresaste una cadena");
    if (typeof cadena !== "string") return console.warn("El valor ingresado no es una cadena de texto");

    let vocales = 0, 
    consonantes = 0;

    cadena = cadena.toLowerCase();

    for (const letra of cadena) {
        
        if (/[aeiouáéíóú]/.test(letra)) vocales++;
        if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++;
    }
    
    return console.info({
        cadena,
        vocales,
        consonantes
    });
}
contarLetras("Hola");

// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
console.clear();

const validarNombre = (nombre = "") => {
    if (!nombre) return console.warn("No ingresaste un nombre");
    if (typeof nombre !== "string") return console.warn("El valor ingresado no es un nombre");

    let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g.test(nombre);

    return (expReg)
    ? console.info(`"${nombre} es un nombre valido"`)
    : console.warn(`"${nombre} no es un nombre valido"`);    
}

validarNombre("Fernando ")
// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
console.clear();

const validarCorreo = (correo = "") => {
    if (!correo) return console.warn("No ingresaste un correo");
    if (typeof correo !== "string") return console.warn("El valor ingresado no es un correo");

    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(correo);

    return (expReg)
    ? console.info(`"${correo} es un nombre valido"`)
    : console.warn(`"${correo} no es un nombre valido"`);    
}

validarCorreo("Fernando ")

// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
console.clear();

const devolverCuadrados = (arr = undefined) => {
    if (arr === undefined) return console.warn("No ingresaste un arreglo de números"); 
    
    if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
    
    if (arr.length === 0) return console.error("El arreglo es vacío");
    
    for (const num of arr) {
        if (typeof num !== "number") return console.error(`El valor "${num} ingresado, NO es un número`);        
    }

    //MAP: El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
    const newArr = arr.map(el => el * el);

    return console.info(`El arreglo original: ${arr},\nArreglo elevado al cuadrado: ${newArr}`);
}

devolverCuadrados([1, 2, 3]);

// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
console.clear();

const arrayMaxMin = (arr = undefined) => {
    if (arr === undefined) return console.warn("No ingresaste un arreglo de números"); 
    
    if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
    
    if (arr.length === 0) return console.error("El arreglo es vacío");
    
    for (const num of arr) {
        if (typeof num !== "number") return console.error(`El valor "${num} ingresado, NO es un número`);        
    }


    return console.info(`Arreglo original: ${arr},\nValor mayor: ${Math.max(...arr)},\nValor menor: ${Math.min(...arr)}`);
}

arrayMaxMin([1, 2, 3, 5]);

// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
console.clear();

const separarParesImpares = (arr = undefined) => {
    if (arr === undefined) return console.warn("No ingresaste un arreglo de números"); 
    
    if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
    
    if (arr.length === 0) return console.error("El arreglo es vacío");
    
    for (const num of arr) {
        if (typeof num !== "number") return console.error(`El valor "${num} ingresado, NO es un número`);        
    }

    //FILTER: El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
    return console.info({
        pares: arr.filter(num => num % 2 === 0),
        impares: arr.filter(num => num % 2 === 1),
    });
}

separarParesImpares([1, 2, 3, 5]);

// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
console.clear();

const ordenarAscDesc = (arr = undefined) => {
    if (arr === undefined) return console.warn("No ingresaste un arreglo de números"); 
    
    if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
    
    if (arr.length === 0) return console.error("El arreglo es vacío");
    
    for (const num of arr) {
        if (typeof num !== "number") return console.error(`El valor "${num} ingresado, NO es un número`);        
    }

    //SORT: El método sort() ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado.
    return console.info({
        ascendente: arr.map(el => el).sort(),
        descendente: arr.map(el => el).sort().reverse()
    });
}

ordenarAscDesc([1, 4, 2, 3, 5]);


// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
console.clear();

const quitarDuplicados = (arr = undefined) => {
    if (arr === undefined) return console.warn("No ingresaste un arreglo de números"); 
    
    if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
    
    if (arr.length === 0) return console.error("El arreglo es vacío");
    
    for (const num of arr) {
        if (typeof num !== "number") return console.error(`El valor "${num} ingresado, NO es un número`);        
    }
    

    /*return console.info({
        original: arr,
        sinDuplicados: arr.filter((value, index, self) => self.indexOf(value) === index)
    });*/
    
    //SET: El objeto Set permite almacenar valores únicos de cualquier tipo, incluso valores primitivos u referencias a objetos.
    return console.info({
        original: arr,
        sinDuplicados: [... new Set(arr)]
    });
}

quitarDuplicados([1, 4, 2, 3, 5, 1, 2, 3]);

// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
console.clear();

const promedio = (arr = undefined) => {
    if (arr === undefined) return console.warn("No ingresaste un arreglo de números"); 
    
    if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
    
    if (arr.length === 0) return console.error("El arreglo es vacío");
    
    for (const num of arr) {
        if (typeof num !== "number") return console.error(`El valor "${num} ingresado, NO es un número`);        
    }

    /*
    El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

    La función reductora recibe cuatro argumentos:

    Acumulador (acc)
    Valor Actual (cur)
    Índice Actual (idx)
    Array (src)
    */
    return console.info(
        arr.reduce((total, num, indice, arr) => {
            total += num;

            if (indice === arr.length-1) {
                return `El promedio de ${arr.join(" + ")} es ${total/arr.length}`; 
            } else {
                return total;
            }
        })
    );
}

promedio([1,2,3,4]);
console.clear();

/*
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
- Todos los datos del objeto son obligatorios.
- Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
- Valida que el título no rebase los 100 caracteres.
- Valida que el director no rebase los 50 caracteres.
- Valida que el año de estreno sea un número entero de 4 dígitos.
- Valida que el país o paises sea introducidos en forma de arreglo.
- Valida que los géneros sean introducidos en forma de arreglo.
- Valida que los géneros introducidos esten dentro de los géneros aceptados*.
- Crea un método estático que devuelva los géneros aceptados*.
- Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
- Crea un método que devuelva toda la ficha técnica de la película.
- Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/

class Pelicula {
    constructor ({id, titulo, director, estreno, pais, generos, calificación}) {
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificación = calificación;

        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPais(pais);
        this.validarGeneros(generos);
        this.validarCalificacion(calificación);
    }

    static get listaGeneros(){
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"]
    }
    static generosAceptados(){
        return console.info(`Los generos aceptados son: ${Pelicula.listaGeneros.join(", ")}`)
    }
    
    //VALIDACIONES
    validarCadena(propiedad, valor){
        if (!valor) return console.warn(`${propiedad} "${valor}" esta vacío`);

        if (typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado, NO es una cadena de texto`);

        return true;
    }
    
    validarLonguitudCadena(propiedad, valor, longuitud){
        if (valor.length > longuitud) {
            return console.warn(`${propiedad} "${valor} excede el número de caracteres permitidos ${longuitud}"`)
        }

        return true;        
    }
    
    validarNumero(propiedad, valor){
        if (valor === undefined) return console.warn("No se ingreso un número"); 
        if (typeof valor !== "number") return console.warn(`${propiedad} "${valor}" ingresado, NO es un número`); 
        if (valor === 0) return console.warn("El número no puede ser 0"); 
        if (Math.sign(valor) === -1) return console.warn("El número no puede ser negativo");

        return true;
    }

    validarArreglo(propiedad, valor){
        if (!valor) return console.warn(`${propiedad} "${valor}" esta vacío`); 
    
        if (!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" ingresado, NO es un arreglo`);
        
        if (valor.length === 0) return console.error(`${propiedad} "${valor}" no tiene datos`);
        
        for (const cadena of valor) {
            if (typeof cadena !== "string") return console.error(`El valor "${cadena} ingresado, NO es un número`); 
        }

        return true;
    }

    //FUNCIONES CON VALIDACIONES
    validarIMDB(id){
        if (this.validarCadena("IMDB id", id)) 
            if (!(/^([a-z]){2}([0-9]){7}$/.test(id))) 
                return console.error(`IMDB id "${id}" no es valido, debe tener 9 caracteres, los 2 primeros letras minusculas, los 7 números`);
    }
    
    validarTitulo(titulo){
        if (this.validarCadena("Título", titulo)) {
            this.validarLonguitudCadena("Título", titulo, 100)
        }
    }

    validarDirector(director){
        if (this.validarCadena("Director", director)) {
            this.validarLonguitudCadena("Director", director, 50)
        }
    }

    validarEstreno(estreno){
        if (this.validarNumero("Año Estreno", estreno)) 
            if (!(/^([0-9]){4}$/.test(estreno))) 
                return console.error(`Año Estreno "${estreno}" no es valido, debe ser un número de 4 dígitos`);
    }

    validarPais(pais){
        this.validarArreglo("País", pais);
    }

    validarGeneros(generos){
        if(this.validarArreglo("Generos", generos)){
            for (const genero of generos) {
                if(!Pelicula.listaGeneros.includes(genero)){
                    console.error(`Género(s) incorrestos "${generos.join(", ")}"`);
                    Pelicula.generosAceptados();
                }
            }
        }
    }

    validarCalificacion(calificacion){
        if (this.validarNumero("Calificacion", calificacion)) 
            return (calificacion < 0 || calificacion > 10)
            ? console.error("La calificación tiene que estar en un rango entre 0 y 10")
            : this.calificación = calificacion.toFixed(1);
    }

    fichaTecnica(){
        console.info(`Ficha Técnica:\nTítulo: "${this.titulo}"\nDirector:"${this.director}"\nAño:"${this.estreno}"\nPaís:"${this.pais.join("-")}"\nGéneros:"${this.generos.join("-")}"\nCalificación:"${this.calificación}"\nIMDB id:"${this.id}"`);
    }

}

// Pelicula.generosAceptados();

/*const peli = new Pelicula({
    id: "tt1233567",
    titulo: "1234567890",
    director: "1234567890",
    estreno: 1245,
    pais: ["Londres", "Portugal"],
    generos: ["Comedy"],
    calificación: 1
});

peli.fichaTecnica();]*/


const peli = [
    {
        id: "tt1233567",
        titulo: "1234567890",
        director: "1234567890",
        estreno: 1245,
        pais: ["Londres", "Portugal"],
        generos: ["Comedy"],
        calificación: 1
    },

    {
        id: "tt1233567",
        titulo: "1234567890",
        director: "1234567890",
        estreno: 1245,
        pais: ["Londres", "Portugal"],
        generos: ["Comedy"],
        calificación: 1
    },
    {
        id: "tt1233567",
        titulo: "1234567890",
        director: "1234567890",
        estreno: 1245,
        pais: ["Londres", "Portugal"],
        generos: ["Comedy"],
        calificación: 1
    }
];

peli.forEach(el => new Pelicula(el).fichaTecnica());

