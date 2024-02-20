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
  console.log(
    pokemons.filter((pokemon) => {
      return pokemon[0] === "B";
    })
  );
};
onlyTheBs();

const notTheCs = () => {
  // remove all pokemons that starts with C
  console.log(
    pokemons.filter((pokemon) => {
      return pokemon[0] !== "C";
    })
  );
};
notTheCs();
console.log("Before Splice:\n", pokemons);

const removeTheCs = () => {
  pokemons.splice(8, 3);
};

removeTheCs();
console.log("After Splice:\n", pokemons);

const nameAndIdThanks = () => {
  // print out name and index of all pokemons
  // like: number x - Squirtle
  pokemons.forEach((pokemon, i) => {
    console.log(`${i} - ${pokemon}`);
  });
};

nameAndIdThanks();

const catchPokemon = (name) => {
  // add a pokemon with a name of your choice to the list,
  // print the list so you see its there.
  pokemons.push("Charizard");
  console.log(pokemons);
};
catchPokemon();

const didICatchIt = (name) => {
  // check the pokemons to see if a specific pokemon is in the array
  console.log(pokemons.includes("Charizard"));
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
  console.log(pokemons.sort((a, b) => b.length - a.length));
  console.log(pokemons.sort((a, b) => a.length - b.length)[11]);
  console.log(pokemons.sort((a, b) => b.length - a.length)[0]);
  //b-a
};
theLongestName();
