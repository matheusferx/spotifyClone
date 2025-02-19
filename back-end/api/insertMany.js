import {artistArray} from '../../front-end/src/assets/database/artists.js';
import {songsArray} from '../../front-end/src/assets/database/songs.js';
import { db } from './conect.js';

const newArtistsArray = artistArray.map((currentArtistObj) => {
    const newArtistObj = {...currentArtistObj};
    delete newArtistObj.id;

    return newArtistObj;
} );

const newSongsArray = songsArray.map((currentSongsObj) => {
    const newSongsObj = {...currentSongsObj};
    delete newSongsObj.id;

    return newSongsObj;
} );

const responseArtist = await db.collection("artists").insertMany(newArtistsArray);
const responseSongs = await db.collection("songs").insertMany(newSongsArray);

console.log(responseArtist);
console.log(responseSongs);