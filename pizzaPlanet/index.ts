import "dotenv/config";
import config from "../config/config";
import { Orders, Categories, Stores } from "./interface";
import { MongoClient, Db, Collection, ObjectId } from "mongodb";

const client = new MongoClient(config.MONGO_URI);

async function run(): Promise<void> {
  try {
    await client.connect();
    //create db
    const pizzaPlanet: Db = client.db("pizzaPlanet");
    //create collection
    const orders: Collection<Orders> = pizzaPlanet.collection("orders");

    const query: Partial<Orders> = {
      client: {
        name: "Riki",
        surname: undefined,
        address: undefined,
        postal_code: undefined,
        city: undefined,
        province: undefined,
        phone_number: undefined,
      },
    };

    const order: Orders | null = await orders.findOne({
      "client.name": "Fred",
    });

    console.log(order);
  } finally {
    await client.close();
  }
}

async function insert(): Promise<void> {
  try {
    await client.connect();
    //create db
    const pizzaPlanet: Db = client.db("pizzaPlanet");
    //create collection
    const orders: Collection<Orders> = pizzaPlanet.collection("orders");
    //inset data

    const order: Orders = {
      _id: new ObjectId(),
      client: {
        name: "Fred",
        surname: "Riki",
        address: "Riki",
        postal_code: "Riki",
        city: "Riki",
        province: "Riki",
        phone_number: "Riki",
      },
      order_date: new Date(),
      order_type: "delivery",
      products: [
        {
          name: "Riki",
          description: "Riki",
          image: "Riki",
          price: 1,
          quantity: 1,
        },
      ],
      total_price: 1,
      delivery_person: {
        name: "Riki",
        surname: "Riki",
      },
      delivery_date: new Date(),
    };
    const result = await orders.insertOne(order);
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
