import React, { useState, useEffect, useContext } from 'react';

import CharacterDetail from '../../components/Character detail/CharacterDetail';
import CharactersList from '../../components/Characters list/CharactersList';

import FighterContext from '../../contexts/FighterContext';

import styles from './CharactersChoice.module.css';

export default function CharactersChoice({ handleChange }) {
  const { resetGame } = useContext(FighterContext);
  const [selectedCharacter, setSelectedCharacter] = useState('');
  const [heroesList, setHeroesList] = useState('');
  const [query, setQuery] = useState('');

  const searchCharacters = (e) => {
    e.preventDefault();
    if (query.length < 2) {
      alert('Please write at least 2 letters to search');
    } else {
      setQuery('');
      fetch(`https://cors-bypass.tkzprod.dev/superheroapi.com/api/408055134055673/search/${query}`)
        .then((res) => res.json())
        .then((data) => setHeroesList(data.results));
    }
  };

  useEffect(() => {
    resetGame();

    const characterIndex = Math.round(Math.random() * 731);
    fetch(`https://cors-bypass.tkzprod.dev/superheroapi.com/api/408055134055673/${characterIndex}`)
      .then((res) => res.json())
      .then((data) => setSelectedCharacter(data));

    fetch('../../fakeApi.json')
      .then((res) => res.json())
      .then((data) => setHeroesList(data));
  }, []);

  return (
    <div className={styles.choiceContener}>
      {selectedCharacter && <CharacterDetail character={selectedCharacter} handleChange={handleChange} />}
      <form onSubmit={searchCharacters}>
        <label>
          <input className={styles.searchText} type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
          <input className={styles.searchButton} type="submit" value="Search" />
        </label>
      </form>
      {heroesList && <CharactersList heroesList={heroesList} selected={setSelectedCharacter} />}
    </div>
  );
}
