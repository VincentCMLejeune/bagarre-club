export default function dealDamage(attacker, defender, attackEffectiveness) {
  if (attackEffectiveness <= -100) {
    attacker.stumbles();
    return `EPIC FAIL : ${attacker.name} trips.`;
  } else if (attackEffectiveness <= -50) {
    attacker.slowDown();
    defender.life -= attacker.hit(0.1);
    return `${defender.name} dodges.`;
  } else if (attackEffectiveness <= 0) {
    defender.life -= attacker.hit(0.1);
    return `${attacker.name} is blocked.`;
  } else if (attackEffectiveness <= 50) {
    defender.life -= attacker.hit(0.2);
    return `${attacker.name} hits.`;
  } else if (attackEffectiveness < 100) {
    defender.life -= attacker.hit(0.3);
    return `${attacker.name} strikes !`;
  } else {
    defender.life -= attacker.hit(0.5);
    return `CRITICAL : ${defender.name} stumbles.`;
  }
}
