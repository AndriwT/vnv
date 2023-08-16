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

      <div className="bg-vandyke w-10 h-10 mt-2 rounded-lg flex flex-col justify-center items-center">
        <h2 className="text-lg">{character?.abilities.strength}</h2>
        <h5>2</h5>
      </div>
      <div className="bg-vandyke w-10 h-10 mt-2 rounded-lg  flex flex-col justify-center items-center">
        <h2 className="text-lg">{character?.abilities.dexterity}</h2>
        <h5>0</h5>
      </div>
      <div className="bg-vandyke w-10 h-10 mt-2 rounded-lg flex flex-col justify-center items-center">
        <h2 className="text-lg">{character?.abilities.constitution}</h2>
        <h5>2</h5>
      </div>
      <div className="bg-vandyke w-10 h-10 mt-2 rounded-lg flex flex-col justify-center items-center">
        <h2 className="text-lg">{character?.abilities.intelligence}</h2>
        <h5>1</h5>
      </div>
      <div className="bg-vandyke w-10 h-10 mt-2 rounded-lg flex flex-col justify-center items-center">
        <h2 className="text-lg">{character?.abilities.wisdom}</h2>
        <h5>2</h5>
      </div>
      <div className="bg-vandyke w-10 h-10 mt-2 rounded-lg flex flex-col justify-center items-center">
        <h2 className="text-lg">{character?.abilities.charisma}</h2>
        <h5>3</h5>
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
