export default function teamAlgorithmAttack(attacker, defender) {
  let possibleDamage = attacker.strength + attacker.power;
  let diff = attacker.combat - defender.combat;
  let dice = Math.random() * 100 - 50;
  let result = diff + dice;
  let message, damage;
  if (result < -45) {
    message = 'is blocked by';
    damage = Math.round(possibleDamage * 0.1);
  } else if (result < 0) {
    message = 'scratches';
    damage = Math.round(possibleDamage * 0.2);
  } else if (result < 45) {
    message = 'hits';
    damage = Math.round(possibleDamage * 0.3);
  } else {
    message = 'strikes';
    damage = Math.round(possibleDamage * 0.4);
  }

  return [damage, message];
}
