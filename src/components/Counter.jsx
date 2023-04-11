import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  decrement,
  increment,
  incrementByAmout,
  reset,
} from 'context/reducers/counter';

function Counter(props) {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <section>
      <p>{count}</p>
      <div>
        <button
          className="bg-cyan-600 text-white p-2 text-lg font-bold mx-2"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className="bg-cyan-600 text-white p-2 text-lg font-bold mx-2"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <input
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <div>
        <button
          className="bg-cyan-600 text-white p-2 text-lg font-bold mx-2"
          onClick={() => dispatch(incrementByAmout(addValue))}
        >
          Add Amount
        </button>
        <button
          className="bg-cyan-600 text-white p-2 text-lg font-bold mx-2"
          onClick={resetAll}
        >
          Reset
        </button>
      </div>
    </section>
  );
}

export default Counter;
