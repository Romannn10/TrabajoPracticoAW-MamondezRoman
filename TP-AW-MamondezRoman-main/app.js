import jugadores from "./jugadores.js"
console.log(jugadores)

//- ELEMENTOS DEL DOM -//
const contenedorJugador = document.querySelector("#main-plantel")

//---------------------------------------------------------------//

function cargarJugadores() {

    contenedorJugador.innerHTML = "";

    jugadores.forEach((jugador) => {
        
        const div = document.createElement("div");
        div.classList.add("curso");
        div.innerHTML = `
        <article class="main-plantel__tarjeta">
            <div class="main-plantel__targeta-jugador">
                <img src="${jugador.imagen}" alt="">
                <h3>${jugador.nombre}</h3>
                <h4>Pais: ${jugador.nacionalidad}</h4>
                <h4>Edad: ${jugador.edad}</h4>
                <h4>Posicion: ${jugador.posicion}</h4>
                <h4>Dorsal: ${jugador.dorsal}</h4>
            </div>
        </article>
        `;

        contenedorJugador.appendChild(div);
    });
}

cargarJugadores();