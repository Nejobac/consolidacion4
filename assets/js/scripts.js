import { getData, mostrar, obtenerPersonajes } from "./functions.js";

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");


const btn1ClickHandler = async() => {
    const generarPersonajes = obtenerPersonajes(1, 5);
    mostrar(generarPersonajes, 1, 5, btn1);
    btn1.removeEventListener("click", btn1ClickHandler);
}
btn1.addEventListener("click", btn1ClickHandler);

const btn2ClickHandler = async() => {
    const generarPersonajes = obtenerPersonajes(6, 10);
    mostrar(generarPersonajes, 6, 10, btn2);
    btn2.removeEventListener("click", btn2ClickHandler);
}
btn2.addEventListener("click", btn2ClickHandler);

const btn3ClickHandler = async() => {
    const generarPersonajes = obtenerPersonajes(11, 16);
    mostrar(generarPersonajes, 11, 16, btn3);
    btn3.removeEventListener("click", btn3ClickHandler);
}
btn3.addEventListener("click", btn3ClickHandler);


(async () => {
    try {
        const result = await getData();
        let ul = document.getElementById("list");
        let html = ""
        result.forEach((personaje) => {
            html +=
                `
                <li>
                    <div class="content" id="${personaje.name}">
                        <div class="card shadow-lg p-3 mb-5 bg-body rounded">
                            <span class="timeline-icon"></span>
                        </div>
                    </div>
                </li>
                `
        });
        ul.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
});
        /*
<p class="villano-button" id="villanos-${saga.id}">Obtener Los villanos de la saga</p>
<p class="heroes-button" id="heores-${saga.id}">Obtener Los heroes de la saga</p> 
<li>
<div class="content" id="dz-${personaje.name}">
    <div class="card shadow-lg p-3 mb-5 bg-body rounded">
        <span class="timeline-icon"></span>
        <h3>${personaje.name}</h3>
        <p>
            <span>Estatura: ${personaje.height}cm.</span>
            <span>Peso: ${personaje.mass}kg.</span>
        </p>
    </div>
</div>
</li>
*/