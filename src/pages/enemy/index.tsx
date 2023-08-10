import { ChangeEvent, useState } from "react";

const Enemy = () => {
  const [name, setName] = useState("Goblin");
  const [background, setBackground] = useState("");

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleBackgroundChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBackground(e.target.value);
  };

  return (
    <div className="h-full">
      <h1 className=" text-3xl ml-[2%] mb-6">Enemy</h1>
      <div className="flex">
        <div className="flex flex-col items-center justify-center w-48 ml-[5%]">
          <input
            className=" text-2xl text-center text-white bg-[#aaa5a2] focus:outline-none mb-2"
            onChange={handleNameChange}
            value={name}
          />
          <div className="bg-stone-600 w-40 h-40 rounded-full "></div>
        </div>
        <div className="flex flex-col justify-center items-center ml-10 text-xl">
          <p className="">Health: </p>
          <p className="">Stamina: </p>
        </div>
      </div>
      <div className="bg-stone-300 h-60 w-[73%] m-4 rounded-2xl">
        <h2 className="pl-4 pt-2">Background:</h2>
        <textarea
          className="text-white bg-stone-300 ml-4 focus:outline-none"
          value={background}
          onChange={handleBackgroundChange}
          rows={8}
          cols={120}
        />
      </div>
    </div>
  );
};

export default Enemy;
