import {MongoClient} from "mongodb";
import dotenv from "dotenv";

dotenv.configDotenv();

const URI = "mongodb+srv://Matheus:XFC9ZbPC8psdLfV9@cluster0.9errj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("Spotify");
