import React from "react";

function CustomInput({ label, currency, salary, onChange }) {
  return (
    <div className="form-control">
      <label className="label">{label}</label>
      <div className="input " style={{ display: "flex", alignItems: "center" }}>
        {salary == "" ? (
          ""
        ) : (
          <h4  style={{ marginRight: "10px" }}>{currency}</h4>
        )}
        <input
          className="inputText"
          style={{
            width: "100%",
            height: "100%",
            outline: "none",
            border: "none",
          }}
          onChange={onChange}
          type="number"
          value={salary}
        />
      </div>
    </div>
  );
}

export default CustomInput;

