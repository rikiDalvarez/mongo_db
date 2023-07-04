import "dotenv/config";
import config from "./config";
import { Provider } from "./interfaces";
import { MongoClient, Db, Collection } from "mongodb";

const client = new MongoClient(config.MONGO_URI);

async function run(): Promise<void> {
  try {
    const culdampolla: Db = client.db("culdampolla");
    const providers: Collection<Provider> = culdampolla.collection("providers");

    const query: Partial<Provider> = { nombre: "test" };
    const provider: Provider | null = await providers.findOne(query);

    console.log(provider);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
