const pokemons = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Metapod",
  "Weedle",
  "Pikachu",
  "Pidgey",
];

const countThem = () => {
  // print out, in a sentence, how many pokemons I have.
  // like: "I have x pokemons!"
  console.log(`I have ${pokemons.length} pokemons!`);
};
countThem();

const orderThem = () => {
  // order the pokemons alphabetically
  console.log(pokemons.sort());
};
orderThem();

const flipThem = () => {
  // reverse the order of the pokemons
  console.log(pokemons.reverse());
};
flipThem();

const makeThemBig = () => {
  // print the pokemons in UPPERCASE letters
  pokemons.forEach((pokemon) => console.log(pokemon.toUpperCase()));
};
makeThemBig();

const onlyTheBs = () => {
  // only print the pokemons that starts with B
  console.log(pokemons.filter((pokemon) => pokemon[0] === "B"));
};
onlyTheBs();

const notTheCs = () => {
  // remove all pokemons that starts with C
  // The following will not change the origin array
  const cPokemons = pokemons.filter((pokemon) => pokemon[0] === "C");
  console.log(cPokemons);
  pokemons.splice(pokemons.indexOf(cPokemons[0]), cPokemons.length);
  console.log(pokemons);
};

notTheCs();

const nameAndIdThanks = () => {
  // print out name and index of all pokemons
  // like: number x - Squirtle
  pokemons.forEach((pokemon, i) => console.log(`number ${i + 1} - ${pokemon}`));
};
nameAndIdThanks();

const catchPokemon = (name) => {
  // add a pokemon with a name of your choice to the list,
  // print the list so you see its there.
  pokemons.push("Snorlax");
  console.log(pokemons);
};
catchPokemon();

const didICatchIt = (name) => {
  // check the pokemons to see if a specific pokemon is in the array
  console.log(pokemons.includes("Snorlax"));
};
didICatchIt();

const addInThirdPlace = () => {
  // add the pokemon "Clefairy" in the third place of the array
  // print the list so you see its there.
  pokemons.splice(2, 0, "Clefairy");
  console.log(pokemons);
};
addInThirdPlace();

// ***BONUS***
const theLongestName = () => {
  // find the pokemon with the longest name
  return pokemons.sort((a, b) => b.length - a.length)[0];
};
console.log(theLongestName());
