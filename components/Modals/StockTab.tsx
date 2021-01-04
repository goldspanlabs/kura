import React from "react";
import ActionSelect from "../Selections/ActionSelect";

const StockTab = ({ trans }) => (
  <div>
    <div className="col-lg-12">
      <div className="mt-2">
        <label className="form-label">Account</label>
        <select className="form-select">
          <option defaultValue={trans.account}>{trans.account}</option>
          <option value="2">US TFSA</option>
          <option value="2">US Margin</option>
        </select>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6">
        <div className="mt-2">
          <label className="form-label">Symbol</label>
          <input
            type="text"
            className="form-control"
            name="example-text-input"
            defaultValue={trans.symbol}
            required
          />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="mt-2">
          <ActionSelect defaultValue={trans.action} />
        </div>
      </div>
    </div>
    <div className="col-lg-12">
      <div className="mt-2">
        <label className="form-label">Trade Date</label>
        <input
          type="date"
          className="form-control"
          defaultValue={trans.trade_date}
        />
      </div>
    </div>
    <div className="mt-3">
      <div className="dropdown-divider" />
    </div>
    <div className="row">
      <div className="col-lg-4">
        <div className="mt-2">
          <label className="form-label">Quantity</label>
          <input
            type="text"
            className="form-control"
            name="example-text-input"
            defaultValue={trans.quantity}
            required
          />
        </div>
      </div>
      <div className="col-lg-4">
        <div className="mt-2">
          <label className="form-label">Price</label>
          <input
            type="text"
            className="form-control"
            name="example-text-input"
            defaultValue={trans.price}
            required
          />
        </div>
      </div>
      <div className="col-lg-4">
        <div className="mt-2">
          <label className="form-label">Commission</label>
          <input
            type="text"
            className="form-control"
            name="example-text-input"
            defaultValue={trans.commission}
            required
          />
        </div>
      </div>
    </div>
  </div>
);

export default StockTab;
