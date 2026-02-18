const student = {
    name: 'Nikita',
    courses: ['Webbteknik 3', 'Interaktionsdesign 1']
}

const jsonString = JSON.stringify(student);
console.log(jsonString);
console.log(typeof jsonString);

const parsed = JSON.parse(jsonString);
console.log(parsed);
console.log(typeof parsed);
console.log(parsed.name);
console.log(parsed.courses);

function saveStudent(data) {
    const json = JSON.stringify(data);
    localStorage.setItem('student', json);
}

function loadStudent() {
    const saved = localStorage.getItem('student');
    return JSON.parse(saved);
}

// A
const jsonA = '{"name": "Ada", "age": 36}';
const a = JSON.stringify(jsonA);
console.log(a);
const aP = JSON.parse(a);
console.log(aP);

// B 
const jsonB = "{'name': 'Ada', 'age': 36}";

// C
const jsonC = '{"name": "Ada", "age": 36,}';

// D
const jsonD = '{"name": "Ada", "hobbies": ["math", "coding"], "active": true}';

const product = {
    title: 'iPhone 15',
     price: 12999,
  inStock: true,
  colors: ['svart', 'vit', 'blå'],
  specs: {
    storage: '128GB',
    camera: '48MP'
  }
};
const str = JSON.stringify(product);
console.log(str);

const par = JSON.parse(str);
console.log(par);