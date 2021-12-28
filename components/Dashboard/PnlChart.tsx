import React from "react";
import _ from "lodash";

export default function PnlChart(props) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthNumToName = (num) => {
    return months[num - 1] || "";
  };

  // @ts-ignore
  const categories = _.uniqBy(props.data, "period").map(({ period }) =>
    monthNumToName(period)
  );

  const series_new = _.groupBy(props.data, "strategy");

  const series = Object.entries(series_new).map(
    ([key, value]: [string, any[]]) => {
      const values = value.map(({ realized_pnl }) => realized_pnl * -1);
      return { name: key, data: values };
    }
  );

  const options = {
    chart: {
      animations: {
        enabled: false,
      },
      stacked: true,
      fontFamily: "Rubik, Helvetica, Arial, sans-serif",
      toolbar: { show: false },
    },
    dataLabels: {
      enabled: false,
    },
    height: 100,
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 7,
      },
    },
    xaxis: {
      categories: categories,
    },
    yaxis: {
      title: {
        text: "Realized P/L",
      },
    },
    theme: {
      palette: "palette5",
    },
    // colors: [
    // "#ae3ec9",
    // "#d6336c",
    // "#d6336c",
    // "#d63939",
    // "#f76707",
    // "#f59f00",
    //   "rgba(47,179,68,0.53)",
    //   "rgba(12,166,120,0.66)",
    //   "rgba(23,162,184,0.65)",
    //   "rgba(32,107,196,0.66)",
    //   "rgba(66,99,235,0.7)",
    // ],
  };

  return (
    <div className="col-12 col-sm-6 d-none d-sm-block">
      <div className="card">
        <div className="card-body" style={{ position: "relative" }}>
          <h3 className="card-title">Last 6 Months Realized P/L</h3>
          <props.chart
            options={options}
            series={series}
            type={"bar"}
            height="300"
          />
        </div>
      </div>
    </div>
  );
}
