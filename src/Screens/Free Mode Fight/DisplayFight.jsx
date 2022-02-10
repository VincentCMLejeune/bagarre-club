import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { handicaps, weapons, fields } from '../../algorithmRefacto/bonusmalus/BonusMalus';
import CombatAlgorithm from '../../algorithmRefacto/CombatAlgorithm';
import Fighter from '../../algorithmRefacto/CharacterClass';

import FighterContext from '../../contexts/FighterContext';
import FigthtingReport from '../../components/Figthing Report/FightingReport';

import styles from './DisplayFight.module.css';

export default function DisplayFight() {
  const { playerA, playerB, resetGame, options } = useContext(FighterContext);

  const FighterA = new Fighter(playerA);
  const FighterB = new Fighter(playerB);

  if (options != '') {
    let modifA = [];
    let modifB = [];
    let handicapA = handicaps[Number(options.optionA[0])];
    let handicapB = handicaps[Number(options.optionB[0])];
    let weaponA = weapons[Number(options.optionA[1])];
    let weaponB = weapons[Number(options.optionB[1])];
    let field = fields[Number(options.field)];

    modifA.push(handicapA);
    modifA.push(weaponA);
    modifA.push(field);
    modifB.push(handicapB);
    modifB.push(weaponB);
    modifB.push(field);

    FighterA.updateGear(modifA);
    FighterB.updateGear(modifB);
  }

  let report = CombatAlgorithm(FighterA, FighterB);

  return (
    <div className={styles.fightingComponent}>
      {report && <FigthtingReport report={report} />}
      <div className={styles.endgameChoice}>
        <Link to="/freemode">
          <button className={styles.choiceButton} onClick={resetGame}>
            Another battle
          </button>
        </Link>
        <Link to="/">
          <button className={styles.choiceButton} onClick={resetGame}>
            Main menu
          </button>
        </Link>
      </div>
    </div>
  );
}
