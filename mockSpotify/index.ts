import "dotenv/config";
import config from "../config/config";
import { User, Song, Album, Artist } from "./interface";
import { MongoClient, Db, Collection, ObjectId } from "mongodb";

const client = new MongoClient(config.MONGO_URI);

async function run(): Promise<void> {
  try {
    await client.connect();
    const spotifyMock: Db = client.db("mockSpotify");
    const users: Collection<User> = spotifyMock.collection("users");
    const query: Partial<User> = { username: "user123" };

    const user: User | null = await users.findOne(query);
    console.log(user);
  } finally {
    await client.close();
  }
}

async function insert(): Promise<void> {
  try {
    await client.connect();
    const mockSpotify: Db = client.db("mockSpotify");
    const users: Collection<User> = mockSpotify.collection("users");

    const user: User = {
      _id: new ObjectId(),
      email: "user@example.com",
      password: "password123",
      username: "user123",
      date_of_birth: new Date("1990-01-01"),
      gender: "female",
      country: "United States",
      postal_code: "12345",
      subscription: {
        start_date: undefined,
        renewal_date: undefined,
        payment_method: "credit_card",
        credit_card: {
          card_number: "**** **** **** 1234",
          expiration_month: "12",
          expiration_year: "2024",
          security_code: "123",
        },
        paypal_username: "user123_paypal",
        totalPayments: [undefined],
      },
      playlists: [
        {
          _id: new ObjectId(),
          title: "My Playlist 1",
          song_count: 10,
          creation_date: new Date("2022-01-01"),
          is_deleted: false,
          deletion_date: undefined,
          is_shared: false,
          shared_by: undefined,
          shared_date: undefined,
          shared_with: [undefined],
          songs: [
            {
              song_id: undefined,
              added_by: undefined,
              added_date: new Date("2022-01-01"),
            },
            // Additional songs...
          ],
        },
        // Additional playlists...
      ],
      favoriteAlbums: [undefined],
      favoriteSongs: [undefined],
      favoriteArtists: [undefined],
    };

    const result = await users.insertOne(user);
    console.log(result);
  } finally {
    await client.close();
  }
}

async function runQuerys() {
  try {
    await insert();
    await run();
  } catch (error) {
    console.log(error);
  }
}

runQuerys();
