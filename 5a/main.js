const numbers = [0, -11, 14, 39, 55, -20, 32, 19, 44];

const positive = numbers.filter(n => n > 0);
console.log("Positiva tal:", positive);

const even = numbers.filter(n => n % 2 === 0);
console.log("Jämna tal:", even);

console.log("Original:", numbers);


//Filtrera strängar

const animals = ["hund", "katt", "hamster", "giraff", "fisk", "mullvad", "antilop", "elefant"];

const longAnim = animals.filter(animal => animal.length > 5);
console.log("Djur med namn längre än 5 tecken:", longAnim);

const aAnimal = animals.filter(animal => animal.includes("a"));
console.log("Djur som innehåller bokstaven a:", aAnimal);


//Filtrera objekt

const students = [
    {
        name: "Ellen",
        age: 13,
        grade: 20
    },
    {
        name: "Oliver",
        age: 25,
        grade: 50
    },
    {
        name: "Siri",
        age: 22,
        grade: 10
    },
     {
        name: "Molly",
        age: 17,
        grade: 30
    },
     {
        name: "Emil",
        age: 23,
        grade: 20
    },
     {
        name: "Lilly",
        age: 14,
        grade: 60
    },
];

const approved = students.filter(p => p.grade >= 50);
console.log("Godkänd:", approved.length); //Med length visas antalet studenter i siffror istället för att skriva ut en hel array med olika studenter.

const young = students.filter(p => p.age < 20);
console.log("Elever under 20 år:", young.length);


//Filtrera och visa på sidan

const movies = [
    {
        title: "The fault in our stars",
        year: 2016,
        genre: "romance",
        rating: 10
    },
     {
        title: "It ends with us",
        year: 2024,
        genre: "romance",
        rating: 9
    },
     {
        title: "The hunger games",
        year: 2012,
        genre: "sci-fi",
        rating: 10
    },
     {
        title: "Baksmällan",
        year: 1998,
        genre: "comics",
        rating: 4
    },
     {
        title: "Ice Age",
        year: 2004,
        genre: "child",
        rating: 6
    },
     {
        title: "Titanic",
        year: 1986,
        genre: "romance",
        rating: 10
    },
     {
        title: "Mazerunner",
        year: 2014,
        genre: "sci-fi",
        rating: 1
    },
     {
        title: "The last song",
        year: 2014,
        genre: "romance",
        rating: 5
    },
];

function displayMovies(movies) {
    const mov = movies.filter(m => m.lenght);

    mov = [];

    for (let i = 0; i < 7; i++) {
          return mov;
    }

    const container = document.createElement('div');

     container.innerHTML = `
    <button>${btn1}  ${btn2}  ${btn3}</button>
     <li>${movies}</li>
    `;
}


    const btn1 = document.createElement('button');
    const btn2 = document.createElement('button');
    const btn3 = document.createElement('button');

     const gen = movies.filter(m => m.genre === "romance");
        console.log("Filmer inom genre romance:", gen);

    btn1.addEventListener('click', (displayMovies) => {
        btn1.textContent = "Genre";
        return displayMovies(gen);
    });
    btn1.append();

     btn2.addEventListener('click', () => {
        btn2.textContent = "År";
        const modern = movies.filter(m => m.year >= 2000);
        console.log("Filmer från 2000:", modern);
    });

     btn3.addEventListener('click', () => {
        btn3.textContent = "Rating";
        const highRating = movies.filter(m => m.rating >= 7);
        console.log(highRating);
    });
   

    //Utmaning: Sökfunktion. Filtrera bland kontakter under tiden användaren skriver i sökfältet. Exempelvis börjar skriva ett N så filtreras de som innehåller n mm.

    const contacts = [
        {
            name: "Ellen",
            email: "ellenK@gmail.com",
            city: "Växjö"
        },
         {
            name: "Mia",
            email: "mammamia@gmail.com",
            city: "Aten"
        },
         {
            name: "Noel",
            email: "noelfridh@gmail.com",
            city: "Halmstad"
        },
         {
            name: "Karin",
            email: "karinkarlsson@gmail.com",
            city: "Ljungby"
        },
         {
            name: "Olof",
            email: "olofsnögubbe@gmail.com",
            city: "Ängelholm"
        },
         {
            name: "Signe",
            email: "signeS@gmail.com",
            city: "Stockholm"
        },
         {
            name: "Alva",
            email: "alvaols@gmail.com",
            city: "Luleå"
        },
         {
            name: "Melker",
            email: "melker@gmail.com",
            city: "Uppsala"
        },
         {
            name: "Doris",
            email: "doris@gmail.com",
            city: "Karlshamn"
        },
        {
            name: "Milly",
            email: "milly@gmail.com",
            city: "Lund"
        },

    ];

    const container = document.getElementById('contacts');
    const search = document.getElementById('search');

    function displayContacts(list) {
        container.innerHTML = '';
        for (const contact of list) {
            const div = document.createElement('div');
            const heading = document.createElement('h3');
            heading.textContent = contact.name;

            const emailP = document.createElement('p');
            emailP.textContent = contact.email;

            const cityP = document.createElement('p');
            cityP.textContent = contact.city;

            div.append(heading, emailP, cityP);
            container.append(div);
        }
    }

    search.addEventListener('input', () => {
        const query = search.value.toLowerCase();

        const filtered = contacts.filter(contact => {
            return contact.name.toLowerCase().includes(query) || contact.email.toLowerCase().includes(query) || contact.city.toLowerCase().includes(query);
        });
        displayContacts(filtered);
    });

    displayContacts(contacts);

    