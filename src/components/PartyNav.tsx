const PartyNav = () => {
  return (
    <div className="bg-stone-500 flex flex-col items-center justify-center w-1/4 h-full absolute right-0">
      <div className="bg-stone-400 h-[450px] w-[330px] rounded-3xl">
        <h1 className="text-center pt-2">Party Nav Menu</h1>
      </div>
      <div className="bg-stone-400 h-[200px] w-[330px] mt-4 rounded-3xl">
        <h1 className="text-center pt-2">Saved Menu</h1>
      </div>
    </div>
  );
};

export default PartyNav;
