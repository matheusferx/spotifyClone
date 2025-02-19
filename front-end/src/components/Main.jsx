import React, { useEffect, useState } from 'react';
import ItemList from './IntemList.jsx';
import { fetchData } from '../../api/api.js';

const Main = ({ type }) => {
  const [artistArray, setArtistArray] = useState([]);
  const [songsArray, setSongsArray] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { artistArray, songsArray } = await fetchData();
      setArtistArray(artistArray);
      setSongsArray(songsArray);
    };

    getData();
  }, []);

  return (
    <div className="main">
      <div className="offer__scroll-container">
        {type === "artists" || type === undefined ? (
          <ItemList title="Artistas" items={4} itemsArray={artistArray} path="/artists" idPath="/artist" />
        ) : null}
        {type === "songs" || type === undefined ? (
          <ItemList title="Músicas" items={8} itemsArray={songsArray} path="/songs" idPath="/song" />
        ) : null}
      </div>
    </div>
  );
};

export default Main;
