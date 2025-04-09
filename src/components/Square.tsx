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
  setValues: React.Dispatch<React.SetStateAction<string[]>>;
  player: string;
  setPlayer: React.Dispatch<React.SetStateAction<string>>;
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
    <button onClick={handleClick} className="square" disabled={disabled}>
      {value}
    </button>
  );
};
