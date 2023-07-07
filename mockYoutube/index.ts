import "dotenv/config";
import config from "../config/config";
import {
  User,
  Video,
  Channel,
  Subscription,
  Playlist,
  PlaylistVideo,
  Comment,
  CommentLike,
} from "./interfaces";
import { MongoClient, Db, Collection, ObjectId } from "mongodb";

//connect to cluster
const client = new MongoClient(config.MONGO_URI);

async function run(): Promise<void> {
  try {
    //create db
    const mockYoutube: Db = client.db("mockYoutube");
    //create collection
    const users: Collection<User> = mockYoutube.collection("users");

    const query: Partial<User> = { username: "riki" };

    const user: User | null = await users.findOne(query);

    console.log(user);
    //time to query 1.5secx
  } finally {
    await client.close();
  }
}
//move to controller file
async function insert(): Promise<void> {
  try {
    //create db
    const mockYoutube: Db = client.db("mockYoutube");
    //create collection
    const users: Collection<User> = mockYoutube.collection("users");
    //inset data

    const user: User = {
      _id: new ObjectId(),
      email: "riki@",
      password: "test",
      username: "riki",
      date_of_birth: new Date(),
      gender: "male",
      postal_code: "riki",
      country: "brasil",
      videos: [],
      channels: [],
      subscriptions: [],
      playlists: [],
      comments: [],
    };
    const result = await users.insertOne(user);
    console.log(result);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
insert().catch(console.dir);
