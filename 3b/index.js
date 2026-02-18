

/*-- const responsePromise = fetch("message.txt");
console.log(responsePromise);

responsePromise.then(response => { console.log(response);
});

const textPromise = responsePromise.then(response => { console.log(response);
    return response.text();
});
textPromise.then(text => { document.querySelector('main').textContent = text;}); 

fetch("message.txt")
    .then(response => response.text())
    .then(text => {
        document.querySelector('main').textContent = text;
    }); --*/

   fetch("message.txt")
  .then(response => {
    console.log(response);
    console.log("Status:", response.status);
    console.log("OK?", response.ok);
    console.log("URL:", response.url);
    return response.text();
  })
  .then(text => {
    console.log("Innehåll:", text);
  });

  fetch("data.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    console.log(data.title);
    console.log(data.items[0]);
  });