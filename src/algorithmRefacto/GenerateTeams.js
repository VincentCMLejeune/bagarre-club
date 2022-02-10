import Fighter from './CharacterClass';

export default function generateTeams(teamA, teamB) {
  let squadA = [];
  let squadB = [];

  for (let character of teamA) {
    let perso = new Fighter(character);
    squadA.push(perso);
  }

  for (let character of teamB) {
    let perso = new Fighter(character);
    squadB.push(perso);
  }

  return [squadA, squadB];
}
