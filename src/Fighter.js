/* Fighter class definition */
const MAX_LIFE = 100;
class Fighter {
  constructor(name, strength, dexterity) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
  }
  fight(opponent) {
    let damage = Math.floor(Math.random() * this.strenght) + 1;
    let defense = opponent.dexterity;
    let damageInflicted = damage - defense >= 0 ? damage - defense : 0;
    opponent.life -= damageInflicted;
    opponent.life = opponent.life < 0 ? 0 : opponent.life;
  }

  isAlive() {
    return this.life > 0;
  }
}
module.exports = Fighter;
