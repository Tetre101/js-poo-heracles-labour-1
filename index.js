// First Labour : Heracles vs Nemean Lion
// use your Figher class here

const Fighter = require("./src/Fighter");

const heracles = new Fighter("🧔 Heracles", 20, 6);
const nemeanLion = new Fighter("🦁 Nemean Lion", 11, 13);

console.log(`${heracles.name} has ${heracles.life} life`);
console.log(`${nemeanLion.name} has ${nemeanLion.life} life`);

let round = 1;
while (heracles.isAlive() && nemeanLion.isAlive()) {
  console.log(`Round ${round}:`);
  console.log(`${heracles.name} attacks ${nemeanLion.name}`);
  heracles.fight(nemeanLion);
  console.log(`${nemeanLion.name} has ${nemeanLion.life} life`);
  console.log(`${nemeanLion.name} attacks ${heracles.name}`);
  nemeanLion.fight(heracles);
  console.log(`${heracles.name} has ${heracles.life} life`);

  round++;
}

if (!heracles.isAlive()) {
  console.log(`${nemeanLion.name} wins 🏆`);
  console.log(`${heracles.name} loses 💀`);
} else {
  console.log(`${heracles.name} wins 🏆`);
  console.log(`${nemeanLion.name} loses 💀`);
}
