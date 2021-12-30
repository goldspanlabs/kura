import PnlCompChart from "./PnlCompChart";
import PnlChart from "./PnlChart";
import style from "./scroll.module.css";
import React from "react";

export default function DashboardChart({ chart, data }) {
  return (
    <>
      <div className="col-12 col-sm-6 d-none d-sm-block">
        <PnlCompChart chart={chart} data={data.pnl_comp_chart} />
      </div>
      <div className="col-12 col-sm-6 d-none d-sm-block">
        <PnlChart chart={chart} data={data.pnl_chart} />
      </div>

      <div className={"d-block d-md-none"}>
        <div className={style.scrolling}>
          <div className="col-12 chart">
            <PnlCompChart chart={chart} data={data.pnl_comp_chart} />
          </div>
          <div className="col-12 chart">
            <PnlChart chart={chart} data={data.pnl_chart} />
          </div>
        </div>
      </div>
    </>
  );
}
