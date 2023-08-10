import { FunctionComponent, PropsWithChildren } from "react";

const FlavorNav: React.FC = () => {
  return (
    <div className="bg-stone-600 flex items-center pl-8 w-full h-[230px] absolute bottom-0">
      <div className="bg-stone-400 h-5/6 w-6/12 rounded-3xl">
        <h1 className="text-center pt-2">Flavor Nav Menu</h1>
        <div className="ml-2">
          <button className="bg-stone-500 p-2 rounded-xl shadow-md m-2 hover:bg-stone-400 focus:bg-stone-600">
            Random NPC
          </button>
          <button
            className="bg-stone-500 p-2 rounded-xl shadow-md m-2 hover:bg-stone-400 focus:bg-stone-600"
            onClick={() => {
              window.location.href = "/enemy";
            }}
          >
            Random Enemy
          </button>
          <button className="bg-stone-500 p-2 rounded-xl shadow-md m-2 hover:bg-stone-400 focus:bg-stone-600">
            Random Place
          </button>
          <button className="bg-stone-500 p-2 rounded-xl shadow-md m-2 hover:bg-stone-400 focus:bg-stone-600">
            Random Event
          </button>
          <button className="bg-stone-500 p-2 rounded-xl shadow-md m-2 hover:bg-stone-400 focus:bg-stone-600">
            Random Weather
          </button>
          <button className="bg-stone-500 p-2 rounded-xl shadow-md m-2 hover:bg-stone-400 focus:bg-stone-600">
            Random Animal
          </button>
          <button className="bg-stone-500 p-2 rounded-xl shadow-md m-2 hover:bg-stone-400 focus:bg-stone-600">
            Random Loot
          </button>
        </div>
      </div>
      <div className="bg-stone-400 h-5/6 w-1/5 ml-6 rounded-3xl">
        <h1 className="text-center pt-2">Saved Menu</h1>
      </div>
    </div>
  );
};

export default FlavorNav;
