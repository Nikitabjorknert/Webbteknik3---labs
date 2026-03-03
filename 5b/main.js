//Hantering av saknade värden, null och undefined

const book = 
{
    title: "Title",
    year: 2020,
    isbn: null
};
console.log(book.title);
console.log(book.isbn);
console.log(book.publisher); //Ger undefined

//Nullish coalescing(??). Betyder att om värdet till vänster av ?? är null eller undefined används det högra istället.
const username = null;
const level = 0;
const bio = "";

const displayName = username ?? "Anonym";
console.log(displayName);

const displayLevel = level ?? 1;
console.log(displayLevel);

const displayBio = bio ?? "Ingen bio angiven";
console.log(displayBio);


//Använda ?? med objekt och optimal chaining ?.
const profiles = [
  { 
    name: "Anna", 
    email: "anna@example.com", 
    address: { 
        city: "Uppsala", 
        street: "Svartbäcksgatan 12" } 
},
  { 
    name: "Erik", 
    email: null, 
    address: { 
        city: "Göteborg" } 
    },
  { 
    name: "Maria", 
    email: "maria@example.com", 
    address: null 
},
  { 
    name: "Johan" 
}
];

function createProfileCard(profile) {
    const name = profile.name ?? "Ej angivet";
    const email = profile.email ?? "Ej angiven";
    const city = profile.address?.city ?? "Okänd stad";
    const street = profile.address?.street ?? "Okänd gatuadress";

    const card = document.createElement('div');
    card.classList.add('profile-card');

    const heading = document.createElement('h3');
    heading.textContent = name;

    const emailP = document.createElement('p');
    emailP.textContent = `epost: ${email}`;

    const cityP = document.createElement('p');
    cityP.textContent = `Stad: ${city}`;

    const streetP = document.createElement('p');
    streetP.textContent = `Gata: ${street}`;

    card.append(heading, emailP, cityP, streetP);
    return card;
}
const container = document.getElementById('profiles');
for (const profile of profiles) {
    container.append(createProfileCard(profile));
}


//Utmaning: Väderprognos

const forecasts = [
  {
    city: "Stockholm",
    temperature: 12,
    description: "Växlande molnighet",
    wind: { speed: 5, direction: "SV" },
    precipitation: 0
  },
  {
    city: "Göteborg",
    temperature: null,
    description: "Regn",
    wind: { speed: 12, direction: null },
    precipitation: 8
  },
  {
    city: "Malmö",
    temperature: 15,
    description: null,
    wind: null,
    precipitation: null
  },
  {
    city: "Kiruna",
    temperature: -3,
    wind: { speed: 2 }
  },
  {
    city: null,
    temperature: 9,
    description: "Soligt",
    wind: { speed: 0, direction: "N" },
    precipitation: 0
  }
];

function createForecastCard(forecast) {
    const city = forecast.city; //Staden visas bara om den finns
    const temp = forecast.temperature ?? "Temperatur saknas";
    const description = forecast.description ?? "Ingen prognos";
    const speed = forecast.wind?.speed ?? null;
    const direct = forecast.wind?.direction ?? "Okänd riktning";
    const prec = forecast.precipitation;

    const card = document.createElement('div');
    card.classList.add('forecast-card');

    const cityF = document.createElement('h3');
    cityF.textContent = city;

    const tempF = document.createElement('p');
    tempF.textContent = temp !== null && temp !== undefined ? `Temperatur: ${temp}°C` : "Temperatur saknas";

    const descrF = document.createElement('p');
    descrF.textContent = description;

    const windF = document.createElement('p');
    windF.textContent = speed !== null ? `Vind: ${speed} m/s (${direct})` : "Vinddata saknas";

    const precF = document.createElement('p');
    precF.textContent = prec !== null && prec !== undefined ? `Nederbörd: ${prec} mm` : "Nederbörd: Ingen data";

   card.append(cityF, tempF, descrF, windF, precF);
   return card;
}

const contain = document.getElementById("forecasts");
for (const forecast of forecasts) {
        contain.append(createForecastCard(forecast));
}
