"use client";

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
  player: string;
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
    if (values[index] !== " " || disabled) return;
    updateValues(player);
    setPlayer(player === "X" ? "O" : "X");
  };

  return (
    <button onClick={handleClick} class="square" disabled={disabled}>
      {value}
    </button>
  );
};
