const score = 20

const result = score >= 50 ? 'Godkänt' : 'Underkänt';
console.log(result);
console.log(`Poäng: ${score} - ${result}`);

const product = {
    name: 'stol',
    price: 100,
    inStock: true
};

function createProductCard(product) {

    return `
    <div class="product-card ${product.inStock ? '' : 'out-of-stock'}">
    <h3>${product.name}</h3>
    <p class="price">${product.price} kr</p>
    <span class="stock ${product.inStock ? 'in-stock' : 'sold-out'}>
    ${product.inStock ? 'I lager' : 'Slut i lager'}
    </span>
    </div>
    `;
}
document.body.innerHTML = createProductCard(product);

const button = document.createElement('button');
const content = document.createElement('div');
let isVisible = false;


button.addEventListener('click', function() {
    isVisible = !isVisible;
    content.style.display = isVisible ? 'block' : 'none';
    button.textContent = isVisible ? 'Visa mindre' : 'Visa mer';
});
