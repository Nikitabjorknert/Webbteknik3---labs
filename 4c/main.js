//Privata fält

class Password {
    #value;
    constructor(password) {
        this.#value = password;
    }
    check(input) {
        return input === this.#value; 
        } 
    }

const same = new Password("Hello");
console.log(same.check("fel")); //False
console.log(same.check("Hello")); //true

//console.log(same.#value); - Funkar ej

//Getters
class Person {
    #firstName;
    #lastName;
    constructor(firstName, lastName) {
        this.#firstName = firstName;
        this.#lastName = lastName;
    }
    get fullName() {
        return `${this.#firstName} ${this.#lastName}`;
    }
    get initials() {
        return `${this.#firstName[0]}.${this.#lastName[0]}. `;
    }
}
const emma = new Person("Emma", "Larsson");
const lily = new Person("Lily", "Gren");

console.log(emma.fullName); //Emma Larsson
console.log(emma.initials); //E.L.
console.log(lily.fullName); //Lily Gren
console.log(lily.initials); //L.G.


//Setters
class Product {
    #name;
    #price;
    constructor(name, price) {
        this.#name = name;
        this.#price = price;
    }
    get name() {
        return this.#name;
    }
    get price() {
        return this.#price;
    }
    set price(value) {
        if (value < 0) {
            console.log("Inte giltigt");
            return;
        }
        this.#price = value;
    }
}
const skor = new Product("Skor", 30);
console.log(skor.name); //Giltigt
console.log(skor.price); //Giltigt

skor.price = 20;
console.log(skor.price); //Giltigt

skor.price = -58; //Inte giltigt

console.log(skor.price); //20-oförändrat


//Övning med privata fält, getters och setters

class Student {
    #name;
    #grades;
    constructor(name) {
        this.#name = name;
        this.#grades = [];
    }
    get name() {
        return this.#name;
    }
    addGrade(grade) {
        if (typeof grade !== "number" || grade < 0 || grade > 100) {
            console.log("Betyget måste vara ett tal mellan 0 och 100");
            return;
        }
        this.#grades.push(grade);
    }
    get average() {
        if (this.#grades.length === 0) return 0;
        let sum = 0;
        for (const grade of this.#grades) {
            sum += grade;
        }
        return sum / this.#grades.length;
    }
    get status() {
        return this.average >= 50 ? "Godkänd" : "Underkänd";
        }
    }

const student = new Student("Maja");
student.addGrade(75);
student.addGrade(20);
student.addGrade(-10); //"Betyget måste vara ett tal mellan 0 och 100"
student.addGrade(39);

console.log(student.name); //"Maja"
console.log(student.average); //44.6
console.log(student.status); //"Underkänd"


