import React from "react";
import ResultDiv from "./ResultDiv";

function ResultCont({ yearAmount, newCurrency, days, currency, className }) {
  console.log(yearAmount);
  let month = yearAmount / 12;
  let week = month / 4;
  let day = week / days;
  console.log(yearAmount, month, week, day);
  return (
    // <div className="resultHolder ">
    <div className={`resultHolder ${className}`}>
      <ResultDiv
        currency={`${newCurrency ? newCurrency : currency}`}
        time="Yearly"
        amount="82,668.00"
      />
      <ResultDiv
        currency={`${newCurrency ? newCurrency : currency}`}
        time="Monthly"
        amount={month}
      />
      <ResultDiv
        currency={`${newCurrency ? newCurrency : currency}`}
        time="Weekly"
        amount={week}
      />
      <ResultDiv
        currency={`${newCurrency ? newCurrency : currency}`}
        time="Daily"
        amount={day}
      />
      <ResultDiv
        currency={`${newCurrency ? newCurrency : currency}`}
        time="Hourly"
        amount="43.06"
      />
    </div>
  );
}

export default ResultCont;
