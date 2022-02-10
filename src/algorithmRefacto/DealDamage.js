/* eslint-disable prettier/prettier */
export default function dealDamage(attacker, defender, attackPrecision) {
  if (attackPrecision <= -100) {
    attacker.stumbles();
    return `EPIC FAIL : ${attacker.name} trips.`;
  } else if (attackPrecision <= -33) {
    attacker.slowDown();
    return `${defender.name} dodges.`;
  } else if (attackPrecision <= 0) {
    defender.life -= attacker.hit(0.1);
    return `${attacker.name} is blocked.`;
  } else if (attackPrecision <= 33) {
    defender.life -= attacker.hit(0.2);
    return `${attacker.name} hits.`;
  } else if (attackPrecision < 100) {
    defender.life -= attacker.hit(0.3);
    return `${attacker.name} strikes !`;
  } else {
    defender.life -= attacker.hit(0.5);
    return `CRITICAL : ${defender.name} stumbles !`;
  }
}
