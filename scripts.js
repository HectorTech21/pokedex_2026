

import * as pokeApi from "./pokeApi/api.js"
import * as bootstrap from "./node_modules/bootstrap/dist/js/bootstrap.min.js";


window.addEventListener("load", function(){

    let pokemonActual = 1;
    let listaPokemons = [];
    let filtroActual = "todos";
    let urlGrito = "";
    let textoVoz = "";

    let indicadores = document.getElementById("indicadores");

    let pantallaNumero = document.getElementById("pantallaNumero");
    let pantallaNombre = document.getElementById("pantallaNombre");
    let imagenPokemon = document.getElementById("imagenPokemon");
    let botonGrito = document.getElementById("botonGrito");
    let ondasGrito = document.getElementById("ondasGrito");

    let datosNumero = document.getElementById("datosNumero");
    let datosNombre = document.getElementById("datosNombre");
    let datosTipos = document.getElementById("datosTipos");
    let datosEspecie = document.getElementById("datosEspecie");
    let datosAltura = document.getElementById("datosAltura");
    let datosPeso = document.getElementById("datosPeso");
    let datosDescripcion = document.getElementById("datosDescripcion");

    let barraVida = document.getElementById("barraVida");
    let barraAtaque = document.getElementById("barraAtaque");
    let barraDefensa = document.getElementById("barraDefensa");
    let barraVelocidad = document.getElementById("barraVelocidad");
    let valorVida = document.getElementById("valorVida");
    let valorAtaque = document.getElementById("valorAtaque");
    let valorDefensa = document.getElementById("valorDefensa");
    let valorVelocidad = document.getElementById("valorVelocidad");

    let botonAnterior = document.getElementById("botonAnterior");
    let botonSiguiente = document.getElementById("botonSiguiente");
    let textoAnterior = document.getElementById("textoAnterior");
    let textoSiguiente = document.getElementById("textoSiguiente");
    let crucetaArriba = document.getElementById("crucetaArriba");
    let crucetaAbajo = document.getElementById("crucetaAbajo");
    let crucetaIzquierda = document.getElementById("crucetaIzquierda");
    let crucetaDerecha = document.getElementById("crucetaDerecha");
    let botonAleatorio = document.getElementById("botonAleatorio");

    let formBuscar = document.getElementById("formBuscar");
    let inputBuscar = document.getElementById("inputBuscar");
    let listaNombres = document.getElementById("listaNombres");
    let teclas = document.querySelectorAll(".tecla");
    let teclaBorrar = document.getElementById("teclaBorrar");
    let teclaBuscar = document.getElementById("teclaBuscar");
    let botonesFiltro = document.querySelectorAll(".filtro");
    let botonVoz = document.getElementById("botonVoz");

    let catalogoLista = document.getElementById("catalogoLista");
    let catalogoContador = document.getElementById("catalogoContador");
    let pieTotal = document.getElementById("pieTotal");


    let formatearNumero = (numero) => {
        return "#" + String(numero).padStart(3, "0");
    }

    let ajustarNumero = (numero) => {
        if (numero < 1) {
            return numero + listaPokemons.length;
        }
        if (numero > listaPokemons.length) {
            return numero - listaPokemons.length;
        }
        return numero;
    }

    let textoEnEspanol = (lista, campo) => {
        for (let i = 0; i < lista.length; i++) {
            if (lista[i].language.name === "es") {
                return lista[i][campo];
            }
        }
        return "---";
    }

    let limpiarTexto = (texto) => {
        texto = texto.replaceAll("\n", " ");
        texto = texto.replaceAll("\f", " ");
        return texto;
    }


    let pintarPantalla = (pokemonData) => {
        pantallaNumero.textContent = "ID: " + formatearNumero(pokemonData.id);
        pantallaNombre.textContent = pokemonData.name;
        imagenPokemon.src = pokemonData.sprites.other["official-artwork"].front_default;
        imagenPokemon.alt = pokemonData.name;
        urlGrito = pokemonData.cries.legacy;
    }

    let pintarDatos = (pokemonData, speciesData) => {
        let especie = textoEnEspanol(speciesData.genera, "genus");
        let descripcion = textoEnEspanol(speciesData.flavor_text_entries, "flavor_text");
        descripcion = limpiarTexto(descripcion);

        datosNumero.textContent = formatearNumero(pokemonData.id);
        datosNombre.textContent = pokemonData.name;
        datosEspecie.textContent = especie;
        datosAltura.textContent = (pokemonData.height / 10).toFixed(1) + " m";
        datosPeso.textContent = (pokemonData.weight / 10).toFixed(1) + " kg";
        datosDescripcion.textContent = '"' + descripcion + '"';

        textoVoz = pokemonData.name + ". " + especie + ". " + descripcion;
    }

    let pintarTipos = (types, nombresTipos) => {
        datosTipos.innerHTML = "";

        for (let i = 0; i < types.length; i++) {
            let etiqueta = document.createElement("span");
            etiqueta.classList.add("tipo", "tipo-" + types[i].type.name);
            etiqueta.textContent = nombresTipos[i];
            datosTipos.appendChild(etiqueta);
        }
    }

    let pintarBarra = (barra, valor) => {
        barra.innerHTML = "";
        let segmentosLlenos = Math.round(valor / 150 * 12);

        for (let i = 0; i < 12; i++) {
            let segmento = document.createElement("span");
            segmento.classList.add("segmento");
            if (i < segmentosLlenos) {
                segmento.classList.add("lleno");
            }
            barra.appendChild(segmento);
        }
    }

    let pintarEstadisticas = (stats) => {
        pintarBarra(barraVida, stats[0].base_stat);
        pintarBarra(barraAtaque, stats[1].base_stat);
        pintarBarra(barraDefensa, stats[2].base_stat);
        pintarBarra(barraVelocidad, stats[5].base_stat);

        valorVida.textContent = stats[0].base_stat;
        valorAtaque.textContent = stats[1].base_stat;
        valorDefensa.textContent = stats[2].base_stat;
        valorVelocidad.textContent = stats[5].base_stat;
    }

    let pintarVecinos = () => {
        let anterior = ajustarNumero(pokemonActual - 1);
        let siguiente = ajustarNumero(pokemonActual + 1);

        textoAnterior.textContent = formatearNumero(anterior) + " " + listaPokemons[anterior - 1].name;
        textoSiguiente.textContent = formatearNumero(siguiente) + " " + listaPokemons[siguiente - 1].name;
    }

    let marcarEnCatalogo = () => {
        let filas = catalogoLista.querySelectorAll(".catalogo-fila");

        for (let i = 0; i < filas.length; i++) {
            filas[i].classList.remove("activo");
        }

        let filaActual = filas[pokemonActual - 1];
        filaActual.classList.add("activo");
        catalogoLista.scrollTop = filaActual.offsetTop - catalogoLista.clientHeight / 2;
    }


    let traducirTipos = async (types) => {
        let nombresTipos = [];

        for (let i = 0; i < types.length; i++) {
            let tipoData = await pokeApi.getPokemonType(types[i].type.name);
            nombresTipos.push(textoEnEspanol(tipoData.names, "name"));
        }
        return nombresTipos;
    }

    let mostrarPokemon = async (id) => {
        pokemonActual = id;
        indicadores.classList.add("cargando");

        let pokemonData = await pokeApi.getPokemonById(id);
        let speciesData = await pokeApi.getPokemonSpecies(id);
        let nombresTipos = await traducirTipos(pokemonData.types);

        if (id !== pokemonActual) {
            return;
        }

        pintarPantalla(pokemonData);
        pintarDatos(pokemonData, speciesData);
        pintarTipos(pokemonData.types, nombresTipos);
        pintarEstadisticas(pokemonData.stats);
        pintarVecinos();
        marcarEnCatalogo();

        indicadores.classList.remove("cargando");
    }

    let moverse = (cantidad) => {
        mostrarPokemon(ajustarNumero(pokemonActual + cantidad));
    }


    let crearFila = async (nombre, numero) => {
        let fila = document.createElement("li");
        fila.dataset.nombre = nombre;
        fila.innerHTML = '<button type="button" class="catalogo-fila">'
            + '<img class="catalogo-imagen" alt="">'
            + '<span class="catalogo-numero">' + formatearNumero(numero) + '</span>'
            + '<span class="catalogo-nombre">' + nombre + '</span>'
            + '<span class="catalogo-tipo"></span>'
            + '</button>';

        fila.addEventListener("click", function(){
            mostrarPokemon(numero);
        });
        catalogoLista.appendChild(fila);

        let pokemonData = await pokeApi.getPokemonById(numero);
        fila.querySelector(".catalogo-imagen").src = pokemonData.sprites.front_default;
        fila.querySelector(".catalogo-tipo").textContent = pokemonData.types[0].type.name;
    }

    let crearOpcion = (nombre) => {
        let opcion = document.createElement("option");
        opcion.value = nombre;
        listaNombres.appendChild(opcion);
    }

    let cargarCatalogo = async () => {
        let pokemonData = await pokeApi.getAllPokemons();
        listaPokemons = pokemonData.results;

        catalogoContador.textContent = listaPokemons.length + " especímenes";
        pieTotal.textContent = listaPokemons.length;

        for (let i = 0; i < listaPokemons.length; i++) {
            crearFila(listaPokemons[i].name, i + 1);
            crearOpcion(listaPokemons[i].name);
        }
    }


    let buscarNumero = (texto) => {
        texto = texto.trim().toLowerCase();
        texto = texto.replace("#", "");

        let numero = Number(texto);
        if (numero >= 1 && numero <= listaPokemons.length) {
            return numero;
        }

        for (let i = 0; i < listaPokemons.length; i++) {
            if (listaPokemons[i].name === texto) {
                return i + 1;
            }
        }
        return 0;
    }


    let nombresDelTipo = async (tipo) => {
        let nombres = [];
        let tipoData = await pokeApi.getPokemonType(tipo);

        for (let i = 0; i < tipoData.pokemon.length; i++) {
            nombres.push(tipoData.pokemon[i].pokemon.name);
        }
        return nombres;
    }

    let filtrarCatalogo = async (tipo) => {
        filtroActual = tipo;
        let filas = catalogoLista.querySelectorAll("li");
        let nombres = [];
        let visibles = 0;

        if (tipo !== "todos") {
            nombres = await nombresDelTipo(tipo);
        }

        if (tipo !== filtroActual) {
            return;
        }

        for (let i = 0; i < filas.length; i++) {
            if (tipo === "todos" || nombres.includes(filas[i].dataset.nombre)) {
                filas[i].classList.remove("d-none");
                visibles++;
            } else {
                filas[i].classList.add("d-none");
            }
        }

        catalogoContador.textContent = visibles + " especímenes";
        catalogoLista.scrollTop = 0;
    }

    let marcarFiltro = (botonPulsado) => {
        for (let i = 0; i < botonesFiltro.length; i++) {
            botonesFiltro[i].classList.remove("activo");
        }
        botonPulsado.classList.add("activo");
    }


    botonAnterior.addEventListener("click", function(){
        moverse(-1);
    });

    botonSiguiente.addEventListener("click", function(){
        moverse(1);
    });

    crucetaIzquierda.addEventListener("click", function(){
        moverse(-1);
    });

    crucetaDerecha.addEventListener("click", function(){
        moverse(1);
    });

    crucetaArriba.addEventListener("click", function(){
        moverse(-10);
    });

    crucetaAbajo.addEventListener("click", function(){
        moverse(10);
    });


    formBuscar.addEventListener("submit", function($e){
        $e.preventDefault();

        let formData = new FormData(this);
        let pokemonNumber = buscarNumero(formData.get("pokemonSearch"));

        if (pokemonNumber === 0) {
            inputBuscar.classList.add("is-invalid");
            return;
        }

        inputBuscar.classList.remove("is-invalid");
        inputBuscar.value = "";
        mostrarPokemon(pokemonNumber);
    });

    formBuscar.addEventListener("reset", function(){
        inputBuscar.classList.remove("is-invalid");
        mostrarPokemon(1);
    });

    inputBuscar.addEventListener("input", function(){
        inputBuscar.classList.remove("is-invalid");
    });

    for (let i = 0; i < teclas.length; i++) {
        teclas[i].addEventListener("click", function(){
            inputBuscar.classList.remove("is-invalid");
            if (inputBuscar.value.length < 3) {
                inputBuscar.value = inputBuscar.value + this.dataset.numero;
            }
        });
    }

    teclaBorrar.addEventListener("click", function(){
        inputBuscar.classList.remove("is-invalid");
        inputBuscar.value = "";
    });

    teclaBuscar.addEventListener("click", function(){
        formBuscar.requestSubmit();
    });


    for (let i = 0; i < botonesFiltro.length; i++) {
        botonesFiltro[i].addEventListener("click", function(){
            marcarFiltro(this);
            filtrarCatalogo(this.dataset.tipo);
        });
    }

    botonAleatorio.addEventListener("click", function(){
        let numero = Math.floor(Math.random() * listaPokemons.length) + 1;
        mostrarPokemon(numero);
    });

    botonGrito.addEventListener("click", function(){
        let grito = new Audio(urlGrito);

        grito.addEventListener("playing", function(){
            ondasGrito.classList.add("sonando");
        });

        grito.addEventListener("ended", function(){
            ondasGrito.classList.remove("sonando");
        });

        grito.play();
    });

    botonVoz.addEventListener("click", function(){
        let voz = new SpeechSynthesisUtterance(textoVoz);
        voz.lang = "es-ES";

        voz.addEventListener("start", function(){
            botonVoz.classList.add("hablando");
        });

        voz.addEventListener("end", function(){
            botonVoz.classList.remove("hablando");
        });

        speechSynthesis.cancel();
        speechSynthesis.speak(voz);
    });


    let iniciar = async () => {
        await cargarCatalogo();
        mostrarPokemon(1);
    }

    iniciar();

});
