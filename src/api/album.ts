import { client } from "@/api";
import { AlbumInfoSchema } from "@/schemas";
import type { Album, AlbumInfo } from "@/types";

const ALBUM = { GET_INFO: "album.getinfo" };

export type FetchAlbumInfoOptions = { artist: string; album: string };
export const fetchAlbumInfo = async ({
  artist,
  album,
}: FetchAlbumInfoOptions): Promise<AlbumInfo> => {
  const response = await client.get({
    config: {
      params: {
        method: ALBUM.GET_INFO,
        artist,
        album,
      },
    },
  });
  //@ts-ignore
  return response.data.album as AlbumInfo;
};
