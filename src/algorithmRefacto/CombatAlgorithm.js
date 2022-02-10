import printIntroduction from './PrintIntroduction';
import initiativeCheck from './InitiativeCheck';
import effectivenessCheck from './AttackCheck';
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
    // console.log('Roles :');
    // console.log(roles);

    const attacker = roles[0];
    const defender = roles[1];

    const attackEffectiveness = effectivenessCheck(attacker, defender);
    // console.log('Attack effectiveness :');
    // console.log(attackEffectiveness);

    turnAction.push(dealDamage(attacker, defender, attackEffectiveness));
    // console.log('Turn Action :');
    // console.log(turnAction);

    fightingReport.push(turnAction.concat(printHealth(fighterA, fighterB)));
    // console.log(`Fighting report at turn ${turns} :`);
    // console.log(fightingReport);
  }

  fightingReport.push(printConclusion(fighterA, fighterB, turns, limitTurns));

  // console.log(fightingReport);
  return fightingReport;
}
