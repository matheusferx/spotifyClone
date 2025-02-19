import {MongoClient} from "mongodb";
import dotenv from "dotenv";

dotenv.configDotenv();

const URI = process.env.MONGODB_URI;

const client = new MongoClient(URI);

export const db = client.db("Spotify");
// const songCollection = await db.collection('songs').find({}).toArray();