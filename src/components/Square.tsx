"use client";

import React, { useState } from "react";

export const Square = ({
  value,
  values,
  setValues,
  player,
  setPlayer,
  index,
  disabled,
}: {
  value: string;
  values: string[];
  setValues: any;
  player: number;
  setPlayer: any;
  index: number;
  disabled: boolean;
}) => {
  //   const [value, setValue] = useState(" ");
  const updateValues = (newValue: string) => {
    const newArray = [...values];
    newArray[index] = newValue;
    setValues(newArray);
  };

  const handleClick = () => {
    if (player === 1) {
      updateValues("X");
      setPlayer(2);
    } else {
      updateValues("O");
      setPlayer(1);
    }
  };

  return (
    <button
      onClick={values[index] === " " ? handleClick : ""}
      class="square"
      disabled={disabled}
    >
      {value}
    </button>
  );
};
