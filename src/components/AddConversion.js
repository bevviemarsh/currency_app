import React from "react";
import "../styles/AddConversion.css";

const AddConversion = ({ conversion }) => {
  return (
    <div>
      <div className="conversion">
        <span>Current conversion:</span>
        <span>
          <span className="zlotyConversion">
            {conversion ? conversion : "--"}
          </span>
          PLN
        </span>
      </div>
    </div>
  );
};

export default AddConversion;
