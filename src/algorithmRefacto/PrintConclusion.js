export default function printConclusion(fighterA, fighterB, turns, limitTurns) {
  let winner;
  if (turns === limitTurns) {
    if (fighterA.life > fighterB.life) {
      winner = fighterA;
    } else if (fighterB.life > fighterA.life) {
      winner = fighterB;
    } else {
      return 'Draw';
    }
    return `Time out : ${winner.name} wins !`;
  } else {
    if (fighterA.isAlive() === false) {
      winner = fighterB;
    } else if (fighterB.isAlive() === false) {
      winner = fighterA;
    }
    return `${winner.name} wins !`;
  }
}
