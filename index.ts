import { HashMap } from './HashMap';

const map = new HashMap<number>();


console.log(map.set("one", 1));
console.log(map.set("one", 11));

console.log(map);

console.log(map.get("one"));
console.log(map.get("One"));

console.log(map.has("one"));
console.log(map.has("One"));
