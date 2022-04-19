// PRIMERA FORMA DE TRABAJAR CON JSON XMLHttpRequest
(() => {
    // USO DE XMLHttpRequest
    // PRIMER PASO: Crear una instancia de XMLHttpRequest()
    const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();
    
    
    // SEGUNDO PASO: Asignar el o los eventos que se van usar en la petición
    xhr.addEventListener("readystatechange", (e) => {
        
        if (xhr.readyState !== 4) return;
        
        // console.log(xhr);        
        
        if (xhr.status >= 200 && xhr.status < 300) {
            // console.log("ÉXITO");        
            // console.log(xhr.responseText);        
            let json = JSON.parse(xhr.responseText)
            // console.log(json);

            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
                $fragment.appendChild($li);
            });

            $xhr.appendChild($fragment);

        } else {
            console.log("ERROR");      
            let message = xhr.statusText || "Ocurrió un error"
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
        }

        // console.log("Este mensaje cargará de cualquier forma");
        
    });
    
    // TERCER PASO: Abrir la petición, estblecer el metodo (GET) y por ultimo el recurso o URL (https://jsonplaceholder.typicode.com/users)
    // API publica
    // xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    // Archivo json local
    xhr.open("GET", "assets/users.json");

    // CUARTO PASO: Enviar la petición
    xhr.send();
    
})();

// SEGUNDA FORMA DE TRABAJAR CON JSON FETCH
(() => {

    const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")
    .then( res => res.ok ? res.json() : Promise.reject(res))
    .then(json => {
        // console.log(json);
        json.forEach(el => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
            $fragment.appendChild($li);
        });
            
        $fetch.appendChild($fragment);
    })
    .catch(err => {
        // console.log("Estamos en el catch", err);
        let message = err.statusText || "Ocurrió un error"
        $fetch.innerHTML = `Error ${err.status}: ${message}`;
    })
    .finally(() => 
    console.log("Esto se ejecutara independientemente del resultado de la promesa Fetch")
    );

})();