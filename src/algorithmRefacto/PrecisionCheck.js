import diceRoll from './Dice';

export default function precisionCheck(attacker, defender) {
  let attackRoll = diceRoll();
  if (attackRoll === 1) {
    return -100;
  } else if (attackRoll === 20) {
    return 100;
  } else {
    return (attackRoll - 10) * 5 + attacker.combat - defender.combat;
  }
}
