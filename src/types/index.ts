import { z } from "zod";
import { AlbumSchema, AlbumInfoSchema } from "@/schemas";
import type { AxiosRequestConfig } from "axios";

export type ClientGetOptions = {
  url?: string;
  config?: AxiosRequestConfig;
};

export type ClientPostOptions<K> = {
  body: K;
} & ClientGetOptions;

export type Album = z.infer<typeof AlbumSchema>;
export type AlbumInfo = z.infer<typeof AlbumInfoSchema>;
