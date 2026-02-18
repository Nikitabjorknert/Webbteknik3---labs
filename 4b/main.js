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
