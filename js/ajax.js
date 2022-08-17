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
      let json = JSON.parse(xhr.responseText);
      // console.log(json);

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $xhr.appendChild($fragment);
    } else {
      console.log("ERROR");
      let message = xhr.statusText || "Ocurrió un error";
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

  // fetch("assets/users.json")
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      // console.log(json);
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      // console.log("Estamos en el catch", err);
      let message = err.statusText || "Ocurrió un error";
      $fetch.innerHTML = `Error ${err.status}: ${message}`;
    })
    .finally(
      () => {}
      // console.log("Esto se ejecutara independientemente del resultado de la promesa Fetch")
    );
})();

// TERCERA FORMA DE TRABAJAR CON JSON FETCH - ASYNC AWAIT
(() => {
  const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      // AWAIT: Hace que espere que se termine de ejecutar para continuar con la siguiente línea.
      let res = await fetch("https://jsonplaceholder.typicode.com/users"),
        json = await res.json();

      if (!res.ok) throw { status: res.status, statusText: res.statusText };

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $fetchAsync.appendChild($fragment);

      // console.log(res, json);
    } catch (err) {
      let message = err.statusText || "Ocurrió un error";
      $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
    } finally {
    }
  }

  getData();
})();

// CUARTA FORMA DE TRABAJAR CON JSON AXIOS
(() => {
  const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();

  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      // console.log(res);
      let json = res.data;

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $axios.appendChild($fragment);
    })
    .catch((err) => {
      // console.log("Estamos en el catch", err);
      let message = err.response.statusText || "Ocurrió un error";
      $axios.innerHTML = `Error ${err.response.status}: ${message}`;
    })
    .finally(() => {
      // console.log("Esto se ejecturá independientemente del resultado Axios");
    });
})();

// QUINTA FORMA DE TRABAJAR CON JSON AXIOS - ASYNC AWAIT
(() => {
  const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
        json = await res.data;

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $axiosAsync.appendChild($fragment);
    } catch (err) {
      let message = err.response.statusText || "Ocurrió un error";
      $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
    } finally {
      console.log("Esto se ejecturá independientemente del resultado Axios");
    }
  }

  getData();
})();
