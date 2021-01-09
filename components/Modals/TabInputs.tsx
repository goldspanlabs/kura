import React from "react";
import Select from "react-select";
const merge = require("deepmerge");

const TabInputs = ({ transaction, accounts, handleChange, isOption }) => {
  const actionTypes = [
    { value: "BTO", label: "Buy to Open" },
    { value: "BTC", label: "Buy to Close" },
    { value: "STO", label: "Sell to Open" },
    { value: "STC", label: "Sell to Close" },
  ];

  const optionTypes = [
    { value: "C", label: "Call" },
    { value: "P", label: "Put" },
  ];

  const getOptionByValue = (
    options: { value: string; label: string }[],
    value: string
  ) => {
    return options.find((opt) => opt.value === value);
  };

  return (
    <div>
      <div className="col-lg-12">
        <div className="mt-2">
          <label className="form-label">Accounts</label>
          <Select
            options={accounts}
            name="account-selection"
            onChange={(e) =>
              handleChange(
                merge(transaction, { object: { account_id: e.value } })
              )
            }
            defaultValue={getOptionByValue(accounts, transaction.account_id)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="mt-2">
            <label className="form-label">Symbol</label>
            <input
              type="text"
              className="form-control"
              defaultValue={transaction.symbol}
              onChange={(e) => {
                handleChange(
                  merge(transaction, { object: { symbol: e.target.value } })
                );
              }}
              required
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="mt-2">
            <label className="form-label">Action</label>
            <Select
              options={actionTypes}
              name="action-selection"
              defaultValue={getOptionByValue(actionTypes, transaction.action)}
              onChange={(e) =>
                handleChange(
                  merge(transaction, { object: { action: e.value } })
                )
              }
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg">
          <div className="mt-2">
            <label className="form-label">Trade Date</label>
            <input
              type="date"
              className="form-control"
              defaultValue={transaction.trade_date}
              onChange={(e) => {
                handleChange(
                  merge(transaction, { object: { trade_date: e.target.value } })
                );
              }}
            />
          </div>
        </div>
        {isOption && (
          <div className="col-lg-6">
            <div className="mt-2">
              <label className="form-label">Option Type</label>
              <Select
                options={optionTypes}
                name="option-type-selection"
                defaultValue={getOptionByValue(
                  optionTypes,
                  transaction.option_type
                )}
                onChange={(e) =>
                  handleChange(
                    merge(transaction, { object: { option_type: e.value } })
                  )
                }
              />
            </div>
          </div>
        )}
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
              defaultValue={transaction.quantity}
              onChange={(e) => {
                handleChange(
                  merge(transaction, {
                    object: { quantity: parseInt(e.target.value) },
                  })
                );
              }}
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
              defaultValue={transaction.price}
              onChange={(e) => {
                handleChange(
                  merge(transaction, {
                    object: { price: parseFloat(e.target.value) },
                  })
                );
              }}
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
              defaultValue={transaction.commission}
              onChange={(e) => {
                handleChange(
                  merge(transaction, {
                    object: { commission: parseFloat(e.target.value) },
                  })
                );
              }}
              required
            />
          </div>
        </div>
      </div>
      {isOption && (
        <div className="row">
          <div className="col-lg-6">
            <div className="mt-2">
              <label className="form-label">Strike</label>
              <input
                type="text"
                className="form-control"
                defaultValue={transaction.strike}
                onChange={(e) => {
                  handleChange(
                    merge(transaction, {
                      object: { strike: parseFloat(e.target.value) },
                    })
                  );
                }}
                required
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mt-2">
              <label className="form-label">Expiration</label>
              <input
                type="date"
                className="form-control"
                defaultValue={transaction.expiration}
                onChange={(e) => {
                  handleChange(
                    merge(transaction, {
                      object: { expiration: e.target.value },
                    })
                  );
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TabInputs;