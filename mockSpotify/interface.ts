import { ObjectId } from "mongodb";

export interface User {
  _id: ObjectId;
  email: string;
  password: string;
  username: string;
  date_of_birth: Date;
  gender: string;
  country: string;
  postal_code: string;
  subscription: {
    start_date: Date;
    renewal_date: Date;
    payment_method: String;
    credit_card: {
      card_number: String;
      expiration_month: String;
      expiration_year: String;
      security_code: String;
    };
    paypal_username: String;
    totalPayments: [Date];
  };
  playlists: [
    {
      _id: ObjectId;
      title: string;
      song_count: number;
      creation_date: Date;
      is_deleted: boolean;
      deletion_date: Date;
      is_shared: boolean;
      shared_by: ObjectId;
      shared_date: Date;
      shared_with: [ObjectId];
      songs: [
        {
          song_id: ObjectId;
          added_by: ObjectId;
          added_date: Date;
        }
      ];
    }
  ];
  favoriteAlbums: [ObjectId];
  favoriteSongs: [ObjectId];
  favoriteArtists: [ObjectId];
}

export interface Song {
  title: string;
  duration: number;
  play_count: number;
  album_id: ObjectId;
}

export interface Album {
  title: string;
  duration: number;
  play_count: number;
  album_id: ObjectId;
}

export interface Artist {
  name: string;
  image: string;
  related_artists: [ObjectId];
}
