import React from 'react'
import "../styling/landing.css"

function ResultDiv({currency,time, amount}) {
    return (
      <div className="resultItem">
        <h4 className="resultTime">{time}</h4>
        <h2 className="resultAmount">
          {`${currency} ${amount}`}
        </h2>
      </div>
    );
}

export default ResultDiv
