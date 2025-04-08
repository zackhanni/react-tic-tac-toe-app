"use client";

import React, { useState } from "react";

export const Square = ({ player, setPlayer }) => {
  const [value, setValue] = useState(" ");

  const handleClick = () => {
    if (player === 1) {
      setValue("X");
      setPlayer(2);
    } else {
      setValue("O");
      setPlayer(1);
    }
  };

  return (
    <button onClick={value === " " ? handleClick : ""} class="square">
      {value}
    </button>
  );
};
