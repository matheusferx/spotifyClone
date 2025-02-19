import React from 'react'
import ItemList from './IntemList';
import { fetchData } from '../api/api';

const Main = ({type}) => {
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

        {type === "artists" || type === undefined ?  <ItemList title="Artistas" items={4} itemsArray={artistArray} path="/artists" idPath="/artist" /> : <></>}
        {type === "songs" || type === undefined ?  <ItemList title="Músicas" items={8} itemsArray={songsArray} path="/songs" idPath="/song"/> : <></>} 
       
      </div>
    </div>
  )
}

export default Main
