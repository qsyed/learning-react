import foods from "./foods"
import {choice, remove} from "./helpers";


// random pick a food from the array


let food_item = choice(foods)
// log the message 
console.log(`I'd like some ${food_item}, please.`);

console.log(`here is your: ${food_item}`);


// remove item
let remaining = remove(foods, food_item);