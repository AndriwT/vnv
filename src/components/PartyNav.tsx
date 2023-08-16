import { ChangeEvent, KeyboardEvent, useState } from "react";
import CharacterSheet from "./CharacterSheet";

("bg-walnut p-2 rounded-xl shadow-md m-2 hover:bg-battleship focus:bg-stone-600");

const characterObj = {
  name: "Herman... \"That's it, he's just Herman\"",
  abilities: {
    strength: 5,
    dexterity: 3,
    constitution: 6,
    intelligence: 2,
    wisdom: 4,
    charisma: 3,
  },
  class: "Barbarian",
  level: "II",
  race: "Elf",
  background: "Artisan",
  alignment: "Lawful Good",
  playerName: "Andriw Tapanes",
  xp: 132,
};

const PartyNav = () => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([""]);
  const [character, setCharacter] = useState<boolean>(true);

  const handleNoteChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const addNote = () => {
    setNotes((prevNotes) => [...prevNotes, note]);
    setNote("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addNote();
    }
  };

  const handleSelection = () => {
    character ? setCharacter(false) : setCharacter(true);
  };

  return (
    <div className="bg-vandyke flex flex-col items-center justify-center w-2/6 h-full absolute right-0">
      <div className="bg-battleship h-3/5 w-11/12 rounded-3xl">
        <div className="flex items-center ">
          <button
            className="bg-vandyke w-10 h-10 m-2 rounded-md shadow-md"
            onClick={handleSelection}
          >
            🔙
          </button>
          <h1 className="text-center">Party Nav Menu</h1>
        </div>

        {character ? (
          <div>
            <CharacterSheet character={characterObj} />
          </div>
        ) : (
          <div className="flex flex-col">
            <button
              className="bg-walnut p-2 rounded-xl shadow-md m-2 hover:bg-battleship focus:bg-stone-600"
              onClick={handleSelection}
            >
              Sally The WedgyMaster
            </button>
            <button
              className="bg-walnut p-2 rounded-xl shadow-md m-2 hover:bg-battleship focus:bg-stone-600"
              onClick={handleSelection}
            >
              Tirion Valirion Sihirion The Third
            </button>
            <button
              className="bg-walnut p-2 rounded-xl shadow-md m-2 hover:bg-battleship focus:bg-stone-600"
              onClick={handleSelection}
            >
              Herman... "That's it, he's just Herman"
            </button>
          </div>
        )}
      </div>
      <div className="bg-battleship h-2/6 w-11/12 mt-4 rounded-3xl">
        <h1 className="text-center pt-2">Notes</h1>
        <div className="ml-4 ">
          {notes?.map(
            (note, index) =>
              note !== "" && (
                <div key={index} className="flex flex-row items-center w-full">
                  <p>{note}</p>
                  <button
                    className="ml-4"
                    onClick={() => {
                      const updatedNotes = [...notes];
                      updatedNotes.splice(index, 1);
                      setNotes(updatedNotes);
                    }}
                  >
                    x
                  </button>
                </div>
              )
          )}
        </div>
        <div className="w-full flex ml-8 absolute bottom-6">
          <input
            className="bg-stone-300 rounded-l-md focus:outline-none w-3/6"
            onChange={handleNoteChange}
            value={note}
            onKeyDown={handleKeyDown}
          />
          <button
            className="bg-walnut rounded-r-md w-1/4 p-2 hover:bg-battleship focus:bg-stone-600"
            onClick={addNote}
          >
            Add Note
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartyNav;
