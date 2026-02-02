const savedAnimal = localStorage.getItem("animal");
console.log(savedAnimal);

document.getElementById("removeAnimalBtn").addEventListener("click", function() {
    localStorage.removeItem("animal");
    console.log("Sparat djur bottaget");
});