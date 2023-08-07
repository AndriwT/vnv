import Button from "./Button";
import { FunctionComponent, PropsWithChildren } from "react";

const FlavorNav: React.FC = () => {
  return (
    <div className="bg-stone-600 flex items-center pl-8 w-full h-[230px] absolute bottom-0">
      <div className="bg-stone-400 h-5/6 w-6/12 rounded-3xl">
        <h1 className="text-center pt-2">Flavor Nav Menu</h1>
        <div className="ml-2">
          <Button label="Random NPC" />
          <Button label="Random Enemy" />
          <Button label="Random Place" />
          <Button label="Random Event" />
          <Button label="Random Weather" />
          <Button label="Random Animal" />
          <Button label="Random Loot" />
        </div>
      </div>
      <div className="bg-stone-400 h-5/6 w-1/5 ml-6 rounded-3xl">
        <h1 className="text-center pt-2">Saved Menu</h1>
      </div>
    </div>
  );
};

export default FlavorNav;
