import { useWeeklyChart } from "@/hooks";
import { useParams } from "react-router-dom";
import { AlbumGrid } from "@/components";
import { clsx } from "clsx";

const Chart = () => {
  const { username } = useParams();

  const weeklyChart = useWeeklyChart({ username: username || "" });

  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="w-[1000px] h-[1000px] grid place-items-center">
        {!weeklyChart.isLoading ? (
          <AlbumGrid chartData={weeklyChart.data!} />
        ) : null}
      </div>
    </div>
  );
};

export default Chart;
