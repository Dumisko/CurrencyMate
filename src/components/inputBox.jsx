import React from "react";

function input({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "USD",
  amountDisabled,
  CurrencyDisabled = false,
}) {
  return (
    <div className="bg-white flex justify-between items-center sm:gap-3 py-2 rounded-lg m-3">
      <div className="text-start m-2">
        <label htmlFor="input" className="">
          {label}
        </label>
        <input
          type="number"
          className="outline-none bg-transparent py-1.5 block w-[50%] sm:w-[200px]  "
          id="input"
          readOnly={amountDisabled}
          value={amount}
          onChange={(e) => onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="px-2">
        <p>select Currency</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default input;
