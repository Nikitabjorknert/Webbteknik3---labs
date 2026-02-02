localStorage.setItem("animal", "dog");

const nameInput = document.getElementById("nameInput");

const savedName = localStorage.getItem("name");
if (savedName) {
    nameInput.value = savedName;
}

nameInput.addEventListener("input", function() {
    localStorage.setItem("name", nameInput.value);
});