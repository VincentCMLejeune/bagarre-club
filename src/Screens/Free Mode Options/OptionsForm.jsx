import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { handicaps, weapons, fields } from '../../algorithmRefacto/bonusmalus/BonusMalus';

import FighterContext from '../../contexts/FighterContext';
import styles from './OptionsForm.module.css';

export default function OptionsForm() {
  const { playerA, playerB, setOptions } = useContext(FighterContext);
  let handicapList = [];
  for (let key in handicaps) {
    handicapList.push(handicaps[key]);
  }
  let weaponList = [];
  for (let key in weapons) {
    weaponList.push(weapons[key]);
  }
  let fieldList = [];
  for (let key in fields) {
    fieldList.push(fields[key]);
  }

  const [selectedHandicapA, setSelectedHandicapA] = useState([]);
  const [selectedHandicapB, setSelectedHandicapB] = useState([]);
  const [selectedWeaponA, setSelectedWeaponA] = useState([]);
  const [selectedWeaponB, setSelectedWeaponB] = useState([]);
  const [selectedField, setSelectedField] = useState([]);

  function handleSelectedOptions() {
    const newOptions = {
      optionA: [selectedHandicapA, selectedWeaponA],
      optionB: [selectedHandicapB, selectedWeaponB],
      field: selectedField,
    };
    setOptions(newOptions);
  }

  return (
    <div>
      <div className={styles.optionChoice}>
        <h1>Things can get trickier</h1>
        <div className={styles.optionsContainer}>
          <div className={styles.choiceForm}>
            <h2 className={styles.choiceFormTitle}>Choose a handicap :</h2>
            <div className={styles.firstFormLine}>
              <p>{playerA.name}</p>
              <p></p>
              <p>{playerB.name}</p>
            </div>
            {handicapList &&
              handicapList.map((handicap, index) => {
                return (
                  <div className={styles.formLine} key={index}>
                    <div className={styles.formInput}>
                      <input
                        type="radio"
                        id={handicap.id}
                        name="handicapA"
                        value={handicap.id}
                        onClick={(e) => setSelectedHandicapA(e.target.value)}
                        defaultChecked={handicap.id === 0 ? true : false}
                      />
                      <p className={styles.formFirstColumn}>{handicap.name}</p>
                      <input
                        type="radio"
                        id={handicap.id}
                        name="handicapB"
                        value={handicap.id}
                        onClick={(e) => setSelectedHandicapB(e.target.value)}
                        defaultChecked={handicap.id === 0 ? true : false}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
          <div className={styles.choiceForm}>
            <h2>Choose a weapon :</h2>
            <div className={styles.firstFormLine}>
              <p>{playerA.name}</p>
              <p></p>
              <p>{playerB.name}</p>
            </div>
            {weaponList &&
              weaponList.map((weapon, index) => {
                return (
                  <div className={styles.formLine} key={index}>
                    <div className={styles.formInput}>
                      <input
                        type="radio"
                        id={weapon.id}
                        name="weaponA"
                        value={weapon.id}
                        onClick={(e) => setSelectedWeaponA(e.target.value)}
                        defaultChecked={weapon.id === 0 ? true : false}
                      />
                      <p className={styles.formFirstColumn}>{weapon.name}</p>
                      <input
                        type="radio"
                        id={weapon.id}
                        name="weaponB"
                        value={weapon.id}
                        onClick={(e) => setSelectedWeaponB(e.target.value)}
                        defaultChecked={weapon.id === 0 ? true : false}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
          <div className={styles.choiceForm}>
            <h2 className={styles.choiceFormArena}>Choose an arena :</h2>
            {fieldList &&
              fieldList.map((field, index) => {
                return (
                  <div className={styles.formLine} id={styles.weather} key={index}>
                    <p className={styles.formFirstColumn}>{field.name}</p>
                    <div className={styles.formInput}>
                      <input
                        type="radio"
                        id={field.id}
                        name="field"
                        value={field.id}
                        onClick={(e) => setSelectedField(e.target.value)}
                        defaultChecked={field.id === 0 ? true : false}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Link to="/fight">
          <button className={styles.launchFightButton} onClick={handleSelectedOptions}>
            FIGHT
          </button>
        </Link>
      </div>
    </div>
  );
}
