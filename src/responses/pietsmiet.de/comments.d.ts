/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Comments = CommentsResponse;

export interface CommentsResponse {
  data: Datum[];
  links: Links;
  meta: Meta;
  success: boolean;
}
export interface Datum {
  id: number;
  created_at: string;
  text: string;
  approved: boolean;
  timestamp: number | null;
  pinned: boolean;
  count_replies: number;
  likes_count: number;
  dislikes_count: number;
  user: User;
  is_reply: boolean;
  reply: number | null;
}
export interface User {
  id: number;
  url_slug: string;
  username: string;
  name: string;
  name_possessive: string;
  description: null;
  team: boolean;
  blocked: boolean;
  public_profile: boolean;
  banner: null;
  avatar: Avatar | null;
  reputation: number;
  reputation_pretty: string;
  preferences: Preferences;
  gifted_subscriptions_count: number;
  created_at: string;
  updated_at: string;
  subscribed?: boolean;
  subscription_streak?: number;
  subscription_supporter?: boolean;
}
export interface Avatar {
  id: number;
  collection: string;
  remote_url: null | string;
  variations: Variation[];
}
export interface Variation {
  height: number;
  url: string;
  file?: string;
}
export interface Preferences {
  public_profile: boolean;
  subscription_enable_identification: boolean;
}
export interface Links {
  first: string;
  last: string;
  prev: null;
  next: null;
}
export interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  links: Link[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}
export interface Link {
  url: null | string;
  label: string;
  active: boolean;
}
