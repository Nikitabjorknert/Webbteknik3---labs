//Grunderna i map

const numbers = [1, 10, 22, 3, 12, 21];

const multiply = numbers.map(n => n * n);
console.log("Kvadrerade:", multiply);

const result = numbers.map(n => `Tal: ${n}`);
console.log("Etiketter:" + result);

console.log("Original:", numbers); //Oförändrad

//Map med strängar
const words = ["banan", "apelsin", "vindruvor", "äpple", "clementin", "päron", "drakfrukt"];

const capitalized = words.map(w => w.toUpperCase());
console.log("Versaler:", capitalized);

const letters = words.map(w => `${w} (${w.length} tecken)`);
console.log("Antal tecken:", letters);


//Map med objekt
const books = [
    {
        title: "Nalle Puh",
        author: "Calle",
        pages: 245
    },
    {
        title: "Pippi Långstrump",
        author: "Astrid Lindgren",
        pages: 199
    },
    {
        title: "It ends with us",
        author: "Colleen Hover",
        pages: 879
    },
    {
        title: "Me before him",
        author: "Julie Kev",
        pages: 657
    },
    {
        title: "Lasse och Maja",
        author: "Maria Sten",
        pages: 149
    },
];

const titles = books.map(b => b.title);
console.log("Titlar:", titles);

const readTime = books.map(b => ({
    title: b.title,
    readTimes: Math.ceil(b.pages / 30)
})); //Skapar en ny array med nya objekt som har egenskaperna title och readTimes som beräknas med pages / 30 avrundat uppåt. Antar att 30 sidor läses per timme
console.log("Lästider:", readTime);


//Kombinera map och filter
//När dessa kedjas efter varandra kan vi anropa den ena arrayen direkt på resultatet av den andra, eftersom båda returnerar en ny array.
//Man måste först filtrera och sedan omvandla (map) de kvarstående - inte tvärtom.

const animals = [
  { name: "Gösta", 
    species: "Pingvin", 
    age: 4, 
    weight: 5, 
    habitat: "Arktis" 
},
  { name: "Barbro", 
    species: "Elefant", 
    age: 32, 
    weight: 4200, 
    habitat: "Savann" 
},
  { name: "Sansen", 
    species: "Papegoja", 
    age: 67, 
    weight: 1, 
    habitat: "Regnskog" 
},
  { name: "Doris", 
    species: "Sköldpadda", 
    age: 104, 
    weight: 80, 
    habitat: "Savann" 
},
  { name: "Bengt-Åke", 
    species: "Pingvin", 
    age: 2, 
    weight: 4, 
    habitat: "Arktis" 
},
  { name: "Sigrid", 
    species: "Flodhäst", 
    age: 18, 
    weight: 1800, 
    habitat: "Savann" 
},
  { name: "Margit", 
    species: "Papegoja", 
    age: 12, 
    weight: 1, 
    habitat: "Regnskog" 
},
  { name: "Knansen", 
    species: "Krokodil", 
    age: 45, 
    weight: 450, 
    habitat: "Regnskog" }
];

const savann = animals
.filter(a => a.habitat === "Savann")
.map(a => `${a.name}`);
console.log("Savanndjur:", savann);

const weight = animals
.filter(a => a.weight < 10)
.map(a => `${a.name} (${a.species}, ${a.age} år)`);
console.log("Små djur:", weight);

const sign = animals
.filter(a => a.age > 20)
.map(a => `🏆 ${a.name}, ${a.species} - ${a.age}`);
console.log(sign);

const container = document.getElementById('results');

function addSection(title, items) {
    const heading = document.createElement('h2');
    heading.textContent = title;
    container.append(heading);

    const list = document.createElement('ul');
    for (const item of items) {
        const li = document.createElement('li');
        li.textContent = item;
        list.append(li);
    }
    container.append(list);
}

addSection("Djur i savannen", savann);
addSection("Små djur (under 10 kg)", weight);
addSection("Veteraner (över 20 år)", sign);



