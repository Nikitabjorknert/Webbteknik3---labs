const numbers = [13, 58, 30, 2, 26, 14, 50, 43, 42, 33];

const evenNum = numbers.find(n => n % 2 === 0);
console.log("Första jämna: ", evenNum);

const bigNum = numbers.find(n => n > 50);
console.log(bigNum);

// find med strängar

const cities = ["Stockholm", "Göteborg", "Malmö", "London", "Rom", "Köpenhamn", "Oslo", "Växjö"];


const startsWithS = cities.find(city => city.startsWith("S"));
console.log("Börjar med S:" , startsWithS); // Första staden som börjar med bokstaven S

const containsO = cities.find(city => city.includes("ö"));
console.log("Innehåller ö:" , containsO); //Städer som innehåller bokstaven Ö

//Find med objekt
const books = [
    {
        title: "It ends with us",
        author: "Colleen Hover",
        year: 2023,
        pages: 679
    },
    {
        title: "Pippi Långstrump",
        author: "Astrid Lindgren",
        year: 1989,
        pages: 129
    },
    {
        title: "Upp och ner",
        author: "Henrik Wahlström",
        year: 2023,
        pages: 534
    },
    {
        title: "Monster",
        author: "Joakim Lundell",
        year: 2020,
        pages: 768
    },
    {
        title: "The design of everyday things",
        author: "Donald Norman",
        year: 2013,
        pages: 699
    }
];

const getTitle = books.find(book => book.title === "Monster");
console.log(getTitle);

const firstYear = books.find(book => book.year > 2000);
console.log("Första moderna:", firstYear.title);

const pageCount = books.find(book => book.pages > 400);
console.log("Första tjocka bok:", pageCount.title);

const missing = books.find(book => book.title === "Dracula");
if (missing === undefined) {
    console.log("Boken hittades inte");
} else {
    console.log(missing.title);
} //Om en bok inte hittas


//Find med klassinsatser

class Product {
    #id;
    #name;
    #price;
    #inStock;
    constructor(id, name, price, inStock) {
        this.#id = id;
        this.#name = name;
        this.#price = price;
        this.#inStock = inStock;
    }
    get id() {
        return this.#id;
    }
    get name() {
        return this.#name;
    }
    get price() {
        return this.#price;
    }
    get inStock() {
        return this.#inStock;
    }
    get isExpensive() {
        return this.#price > 500;
    }
}
const products = [
    new Product(1, "Soffa", 254, true),
    new Product(2, "Skrivbord", 867, false),
    new Product(3, "Lampa", 129, true),
    new Product(4, "Matbord", 499, true),
    new Product(5, "Barstol", 599, true),
    new Product(6, "TV-bänk", 399, false)
];

const findPro = products.find(p => p.id === 3);
console.log("Produkt tre:", findPro.name);

const notAvailable = products.find(p => !p.inStock);
console.log("Finns inte i lager:", notAvailable.name);

const expensive = products.find(ex => !ex.isExpensive);
console.log("Första dyra:", expensive.price);