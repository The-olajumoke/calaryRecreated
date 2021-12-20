import React from "react";

function CustomSelect({ label, name,onChange, children,value }) {
  return (
    <div className="form-control">
      <label className="label select" >{label}</label>
      <select onChange={onChange} className="input" name={name} id="" value={value}>
        {children}
      </select>
    </div>
  );
}

export default CustomSelect;
