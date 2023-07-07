import "dotenv/config";
import config from "../config/config";
import { Provider } from "./interfaces";
import { MongoClient, Db, Collection, ObjectId } from "mongodb";

const client = new MongoClient(config.MONGO_URI);

async function run(): Promise<void> {
  try {
    const culdampolla: Db = client.db("culdampolla");
    const providers: Collection<Provider> = culdampolla.collection("providers");

    const query: Partial<Provider> = { name: "hala" };
    const provider: Provider | null = await providers.findOne(query);

    console.log(provider);
    //time to query 1.5secx
  } finally {
    await client.close();
  }
}
//move to controller file
async function insert(): Promise<void> {
  try {
    const culdampolla: Db = client.db("culdampolla");
    const providers: Collection<Provider> = culdampolla.collection("providers");

    const provider: Provider = {
      _id: new ObjectId(),
      name: "hala",
      address: {
        street: "granvia",
        number: "1a",
        floor: "1",
        door: "a",
        city: "barcelona",
        postalCode: "08041",
        country: "españa",
      },
      phone: "637666665",
      fax: "test",
      NIF: "test",
    };

    const result = await providers.insertOne(provider);
    console.log(result);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
insert().catch(console.dir);
