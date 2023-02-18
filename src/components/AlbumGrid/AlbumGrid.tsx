import { Album } from "@/types";
import { useQueries } from "@tanstack/react-query";
import { FC, Fragment } from "react";
import { fetchAlbumInfo } from "@/api";
import { Spinner } from "@chakra-ui/react";

type AlbumGridProps = {
  chartData: {
    artist: string;
    album: string;
    url: string;
  }[];
};

const AlbumGrid: FC<AlbumGridProps> = ({ chartData }) => {
  const albumInfoQueries = useQueries({
    queries: chartData.slice(0, 25).map((album: any) => {
      return {
        queryKey: ["new-query", album.artist, album.album],
        queryFn: () =>
          fetchAlbumInfo({ artist: album.artist, album: album.album }),
        enabled: !!album.artist || !!album.name,
      };
    }),
  });

  const albumInfoQueriesIsLoading = albumInfoQueries.some(
    (result) => result.isLoading
  );

  if (albumInfoQueriesIsLoading) {
    return <Spinner />;
  } else {
    return (
      <div className="grid grid-cols-5">
        {albumInfoQueries.map(({ data }) => (
          <img className="w-full" src={(data as any).image[3]["#text"]} />
        ))}
      </div>
    );
  }
};

export default AlbumGrid;
