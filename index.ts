import { HashMap } from './HashMap';

const map = new HashMap<number>();


console.log(map.set("one", 1));
console.log(map.set("one", 11));

console.log(map);
