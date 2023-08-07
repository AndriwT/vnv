import { ChangeEvent, KeyboardEvent, useState } from "react";
import Button from "./Button";

const PartyNav = () => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([""]);

  const handleNoteChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const addNote = () => {
    setNotes([...notes, note]);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addNote();
    }
  };

  return (
    <div className="bg-stone-500 flex flex-col items-center justify-center w-1/4 h-full absolute right-0">
      <div className="bg-stone-400 h-3/5 w-11/12 rounded-3xl">
        <h1 className="text-center pt-2">Party Nav Menu</h1>
        <div className="flex flex-col">
          <Button playerName="Virkam The Destroyer" />
          <Button playerName="Sussie The Noble" />
          <Button playerName="Rutheriour Karshka" />
        </div>
      </div>
      <div className="bg-stone-400 h-2/6 w-11/12 mt-4 rounded-3xl">
        <h1 className="text-center pt-2">Notes</h1>
        {notes?.map((note, index) => (
          <div className="ml-4">
            <div key={index}>
              <p>{note}</p>
              <button
                onClick={() => {
                  delete notes[index];
                }}
              >
                x
              </button>
            </div>
          </div>
        ))}
        <div className="w-full flex ml-8 absolute bottom-6">
          <input
            className="bg-stone-300 rounded-l-md focus:outline-none w-3/6"
            onChange={handleNoteChange}
            value={note}
            onKeyDown={handleKeyDown}
          />
          <button
            className="bg-stone-500 rounded-r-md w-1/4 p-2 hover:bg-stone-400 focus:bg-stone-600"
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
