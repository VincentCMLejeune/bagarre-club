export default class Fighter {
  constructor(character) {
    const { intelligence, strength, speed, durability, power, combat } = character['powerstats'];
    this.name = character['name'];
    this.intelligence = Number(intelligence) || 15;
    this.strength = Number(strength) || 15;
    this.speed = Number(speed) || 15;
    this.initialSpeed = Number(speed) || 15;
    this.life = Number(durability) || 15;
    this.initialLife = Number(durability) || 15;
    this.power = Number(power) || 15;
    this.combat = Number(combat) || 15;

    this.alignment = character['biography']['alignment'];
    this.gender = character['appearance']['gender'];
    this.picture = character['image']['url'];
  }

  isAlive() {
    return this.life > 0;
  }

  hit(effectiveness) {
    let power = (this.power + this.strength) * effectiveness;
    // console.log('Power :');
    // console.log(power);
    return power;
  }

  stumbles() {
    this.speed = 0;
    this.durability -= 5;
  }

  restoreSpeed() {
    this.speed = this.initialSpeed;
  }

  slowDown() {
    this.speed /= 2;
  }

  updateGear(objects) {
    let gear = {
      intelligence: 0,
      strength: 0,
      speed: 0,
      durability: 0,
      power: 0,
      combat: 0,
    };

    for (const key in objects) {
      gear.intelligence += objects[key].intelligence;
      gear.strength += objects[key].strength;
      gear.speed += objects[key].speed;
      gear.durability += objects[key].durability;
      gear.power += objects[key].power;
      gear.combat += objects[key].combat;
    }
    this.intelligence = Math.round((this.intelligence / 100) * (100 + gear.intelligence));
    this.strength = Math.round((this.strength / 100) * (100 + gear.strength));
    this.speed = Math.round((this.speed / 100) * (100 + gear.speed));
    this.initialSpeed = this.speed;
    this.life = Math.round((this.life / 100) * (100 + gear.durability));
    this.power = Math.round((this.power / 100) * (100 + gear.power));
    this.combat = Math.round((this.combat / 100) * (100 + gear.combat));
  }
}
