const biciDaCorsa = [
    {
        nome: "Cannondale SuperSix Evo",
        peso: 7 
    },
    {
        nome: "Specialized Tarmac SL7",
        peso: 5
    },
    {
        nome: "Trek Émonda SLR",
        peso: 8 
    },
    {
        nome: "Pinarello Dogma F12",
        peso: 7.5 
    },
    {
        nome: "Bianchi Oltre XR4",
        peso: 8.5 
    }
];

console.log(biciDaCorsa);

// Trovare il peso minimo usando un ciclo for
let pesoMinore = biciDaCorsa[0].peso;
for (let i = 1; i < biciDaCorsa.length; i++) {
    if (biciDaCorsa[i].peso < pesoMinore) {
        pesoMinore = biciDaCorsa[i].peso;
    }
}

// Filtrare le bici con il peso minore
const biciPiuLeggera = biciDaCorsa.filter(bici => bici.peso === pesoMinore);

// Destrutturare l'oggetto trovato 
const { nome, peso } = biciPiuLeggera[0];

console.log(`La bici più leggera è la ${nome} con un peso di ${peso} kg.`);
