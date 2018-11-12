import React from "react";
import Counter from "../Practice/Counter";

const Counters = props => {
  return (
    <div>
      <button onClick={props.onReset} className="btn btn-primary btn-sm m-2">
        Reset
      </button>
      {props.counters.map(counter => (
        <Counter
          key={counter.id}
          value={counter.value}
          onIncrement={() => props.onIncrement(counter.id)}
          onDecrement={() => props.onDecrement(counter.id)}
          onDelete={() => props.onDelete(counter.id)}
        />
      ))}
    </div>
  );
};

export default Counters;
