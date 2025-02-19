import React from 'react'
import ItemList from './IntemList';
import {artistArray} from '../assets/database/artists';
import {songsArray} from '../assets/database/songs';

const Main = ({type}) => {
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
