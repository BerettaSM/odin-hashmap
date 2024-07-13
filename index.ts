import { HashMap } from './HashMap';

const map = new HashMap<string>();

// Populate some values
map.set('apple', 'red');
map.set('banana', 'yellow');
map.set('carrot', 'orange');
map.set('dog', 'brown');
map.set('elephant', 'gray');
map.set('frog', 'green');
map.set('grape', 'purple');
map.set('hat', 'black');
map.set('ice cream', 'white');
map.set('jacket', 'blue');
map.set('kite', 'pink');
map.set('lion', 'golden');
map.set('map', 'treasure');
map.set('north', 'south');
map.set('orchestra', 'loud');
map.set('parmesan', 'smelly');
map.set('queue', 'empty');
map.set('ray', 'sunshine');
map.set('sultan', 'rich');
map.set('thunder', 'storm');
map.set('ultra', 'mega');
map.set('villain', 'grandpa joe');
map.set('world', 'wide web');
map.set('xmas', 'eve');
map.set('yes', 'no');
map.set('zod', 'kneel');

let length = map.length();

// Overwrite
map.set('apple', 'overwritten');
map.set('banana', 'overwritten');
map.set('carrot', 'overwritten');
map.set('dog', 'overwritten');
map.set('elephant', 'overwritten');
map.set('frog', 'overwritten');
map.set('grape', 'overwritten');
map.set('hat', 'overwritten');
map.set('ice cream', 'overwritten');
map.set('jacket', 'overwritten');
map.set('kite', 'overwritten');
map.set('lion', 'overwritten');

// Length should be the same
console.log({ length, newLength: map.length()});

// Force resizing
map.set('arena', 'full');
map.set('bundle', 'hay');
map.set('cabin', 'in the woods');

// Overall testing
console.log('get "cabin":', map.get('cabin'));
console.log('has "zod"?', map.has('zod'));
console.log('Remove the hat. Does it still exist?', (map.remove('hat'), map.has('hat')));
console.log('map length:', map.length());
console.log('All keys ->', ...map.keys());
console.log('All values ->', ...map.values());
console.log('All entries ->', ...map.entries());
