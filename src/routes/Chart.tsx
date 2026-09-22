import { useQuery } from "@tanstack/react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexCharts from "react-apexcharts";

interface ChartProps {
  coinId: string;
}

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

function Chart() {
  const { coinId } = useOutletContext<ChartProps>();
  console.log(coinId);
  const { isLoading, data } = useQuery<IHistorical[]>({
    queryKey: ["chart"],
    queryFn: () => fetchCoinHistory(coinId),
  });
  const resData = data?.map((item: any) => ({
    time_open: Math.floor(item[0] / 1000),
    open: item[1],
    high: item[2],
    low: item[3],
    close: item[4],
    volume: item[5],
    time_close: Math.floor(item[6] / 1000),
  }));
  console.log(resData);
  return (
    <div>
      {isLoading ? (
        "Lading chart..."
      ) : (
        <ApexCharts
          type="line"
          series={[
            {
              name: "price",
              data: resData?.map((price) => Number(price.close)) ?? [],
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: 500,
              width: 500,
            },
            stroke: {
              curve: "smooth",
            },
            xaxis: {
              type: "datetime",
              categories: resData?.map(
                (price) => price.time_close * 1000,
              ) as [],
              tickAmount: 10,
              labels: {
                format: "MM/dd",
              },
            },
            tooltip: {
              x: {
                format: "yyyy/MM/dd",
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
