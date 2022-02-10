import diceRoll from './Dice';

export default function initiativeCheck(fighterA, fighterB) {
  const initiativeRoll = (diceRoll() - 10) * 10;
  if (initiativeRoll + fighterA.speed - fighterB.speed > 0) {
    fighterA.slowDown();
    fighterB.restoreSpeed();
    return [fighterA, fighterB];
  } else if (initiativeRoll + fighterA.speed - fighterB.speed < 0) {
    fighterB.slowDown();
    fighterA.restoreSpeed();
    return [fighterB, fighterA];
  } else {
    return initiativeCheck(fighterA, fighterB);
  }
}
