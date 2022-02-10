export default function printHealth(fighterA, fighterB) {
  return [Math.ceil((fighterA.life / fighterA.initialLife) * 100), Math.ceil((fighterB.life / fighterB.initialLife) * 100)];
}
