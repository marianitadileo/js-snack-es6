// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.

const arrayBikes = [
    {
        nome: "Bianchi",
        peso: 10
    },
    {
        nome: "Carrera",
        peso: 15
    },
    {
        nome: "Atala",
        peso: 20
    }
];

console.log(arrayBikes);

const minBike = arrayBikes[0];

for(let i = 0; i < arrayBikes.length; i++) {
    if(arrayBikes[i] < minBike.peso) {
        minBike = arrayBikes[i];
    }
}

const {nome, peso} = minBike;
console.log(minBike);
document.getElementById("result").innerHTML = `La bici con il peso minore è ${nome} con un peso di ${peso} kg`;