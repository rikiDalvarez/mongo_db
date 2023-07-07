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

// async function run(): Promise<void> {
//   try {
//     const culdampolla: Db = client.db("mockYoutube");
//     const users: Collection = culdampolla.collection("users");

//     const query: Partial<User> = { username: "riki" };
//     // const user: User | null = await users.findOne(query);

//     // console.log(user);
//     //time to query 1.5secx
//   } finally {
//     await client.close();
//   }
// }
//move to controller file
async function insert(): Promise<void> {
  try {
    //create db
    const mockYoutube: Db = client.db("mockYoutube");
    //create collection
    const users = mockYoutube.collection("users");
    //inset data
    const result = await users.insertOne({ test: "riki" });
    // const result = await users.insertOne(user);
  } finally {
    await client.close();
  }
}

//     const user: User = {
//       _id: new ObjectId(),
//       email: "example@example.com",
//       password: "password123",
//       username: "riki",
//       date_of_birth: new Date("1990-01-01"),
//       gender: "Male",
//       country: "United States",
//       postal_code: "12345",
//       videos: [
//         {
//           _id: new ObjectId(),
//           title: "First Video",
//           description: "This is my first video",
//           size: 1024,
//           video_file: "video1.mp4",
//           duration: 120,
//           thumbnail: "thumbnail1.jpg",
//           views: 100,
//           likes: 10,
//           dislikes: 2,
//           status: "public",
//           tags: ["tag1", "tag2"],
//           upload_date: new Date("2023-07-06T10:00:00Z"),
//         },
//         {
//           _id: new ObjectId(),
//           title: "Second Video",
//           description: "Check out my second video",
//           size: 2048,
//           video_file: "video2.mp4",
//           duration: 180,
//           thumbnail: "thumbnail2.jpg",
//           views: 50,
//           likes: 5,
//           dislikes: 1,
//           status: "public",
//           tags: ["tag3", "tag4"],
//           upload_date: new Date("2023-07-07T14:30:00Z"),
//         },
//       ],
//       channels: [
//         {
//           _id: new ObjectId(),
//           name: "My Channel",
//           description: "Welcome to my channel",
//           creation_date: new Date("2023-07-01T08:00:00Z"),
//         },
//       ],
//       subscriptions: [
//         {
//           channel_id: new ObjectId("channelId1"),
//           subscribe_date: new Date("2023-07-02T09:15:00Z"),
//         },
//         {
//           channel_id: new ObjectId("channelId2"),
//           subscribe_date: new Date("2023-07-03T11:30:00Z"),
//         },
//       ],
//       playlists: [
//         {
//           _id: new ObjectId(),
//           name: "Favorites",
//           creation_date: new Date("2023-07-04T13:45:00Z"),
//           status: "private",
//           videos: [
//             {
//               video_id: new ObjectId("videoId1"),
//               added_date: new Date("2023-07-04T13:45:00Z"),
//             },
//             {
//               video_id: new ObjectId("videoId2"),
//               added_date: new Date("2023-07-05T09:30:00Z"),
//             },
//           ],
//         },
//       ],
//       comments: [
//         {
//           _id: new ObjectId(),
//           video_id: new ObjectId("videoId1"),
//           text: "Great video!",
//           comment_date: new Date("2023-07-06T15:00:00Z"),
//           likes: [
//             {
//               user_id: new ObjectId(),
//               like: true,
//               like_date: new Date("2023-07-06T15:00:00Z"),
//             },
//             {
//               user_id: new ObjectId(),
//               like: false,
//               like_date: new Date("2023-07-06T15:15:00Z"),
//             },
//           ],
//         },
//       ],
//     };

//     const result = await users.insertOne(user);
//     console.log(result);
//   } finally {
//     await client.close();
//   }
// }

// run().catch(console.dir);
insert().catch(console.dir);
