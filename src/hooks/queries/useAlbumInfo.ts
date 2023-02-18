import { useQuery } from "@tanstack/react-query";
import { fetchAlbumInfo } from "@/api";
import type { FetchAlbumInfoOptions } from "@/api";

type UseAlbumInfoOptions = {} & FetchAlbumInfoOptions;

export const useAlbumInfo = ({ artist, album }: UseAlbumInfoOptions) => {
  return useQuery({
    queryKey: ["fetch-album-info", artist, album],
    queryFn: () => fetchAlbumInfo({ artist, album }),
    staleTime: 120000,
    enabled: !!artist || !!album,
  });
};
