const car = {
    brand: "Volvo",
    model: "V40",
    year: 2018,

    getDescription: function() {
        return `${this.brand} ${this.model} ${this.year}`;
    },

honk() {
    console.log("Tut tut!");
}
};
console.log(car.getDescription());
car.honk();

const counter = {
    value: 0,

    increase() {
        this.value++;
        update();
    },
    decrease() {
        this.value--;
        update();
    },
    reset() {
        this.value = 0;
        update();
    }
};
const countEl = document.getElementById("value");

function update() {
    countEl.textContent = counter.value;
}

console.log("Värde initialt: ", counter.value); // 0

counter.increase();
console.log("Värde efter en ökning: ", counter.value); // 1

counter.increase();
console.log("Värde efter nästa ökning: ", counter.value); // 2

counter.decrease(); 
console.log("Värde efter minskning: ", counter.value); // 1

counter.reset();     
console.log("Värde efter reset: ", counter.value);
document.getElementById("increase").addEventListener("click", () => {
    counter.increase();
});

document.getElementById("decrease").addEventListener("click", () => {
    counter.decrease();
});

document.getElementById("reset").addEventListener("click", () => {
    counter.reset();
});