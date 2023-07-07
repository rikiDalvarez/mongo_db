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
  videos: Video[];
  channels: Channel[];
  subscriptions: Subscription[];
  playlists: Playlist[];
  comments: Comment[];
}

export interface Video {
  _id: ObjectId;
  title: string;
  description: string;
  size: number;
  video_file: string;
  duration: number;
  thumbnail: string;
  views: number;
  likes: number;
  dislikes: number;
  status: "public" | "hidden" | "private";
  tags: string[];
  upload_date: Date;
}

export interface Channel {
  _id: ObjectId;
  name: string;
  description: string;
  creation_date: Date;
}

export interface Subscription {
  channel_id: ObjectId;
  subscribe_date: Date;
}

export interface Playlist {
  _id: ObjectId;
  name: string;
  creation_date: Date;
  status: "public" | "private";
  videos: PlaylistVideo[];
}

export interface PlaylistVideo {
  video_id: ObjectId;
  added_date: Date;
}

export interface Comment {
  _id: ObjectId;
  video_id: ObjectId;
  text: string;
  comment_date: Date;
  likes: CommentLike[];
}

export interface CommentLike {
  user_id: ObjectId;
  like: boolean;
  like_date: Date;
}

