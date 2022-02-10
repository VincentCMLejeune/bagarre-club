export default function diceRoll(faces = 20) {
  return Math.ceil(Math.random() * faces);
}
