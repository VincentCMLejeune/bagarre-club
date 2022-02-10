import React, { useContext } from 'react';

import FighterCard from '../../components/Fighter card/FighterCard';
import FighterContext from '../../contexts/FighterContext';
import Fighter from '../../algorithms/CharacterClass';

import styles from './FightingReport.module.css';

export default function FigthtingReport(props) {
  const { playerA, playerB } = useContext(FighterContext);
  const { report } = props;

  const FighterA = new Fighter(playerA);
  const FighterB = new Fighter(playerB);

  const announcement = report.shift();
  const result = report.pop();

  return (
    <div className={styles.reportContainer}>
      <div className={styles.fightingAnnouncement}>{announcement}</div>
      <div className={styles.heroesDisplay}>
        {FighterA && <FighterCard {...FighterA} />}
        {FighterB && <FighterCard {...FighterB} />}
      </div>
      <div className={styles.firstLifeContainer}>
        <p className={styles.firstFightLife} style={{ background: `var(--yellow)` }}>
          100%
        </p>
        <p className={styles.firstFightLife} style={{ background: `var(--yellow)` }}>
          100%
        </p>
      </div>
      {report.map((x, i) => {
        return (
          <div key={i} className={styles.lifeContainer} style={{ zIndex: `${i}`, animationDelay: `${2 * i + 2}s` }}>
            <p
              className={styles.fightLife}
              style={{ background: `linear-gradient(90deg, var(--yellow) 0% ${x[1]}%, var(--light-grey) ${x[1]}% 100%)` }}
            >
              {x[1]}%
            </p>
            <p
              className={styles.fightLife}
              style={{ background: `linear-gradient(90deg, var(--yellow) 0% ${x[2]}%, var(--light-grey) ${x[2]}% 100%)` }}
            >
              {x[2]}%
            </p>
          </div>
        );
      })}
      <div className={styles.firstFightingAction}>
        <p>And the battle begins !</p>
      </div>
      {report.map((x, i) => {
        return (
          <div className={styles.fightingAction} key={i} style={{ zIndex: `${i}`, animationDelay: `${2 * i + 2}s` }}>
            <p>{x[0]}</p>
          </div>
        );
      })}
      <div className={styles.fightingResult} style={{ animationDelay: `${report.length * 2}s` }}>
        {result}
      </div>
    </div>
  );
}
