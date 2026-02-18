class car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}

const car1 = new car("Volvo", "XC90", 2020);
const car2 = new car("Tesla", "Model 3", 2021);
const car3 = new car("BMW", "X5", 2019);

console.log(car1.brand, car1.year);
console.log(car2.brand, car2.year);
console.log(car3.brand, car3.year);


class bankAccount {
    constructor(owner, balance = 0) {
        this.owner = owner;
        this.balance = balance;
        this.currency = "SEK";
    }
}

const a1 = new bankAccount("Nikita", 1000);
const a2 = new bankAccount("Ida");

console.log(a1.owner, a1.balance, a1.currency);
console.log(a2.owner, a2.balance, a2.currency);


class movie {
    constructor(title, director, rating) {
        this.title = title;
        this.director = director;
        this.rating = rating;
    }
}
const movies = [
    new movie("Dumma mig", "Christopher", 8.8),
    new movie("Ariel", "Frank", 9.3),
    new movie("Askungen", "Francis", 4.2),
    new movie("Snövit", "Sophie", 7.5)
];

for (const movie of movies) {
    console.log(`${movie.title}: ${movie.rating}/10`);
}
const container = document.getElementById("movies");
let html = "<h2>Mina filmer</h2><ul>";
for (const movie of movies) {
  html += `<li><strong>${movie.title}</strong> (${movie.director}) - ${movie.rating}/10</li>`;
}
html += "</ul>";
container.innerHTML = html;

/*-movies.innerHTML = `
<div>"${movie.title}" regisserad av ${movie.director} har betyget ${movie.rating}/10</div>
`;-*/