const person = {
    firstName: "Nikita",
    lastName: "Bjorknert",
    age: 24,
    occupation: "Student",
    address: {
        street: "Aringsåsvägen 20",
        city: "Alvesta",
        country: "Sverige"
    },
};
console.log('Person', person);
console.log(person.firstName);
console.log(person["lastName"]);
console.log("Nikita bor i: ", person.address.city);

const dog = {
    name: "Bonnie",
    breeds: {
        first: "poodle",
        second: "jack russel"
    },
    age: 1.5,
    color: "black",
    friends: ["Daisy", "Majken", "Bentley", "Kongo"],
    cute: true
};

person.hobby = "drawing";
person.age = 37;
delete person.occupation;

console.log(person.email);
console.log("Har jag en sysselsättning? ", "occupation" in person);

const personElem = document.getElementById("person");
personElem.innerHTML = `<h2>${person.firstName} ${person.lastName}</h2>
<p>Age: ${person.age}</p>
<p>Address: ${person.address.street}, ${person.address.city}, ${person.address.country}</p>
`;

const dogElem = document.getElementById("dog");
dogElem.innerHTML = `<h2>${dog.name}</h2>
<p>Age: ${dog.age}</p>
<p>Color: ${dog.color}</p>
<p>Breeds: ${dog.breeds.first}, ${dog.breeds.second}</p>
<p>Friends: ${dog.friends.join(", ")}</p>
<p>Cute: ${dog.cute ? "Yes" : "No"}</p>
`;
console.log('Dog', dog);

const keys = Object.keys(person);
console.log(keys);