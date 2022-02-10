import printIntroduction from './PrintIntroduction';
import initiativeCheck from './InitiativeCheck';
import precisionCheck from './PrecisionCheck';
import dealDamage from './DealDamage';
import printHealth from './PrintHealth';
import printConclusion from './PrintConclusion';

export default function fight(fighterA, fighterB) {
  let fightingReport = [];
  const limitTurns = 15;
  let turns = 0;

  fightingReport.push(printIntroduction(fighterA, fighterB));

  while (fighterA.isAlive() && fighterB.isAlive() && turns < limitTurns) {
    turns++;
    let turnAction = [];

    const roles = initiativeCheck(fighterA, fighterB);
    const attacker = roles[0];
    const defender = roles[1];

    const attackPrecision = precisionCheck(attacker, defender);
    turnAction.push(dealDamage(attacker, defender, attackPrecision));
    fightingReport.push(turnAction.concat(printHealth(fighterA, fighterB)));
  }

  fightingReport.push(printConclusion(fighterA, fighterB, turns, limitTurns));

  return fightingReport;
}
