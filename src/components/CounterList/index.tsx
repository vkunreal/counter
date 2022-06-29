import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import {
  addCounter,
  decrementCounter,
  incrementCounter,
  removeCounter,
} from "../../store/counters/actions";
import { selectCounters } from "../../store/counters/selectors";
import { Counter } from "../Counter";
import "./styles.scss";

export const CounterList: React.FC = () => {
  const [countElems, setCountElems] = useState(0);
  const counters = useSelector(selectCounters);

  const dispatch = useDispatch();

  const handleAddCounter = () => {
    const id = String(Math.random());
    const newCountElems = countElems + 1;

    if (newCountElems % 4 === 0 && newCountElems) {
      dispatch(addCounter({ id, count: 0, hasBtns: false }));

      setInterval(() => {
        dispatch(incrementCounter(id));
      }, 1000);
    } else {
      dispatch(addCounter({ id, count: 0, hasBtns: true }));
    }

    setCountElems(newCountElems);
  };

  // increment
  const handleIncrementCounter = (id: string) => dispatch(incrementCounter(id));
  // decrement
  const handleDecrementCounter = (id: string) => dispatch(decrementCounter(id));
  // remove counter
  const handleRemoveCounter = (id: string) => dispatch(removeCounter(id));

  return (
    <div>
      <Button
        className="add-counter-btn"
        variant="outlined"
        color="success"
        onClick={handleAddCounter}
      >
        Add Counter
      </Button>

      <div>
        {counters.map((counter) => (
          <Counter
            count={counter.count}
            hasBtns={counter.hasBtns}
            handleIncrement={handleIncrementCounter}
            handleDecrement={handleDecrementCounter}
            handleRemove={handleRemoveCounter}
            key={counter.id}
            id={counter.id}
          />
        ))}
      </div>
    </div>
  );
};
