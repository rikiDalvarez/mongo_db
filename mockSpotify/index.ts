import "dotenv/config";
import config from "../config/config";
import { User, Song, Album, Artist } from "./interface";
import { MongoClient, Db, Collection, ObjectId } from "mongodb";

const client = new MongoClient(config.MONGO_URI);

async function run(): Promise<void> {
  try {
    const spotifyMock: Db = client.db("mockSpotify");
    const users: Collection<User> = spotifyMock.collection("users");
    const query: Partial<User> = { username: "riki" };

    const user: User | null = await users.findOne(query);
    console.log(user);
  } finally {
    await client.close();
  }
}

async function insert(): Promise<void> {
  try {
    const mockSpotify: Db = client.db("mockSotify");
    const users: Collection<User> = mockSpotify.collection("users");
  } finally {
    await client.close();
  }
}
