import React, { useRef } from "react";
import { Button } from "@mui/material";
import { ICounterProps } from "./interfaces";
import "./styles.scss";

export const Counter: React.FC<ICounterProps> = React.memo(
  ({ id, count, hasBtns, handleIncrement, handleDecrement, handleRemove }) => {
    const counterRef = useRef<HTMLDivElement | null>(null);

    // increment wrapper
    const hanldeIncrementCounter = () =>
      handleIncrement(counterRef.current?.getAttribute("id") || "");

    // decrement wrapper
    const handleDecrementCounter = () =>
      handleDecrement(counterRef.current?.getAttribute("id") || "");

    // remove wrapper
    const handleRemoveCounter = () =>
      handleRemove(counterRef.current?.getAttribute("id") || "");

    return (
      <div className="counter" id={id} ref={counterRef}>
        {/* close icon */}
        <p className="counter-close" onClick={handleRemoveCounter}>
          &#10006;
        </p>

        <h3 className="counter-count">{count}</h3>

        {hasBtns && (
          <div className="counter-btns">
            <Button
              variant="outlined"
              color="success"
              onClick={hanldeIncrementCounter}
            >
              +
            </Button>

            <Button
              variant="outlined"
              color="error"
              onClick={handleDecrementCounter}
            >
              -
            </Button>
          </div>
        )}
      </div>
    );
  }
);
