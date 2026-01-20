import { add as addition, subtract as subtraction } from './math.js';
import { PI as piValue } from './constants.js';

console.log(addition(5, 3)); //8
console.log(subtraction(10, 4)); //6
console.log(piValue);

import * as MathUtils from './math.js';
import * as Config from './constants.js';

console.log(MathUtils.add(2, 3));
console.log(MathUtils.multiply(4, 5));
console.log(Config.GREETING);







