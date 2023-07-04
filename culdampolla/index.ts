import "dotenv/config";
import config from "./config";
import { Product } from "./interfaces";
import { MongoClient } from "mongodb";

// Replace the uri string with your connection string.

const client = new MongoClient(config.MONGO_URI);

async function run() {
  try {
    const culdampolla = client.db("culdampolla");
    const providers = culdampolla.collection("providers");

    // Query for a movie that has the title 'Back to the Future'
    const query = { nombre: "test" };
    const provider = await providers.findOne(query);

    console.log(provider);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
