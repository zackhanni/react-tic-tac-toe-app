"use client";

import React, { useState } from "react";
import { Square } from "./Square";

export const Game = () => {
  const [player, setPlayer] = useState(1);
  const squares = new Array(9).fill("");

  return (
    <>
      <div>
        <h2>Player {player}'s Turn</h2>
      </div>
      <div className="grid">
        {squares.map((squar, index) => (
          <Square player={player} setPlayer={setPlayer} key={index} />
        ))}
      </div>
      <button>Start a new game</button>
    </>
  );
};
