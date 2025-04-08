"use client";

import { useEffect, useState } from "react";
import { Square } from "./Square";

export const Game = () => {
  const [player, setPlayer] = useState(1);
  const [values, setValues] = useState(new Array(9).fill(" "));
  const [winner, setWinner] = useState("");
  // how to win
  // 3 in a row vertical (1,2,3) (4,5,6), (7,8,9)
  // 3 in a row hotizontal (1,4,7), (2,5,8), (3,6,9)
  // diagonal (1,5,9), (3,5,7)

  useEffect(() => {
    checkForWinner();
  }, [values]);

  const checkForWinner = () => {
    if (
      (values[0] === values[1] && values[0] === values[2]) ||
      (values[0] === values[3] && values[0] === values[6]) ||
      (values[0] === values[4] && values[0] === values[8])
    ) {
      setWinner(values[0]);
    } else if (
      (values[2] === values[5] && values[2] === values[8]) ||
      (values[2] === values[4] && values[2] === values[6])
    ) {
      setWinner(values[2]);
    } else if (values[3] === values[4] && values[3] === values[5]) {
      setWinner(values[3]);
    } else if (values[6] === values[7] && values[6] === values[8]) {
      setWinner(values[6]);
    } else if (values[1] === values[4] && values[1] === values[7]) {
      setWinner(values[1]);
    }

    if (
      values.every(
        (item) => item !== null && item !== undefined && item !== " "
      )
    ) {
      setWinner("TIE!");
    }

    // if all 9 values are taken up and there is no winner, set winner to 'It's a TIE!"
  };

  return (
    <>
      <div>
        <h2>Player {player}'s Turn</h2>
        {winner === "TIE!" && <h2>It's a tie!</h2>}
        {winner !== "" && winner !== "TIE!" && <h2>Winner is {winner}</h2>}
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
            disabled={winner == "X" || winner == "O"}
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
