// Write your solution here!
const pets = ["Milo", "Otis", "Garfield"];
const append = pets.slice();
append.push("Odie");
const prepend = pets.slice();
prepend.unshift("Odie");
const removeLast = pets.slice();
removeLast.pop();
const removeFirst = pets.slice();
removeFirst.shift();