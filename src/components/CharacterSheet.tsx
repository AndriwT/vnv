interface componentProps {
  setCharacter: boolean;
}

interface CharacterSheetProps {
  character: {
    name: string;
    abilities: {
      strength: number;
      dexterity: number;
      constitution: number;
      intelligence: number;
      wisdom: number;
      charisma: number;
    };
    class: string;
    level: string;
    race: string;
    background: string;
    alignment: string;
    playerName: string;
    xp: number;
  };
}

const CharacterSheet: React.FC<CharacterSheetProps> = ({ character }) => {
  return (
    <div className="flex flex-col ml-4">
      <div className="flex ml-2">
        <div className="bg-vandyke w-20 h-20 rounded-full"></div>
        <div className="flex flex-col">
          <h2 className="ml-4">{character?.name}</h2>
          <h2 className="ml-4">
            {character?.class} {character?.level} - {character?.background} -{" "}
            {character?.playerName}
          </h2>
          <h2 className="ml-4">
            {character?.race} - {character?.alignment} - {character?.xp}
          </h2>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div className="bg-vandyke w-10 h-10 mt-2 rounded-lg flex flex-col justify-center items-center">
            <h2 className="text-lg">{character?.abilities.strength}</h2>
            <h5 className="bg-battleship rounded-lg ">2</h5>
          </div>
          <div className="bg-vandyke w-10 h-10 mt-2 rounded-lg  flex flex-col justify-center items-center">
            <h2 className="text-lg">{character?.abilities.dexterity}</h2>
            <h5 className="bg-battleship rounded-lg ">2</h5>
          </div>
          <div className="bg-vandyke w-10 h-10 mt-2 rounded-lg flex flex-col justify-center items-center">
            <h2 className="text-lg">{character?.abilities.constitution}</h2>
            <h5 className="bg-battleship rounded-lg ">2</h5>
          </div>
          <div className="bg-vandyke w-10 h-10 mt-2 rounded-lg flex flex-col justify-center items-center">
            <h2 className="text-lg">{character?.abilities.intelligence}</h2>
            <h5 className="bg-battleship rounded-lg ">2</h5>
          </div>
          <div className="bg-vandyke w-10 h-10 mt-2 rounded-lg flex flex-col justify-center items-center">
            <h2 className="text-lg">{character?.abilities.wisdom}</h2>
            <h5 className="bg-battleship rounded-lg ">2</h5>
          </div>
          <div className="bg-vandyke w-10 h-10 mt-2 rounded-lg flex flex-col justify-center items-center">
            <h2 className="text-lg">{character?.abilities.charisma}</h2>
            <h5 className="bg-battleship rounded-lg ">2</h5>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <div className="bg-vandyke w-10 h-10 ml-2 mt-2 rounded-2xl flex flex-col justify-center items-center"></div>
            <div className="bg-vandyke w-10 h-10 ml-2 mt-2 rounded-full flex flex-col justify-center items-center"></div>
          </div>
          <div className="bg-vandyke w-22 h-22 ml-2 mt-2 rounded-2xl flex flex-col p-2">
            <p className="text-xs">o _ Strength</p>
            <p className="text-xs">o _ Dexterity</p>
            <p className="text-xs">o _ Constitution</p>
            <p className="text-xs">o _ Intelligence</p>
            <p className="text-xs">o _ Wisdom</p>
            <p className="text-xs">o _ Charisma</p>
          </div>
          <div className="bg-vandyke w-22 h-22 ml-2 mt-2 pt-2 pl-2 pr-2 rounded-2xl flex flex-col md:overflow-scroll">
            <p className="text-xs">
              o _ Acrobatics
              <br />o _ Animal handling
              <br />o _ Athletics
              <br />o _ Insight
              <br />o _ Intimidation
              <br />o _ Investigation
              <br />o _ Medicine
              <br />o _ Nature
              <br />o _ Perception
              <br />o _ Performance
              <br />o _ Persuasion
              <br />o _ Sleight of hand
              <br />o _ Stealth
              <br />o _ Survival
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterSheet;

interface DisplayPlayer {
  name: string;
}
type Props = {
  player: DisplayPlayer;
};
