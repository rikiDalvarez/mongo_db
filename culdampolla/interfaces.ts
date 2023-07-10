import { ObjectId } from "mongodb";
export interface Provider {
  _id: ObjectId;
  name: String;
  address: {
    street: String;
    number: String;
    floor: String;
    door: String;
    city: String;
    postalCode: String;
    country: String;
  };
  phone: String;
  fax: String;
  NIF: String;
}

export interface Eyewear {
  _id: ObjectId;
  brand: String;
  provider: {
    _id: ObjectId;
    name: String;
  };
  prescription: {
    left: String;
    right: String;
  };
  frameType: String;
  frameColor: String;
  lensColor: String;
  price: Number;
}

export interface Clients {
  _id: ObjectId;
  name: string;
  address: string;
  phone: String;
  email: String;
  registrationDate: Date;
  referrer: {
    _id: ObjectId;
    name: String;
  };
}

export interface Sales {
  _id: ObjectId;
  eyewear: {
    _id: ObjectId;
    brand: String;
  };
  employee: {
    _id: ObjectId;
    name: String;
  };
  saleDate: Date;
}
