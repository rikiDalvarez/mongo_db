import { ObjectId } from "mongodb";

export interface Orders {
  _id: ObjectId;
  client: {
    name: String;
    surname: String;
    address: String;
    postal_code: String;
    city: String;
    province: String;
    phone_number: String;
  };
  order_date: Date;
  order_type: String; // "delivery" or "pickup"
  products: [
    {
      name: String;
      description: String;
      image: String;
      price: Number;
      quantity: Number;
    }
    // ...
  ];
  total_price: Number;
  delivery_person: {
    name: String;
    surname: String;
  };
  delivery_date: Date;
}

export interface Categories {
  _id: ObjectId;
  name: String;
  pizzas: [
    {
      name: String;
      description: String;
      image: String;
      price: Number;
    }
    // ...
  ];
}
export interface Stores {
  _id: ObjectId;
  address: String;
  postal_code: String;
  city: String;
  province: String;
  employees: [
    {
      name: String;
      surname: String;
      NIF: String;
      phone_number: String;
      role: String; // "cook" or "delivery person"
    }
  ];
}
