import { useQuery } from "@tanstack/react-query";
import { fetchWeeklyChart } from "@/api";
import type { FetchWeeklyChartOptions } from "@/api";

type UseWeeklyChartOptions = {} & FetchWeeklyChartOptions;

export const useWeeklyChart = ({ username }: UseWeeklyChartOptions) => {
  return useQuery({
    queryKey: ["fetch-weekly-chart", username],
    queryFn: () => fetchWeeklyChart({ username }),
    select: (data) =>
      data.map(({ artist, name, url }) => ({
        artist: artist["#text"],
        album: name,
        url: url,
      })),
  });
};
