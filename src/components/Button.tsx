import { FC } from "react";

interface ButtonProps {
  label?: string;
  playerName?: string;
}

const Button: FC<ButtonProps> = ({ label, playerName }) => {
  return (
    <button className="bg-stone-500 p-2 rounded-xl shadow-md m-2 hover:bg-stone-400 focus:bg-stone-600">
      {label || playerName}
    </button>
  );
};

export default Button;
