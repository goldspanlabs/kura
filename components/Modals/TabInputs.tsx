import React from "react";
import Select from "../Select";
import merge from "deepmerge";

export default function TabInputs({
  transaction,
  accounts,
  handleChange,
  cache,
}) {
  // TODO: Replace this with query from db
  const actionTypes = [
    { value: "BTO", label: "Buy to Open" },
    { value: "BTC", label: "Buy to Close" },
    { value: "STO", label: "Sell to Open" },
    { value: "STC", label: "Sell to Close" },
    { value: "EXP", label: "Expired" },
    { value: "ASG", label: "Assignment" },
  ];

  const optionTypes = [
    { value: "C", label: "Call" },
    { value: "P", label: "Put" },
  ];

  const option_strategies = [
    { value: "covered-stock", label: "Covered Stock" },
    { value: "single", label: "Single Option" },
  ];

  const stock_strategies = [
    { value: "stock", label: "Stock" },
    { value: "covered-stock", label: "Covered Stock" },
  ];

  const getOptionByValue = (
    options: { value: string; label: string }[],
    value: string
  ) => {
    return options.find(
      (opt: { label: string; value: string }) => opt.value === value
    );
  };

  return (
    <div>
      <div className="col-lg-12">
        <div className="mt-2">
          <label className="form-label">Accounts</label>
          <Select
            name={"accounts-selection"}
            options={accounts}
            onChange={(e) => {
              handleChange(
                merge(cache, { object: { account_id: e.target.value } })
              );
            }}
            defaultValue={getOptionByValue(
              accounts,
              transaction.tradingAccountId
            )}
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleChange(
                  merge(cache, { object: { symbol: e.target.value } })
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
                  merge(cache, { object: { action: e.target.value } })
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
              defaultValue={transaction.tradeDate}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleChange(
                  merge(cache, { object: { trade_date: e.target.value } })
                );
              }}
            />
          </div>
        </div>
        {transaction.assetType == "option" && (
          <div className="col-lg-6">
            <div className="mt-2">
              <label className="form-label">Option Type</label>
              <Select
                options={optionTypes}
                name="option-type-selection"
                defaultValue={getOptionByValue(
                  optionTypes,
                  transaction.optionType
                )}
                onChange={(e) =>
                  handleChange(
                    merge(cache, { object: { option_type: e.target.value } })
                  )
                }
              />
            </div>
          </div>
        )}
        {transaction.assetType == "option" ? (
          <div className="col-lg-12">
            <div className="mt-2">
              <label className="form-label">Strategy</label>
              <Select
                options={option_strategies}
                name="strategy-selection"
                defaultValue={getOptionByValue(
                  option_strategies,
                  transaction.strategyId
                )}
                onChange={(e) =>
                  handleChange(
                    merge(cache, { object: { strategy: e.target.value } })
                  )
                }
              />
            </div>
          </div>
        ) : (
          <div className="col-lg-12">
            <div className="mt-2">
              <label className="form-label">Strategy</label>
              <Select
                options={stock_strategies}
                name="strategy-selection"
                defaultValue={getOptionByValue(
                  stock_strategies,
                  transaction.strategyId
                )}
                onChange={(e) =>
                  handleChange(
                    merge(cache, { object: { strategy: e.target.value } })
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleChange(
                  merge(cache, {
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleChange(
                  merge(cache, {
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
            <label className="form-label">Fee</label>
            <input
              type="text"
              className="form-control"
              defaultValue={transaction.fee}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleChange(
                  merge(cache, {
                    object: { fee: parseFloat(e.target.value) },
                  })
                );
              }}
              required
            />
          </div>
        </div>
      </div>
      {transaction.assetType == "option" && (
        <div className="row">
          <div className="col-lg-6">
            <div className="mt-2">
              <label className="form-label">Strike</label>
              <input
                type="text"
                className="form-control"
                defaultValue={transaction.strike}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleChange(
                    merge(cache, {
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
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleChange(
                    merge(cache, {
                      object: { expiration_date: e.target.value },
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
}
