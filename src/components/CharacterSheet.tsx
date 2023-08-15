interface componentProps {
  setCharacter: boolean;
}

interface CharacterSheetProps {
  character: {
    name: string;
  };
}

const CharacterSheet: React.FC<CharacterSheetProps> = ({ character }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-vandyke w-20 h-20 rounded-full m-2"></div>
      <h1>{character?.name}</h1>
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
