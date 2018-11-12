import React from "react";

const Counter = ({ value, onIncrement, onDelete, onDecrement }) => {
  const formatCount = () => {
    return value === 0 ? "Zero" : value;
  };

  const getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += value === 0 ? "warning" : "primary";
    return classes;
  };


  return (
    <div className="row">
      <div className="col-1">
        <span className={getBadgeClasses()}>{formatCount()}</span>
      </div>
      <div className="col">
        <button onClick={onIncrement} className="btn btn-sm btn-secondary ml-2">
          +
        </button>
        <button disabled={value === 0 ? true : false} onClick={onDecrement} className="btn btn-sm btn-secondary m-2">
          -
        </button>
        <button onClick={onDelete} className="btn btn-danger btn-sm ml-2">
          X
        </button>
      </div>
    </div>
  );
};

export default Counter;
