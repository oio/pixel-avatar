import { writable } from "svelte/store";

//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

//https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n
const a = Array.from(Array(16).keys());
const b = shuffle(a);
const c = b.slice(13);

export const activeSquares = writable(c);
export const activeColor = writable("#5551FF");
