localStorage.setItem("animal", "dog");

const nameInput = document.getElementById("nameInput");

const savedName = localStorage.getItem("name");
if (savedName) {
    nameInput.value = savedName;
}

nameInput.addEventListener("input", function() {
    localStorage.setItem("name", nameInput.value);
});

const themeRadios = document.querySelectorAll('input[name="theme"]');
let savedTheme = "light";
if (localStorage.getItem('selectedTheme')) {
    savedTheme = localStorage.getItem('selectedTheme');
}
document.body.className = savedTheme + '-theme';
document.querySelector(`input[value="${savedTheme}"]`).checked = true;

themeRadios.forEach(radio => {
    radio.addEventListener('change', function() {
        localStorage.setItem('selectedTheme', this.value);
        document.body.className = this.value + '-theme';
    });
});
