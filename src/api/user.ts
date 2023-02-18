import { z } from "zod";
import { client } from "@/api";
import { AlbumSchema } from "@/schemas";
import type { Album } from "@/types";

const USER = { WEEKLY_ALBUM_CHART: "user.getweeklyalbumchart" };

export type FetchWeeklyChartOptions = { username: string };
export const fetchWeeklyChart = async ({
  username,
}: FetchWeeklyChartOptions): Promise<Album[]> => {
  const response = await client.get({
    config: {
      params: {
        method: USER.WEEKLY_ALBUM_CHART,
        user: username,
      },
    },
  });
  // @ts-ignore
  return z.array(AlbumSchema).parse(response.data.weeklyalbumchart.album);
};
