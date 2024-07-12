import { HashMap } from './HashMap';

const map = new HashMap<number>();

console.log(map.length());
console.log(map.set("one", 4));
console.log(map.set("one", 1));
console.log(map.set("two", 2));

console.log(map);
console.log(map.length());

console.log(map.get("one"));
console.log(map.get("One"));

console.log(map.has("one"));
console.log(map.has("One"));

console.log(map.remove("not_in_map"));
console.log(map.remove("two"));

console.log(map);

map.clear();

console.log(map);
console.log(map.length());

map.set("one", 1);
map.set("two", 2);
map.set("three", 3);
map.set("four", 4);
map.set("five", 5);
map.set("six", 6);

console.log(map.entries());
