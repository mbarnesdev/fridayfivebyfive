import { z } from "zod";

export const AlbumSchema = z.object({
  artist: z.object({
    mbid: z.string(),
    "#text": z.string(),
  }),
  mbid: z.string(),
  url: z.string(),
  name: z.string(),
  "@attr": z.object({
    rank: z.string(),
  }),
  playcount: z.string(),
});

export const AlbumInfoSchema = z.object({
  artist: z.string(),
  mbid: z.string(),
  tags: z.object({
    tag: z.array(
      z.object({
        url: z.string(),
        name: z.string(),
      })
    ),
  }),
  name: z.string(),
  image: z.array(
    z.object({
      size: z.string(),
      "#text": z.string(),
    })
  ),
  tracks: z
    .object({
      track: z.array(
        z.object({
          streamable: z.object({
            fulltrack: z.string(),
            "#text": z.string(),
          }),
          duration: z.number(),
          url: z.string(),
          name: z.string(),
          "@attr": z.object({
            rank: z.number(),
          }),
          artist: z.object({
            url: z.string(),
            name: z.string(),
            mbid: z.string(),
          }),
        })
      ),
    })
    .optional(),
  listeners: z.string(),
  playcount: z.string(),
  url: z.string(),
});
