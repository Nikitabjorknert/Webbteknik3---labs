class rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * this.width + 2 * this.height;
    }
    describe() {
        return `Kvadrat: ${this.width}x${this.height} (area: ${this.getArea()}, omkrets: ${this.getPerimeter()})`;
    }
}

const r1 = new rectangle(5, 10);
const r2 = new rectangle(3, 4);
const r3 = new rectangle(6, 6);

r1.getArea();
r2.getPerimeter();
r3.describe();

console.log(r1.getArea());
console.log(r2.getPerimeter());
console.log(r3.describe());



//Metoder som ändrar tillstånd
class Counter {
    constructor(startValue = 0) {
        this.value = startValue;
    }
    increment() {
        this.value++;
    }
    decrement() {
        this.value--;
    }
    reset() {
        this.value = 0;
    }
}
const counter1 = new Counter();
const counter2 = new Counter(100);

counter1.increment();
counter1.increment();
console.log(counter1.value);

counter2.decrement();
console.log(counter2.value);

counter1.reset();
console.log(counter1.value);
console.log(counter2.value);


class ShoppingCart {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push({ name: item, quantity: 1});
    }
    getTotal() {
        let total = 0;
        for (const item of this.items) {
            total += item.quantity;
        }
        return total;
    }
    listItems() {
        for (const item of this.items) {
            console.log(`${item.name} (${item.quantity} st)`);
        }
    }
}

const cart = new ShoppingCart();
cart.addItem("Äpple");
cart.addItem("Banan");
cart.addItem("Äpple");

cart.listItems();

console.log("Totalt antal:", cart.getTotal());

class Clicker {
    constructor() {
        this.count = 0;
    }
    setup() {
        const button = document.getElementById('click-btn');
        const display = document.getElementById('display');

        button.addEventListener('click', () => {
            this.count++;
            display.textContent = this.count;
        });
    }
}
const clicker = new Clicker();
clicker.setup();