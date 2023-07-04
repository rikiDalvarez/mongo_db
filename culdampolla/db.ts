import mongoose from "mongoose";
import { HydratedDocument } from "mongoose";
import "dotenv/config";
import config from "./config";
import { Product } from "./interfaces";

const mongo_uri = config.MONGO_URI;

const culdampollaConection = mongoose
  .connect(mongo_uri, {
    dbName: "culdampolla",
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const provider = new mongoose.Schema<Product>({
  nombre: String,
  calle: String,
  numero: Number,
  piso: Number,
  puerta: String,
  codigoPostal: Number,
  pais: String,
  telefono: Number,
  fax: Number,
  nif: String,
});

const Provider = mongoose.model<Product>("Provider", provider, "test");

const provider1: HydratedDocument<Product> = new Provider({
  nombre: "test",
  calle: "Calle de la Flof",
  numero: 1,
  piso: 1,
  puerta: "A",
  codigoPostal: 28000,
  pais: "España",
  telefono: 123456789,
});

provider1
  .save()
  .then(() => {
    console.log("Provider saved");
  })
  .catch((err) => {
    console.log(err);
  });

const haha = Provider.find({ nombre: "test" });
console.log(haha);
