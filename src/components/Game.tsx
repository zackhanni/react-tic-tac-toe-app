"use client";

import { useState } from "react";
import { Square } from "./Square";

export const Game = () => {
  const [player, setPlayer] = useState(1);
  const [values, setValues] = useState(new Array(9).fill(" "));

  return (
    <>
      <div>
        <h2>Player {player}'s Turn</h2>
      </div>
      <div className="grid">
        {values.map((value, index) => (
          <Square
            key={index}
            index={index}
            player={player}
            setPlayer={setPlayer}
            value={value}
            values={values}
            setValues={setValues}
          />
        ))}
      </div>
      <button
        onClick={() => {
          setValues(new Array(9).fill(" "));
          setPlayer(1);
        }}
      >
        Start a new game
      </button>
    </>
  );
};
