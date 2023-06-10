export const getData = async () => {
    try {
        const data = await fetch("https://swapi.dev/api/people/")
        const { results } = await data.json();
        return results
    } catch (error) {
    }
}

export async function* obtenerPersonajes(desde, hasta) {
    try {
        for (let i = desde; i <= hasta; i++) {
            const data = await fetch(`https://swapi.dev/api/people/${i}/`);
            const personaje = await data.json();
            yield personaje;
        }
    } catch (error) {
        throw new Error("Error al conseguir la información");
    }
}
export async function mostrar(generadorPersonajes, desde, hasta, btn) {
    try {
        const divContent = btn.closest(".content");
        btn.removeEventListener("mouseenter", mostrar);
        btn.addEventListener("mouseenter", async () => {
            const { value, done } = await generadorPersonajes.next();
            if (!done) {
                const card = document.createElement("div");
                card.classList.add("card", "shadow-lg", "p-3", "mb-5", "bg-body", "rounded");
                card.innerHTML = `
                    <span>Nombre: ${value.name}</span><br>
                    <span>Altura: ${value.height} cm</span><br>
                    <span>Peso: ${value.mass} kg</span>
                `;
                divContent.appendChild(card);
            }
        });
    } catch (error) {
        console.error(error);
    }
}




