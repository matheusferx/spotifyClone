import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

export const fetchData = async () => {
  try {
    const [responseArtist, responseSongs] = await Promise.all([
      axios.get(`${URL}api/artists`),
      axios.get(`${URL}api/songs`)
    ]);

    return {
      artistArray: responseArtist.data,
      songsArray: responseSongs.data,
    };
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    return {
      artistArray: [],
      songsArray: [],
    };
  }
};

// Fetch data immediately to export artistArray and songsArray
let artistArray = [];
let songsArray = [];

const initializeData = async () => {
  const data = await fetchData();
  artistArray = data.artistArray;
  songsArray = data.songsArray;
};

initializeData();

export { artistArray, songsArray};