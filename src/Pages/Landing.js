import React, { useState } from "react";
// import { Form, Formik } from "formik";
// import * as Yup from "yup";
import "../styling/landing.css";
import CustomSelect from "../component/CustomSelect";
import CustomInput from "../component/CustomInput";
import history from "../utils/history";
import CurrencySel from "../component/CurrencySel";
import ResultDiv from "../component/ResultDiv";
import CurrencyInput from "../component/CurrencyInput";
import ResultCont from "../component/ResultCont";
// import currencySel from "../component/CurrencySel";
function Landing() {
  const [salary, setSalary] = useState("");
  const [currency, setCurrency] = useState("NGN");
  const [weeks, setWeeks] = useState("4");
  const [days, setDays] = useState("5");
  const [hours, setHours] = useState("8");
  const [lev1, setLev1] = useState(true);
  const [newCurrency, setnewCurrency] = useState('ALL');
  const [newRes, setnewRes] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const details = {
      salary,
      currency,
      weeks,
      days,
      hours,
    };
    console.log(details);
    // history.push("/result")
    setLev1(!lev1);
  };

  return (
    <div className="mainCont">
      <div className="heading">
        <h3 className="heading_Logo">Calary.</h3>
        <h4 className="heading_text">Salary Calculator</h4>
      </div>
      <div className="formCont">
        {lev1 ? (
          <form className="form">
            <h2 className="header"> Check how much you earn Periodically</h2>
            <div className="form-row">
              <CustomInput
                label="Your Monthly Salary"
                salary={salary}
                currency={currency}
                onChange={(e) => {
                  setSalary(e.target.value);
                }}
              />
              {/* CURRENCY */}
              <CurrencySel
                onChange={(e) => {
                  setCurrency(e.target.value);
                }}
                currency={currency}
              />
            </div>

            <div className="form-row">
              {/* WEEKs*/}
              <CustomSelect
                name="weeks_per_month"
                label="How many Weeks do you work per month?"
                value={weeks}
                onChange={(e) => {
                  setWeeks(e.target.value);
                }}
              >
                <option value="1">1 Week</option>
                <option value="2">2 Weeks</option>
                <option value="3">3 Weeks</option>
                <option value="4">4 Weeks</option>
              </CustomSelect>
              {/* DAYS */}

              <CustomSelect
                name="days_per_week"
                label="How many Days do you work per week?"
                onChange={(e) => {
                  setDays(e.target.value);
                }}
              >
                <option value="1">1 Day</option>
                <option value="2">2 Days</option>
                <option value="3">3 Days</option>
                <option value="4">4 Days</option>
                <option value="5">5 Days</option>
                <option value="6">6 Days</option>
                <option value="7">7 Days</option>
              </CustomSelect>
            </div>
            <div className="form-row">
              {/* HOURS */}
              <CustomSelect
                name="hour_per_day"
                label="How many Hours do you work per Day?"
                onChange={(e) => {
                  setHours(e.target.value);
                }}
              >
                <option value="1">1 hour</option>
                <option value="2">2 hours</option>
                <option value="3">3 hours</option>
                <option value="4">4 hours</option>
                <option value="5">5 hours</option>
                <option value="6">6 hours</option>
                <option value="7">7 hours</option>
                <option value="8">8 hours</option>
                <option value="9">9 hours</option>
                <option value="10">10 hours</option>
                <option value="11">11 hours</option>
                <option value="12">12 hours</option>
              </CustomSelect>
            </div>
            <div className="ring">
              {salary == "" ? (
                <button disabled className="formBtn">
                  Calculate
                </button>
              ) : (
                <button className="formBtn" onClick={handleSubmit}>
                  Calculate
                </button>
              )}
            </div>
          </form>
        ) : (
          <form className="form">
            <div className="resHeader" style={{}}>
              <h2
                className="resHeaderText"
                onClick={() => {
                  setLev1(!lev1);
                }}
              >
                Go Back
              </h2>
              <CurrencyInput onChange={(e)=>{
                setnewCurrency(e.target.value);

              setnewRes(true)
              }} />
            </div>
            {/* Result */}
            <div className="resultCont">
              <ResultCont
                currency={currency}
                yearAmount="82668.00"
                days={days}
              />
              {newRes ? (
                <ResultCont
                className="line"
                  newCurrency={newCurrency}
                  yearAmount="82668.00"
                  days={days}
                />
              ) : (
                ""
              )}
            </div>

          </form>
        )}
        <div className="imgCont">
          <img src="https://390labs.com" alt="390Labs Logo" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
