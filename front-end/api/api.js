import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

export const fetchData = async () => {
  try {
    const responseArtist = await axios.get(`${URL}api/artists`);
    const responseSongs = await axios.get(`${URL}api/songs`);

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
