import { Inter } from "next/font/google";
import { ChangeEvent, KeyboardEvent, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [title, setTitle] = useState("Title");
  const [log, setLog] = useState("");
  const [logs, setLogs] = useState([""]);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleLogChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLog(e.target.value);
  };

  const addLog = () => {
    if (log) {
      setLogs([...logs, log]);
      setLog("");
    } else {
      alert("Nothing to log.");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addLog();
    }
  };

  return (
    <main className="flex flex-col">
      <input
        className="text-white text-3xl pt-2 pl-20 bg-[#aaa5a2] focus:outline-none"
        type="text"
        value={title}
        onChange={handleTitleChange}
      />
      <div className="w-3/4 pl-4">
        {logs?.map((log, index) => (
          <div className="m-2 pl-4 flex flex-wrap rounded-xl">
            <p>{log}</p>
          </div>
        ))}
        <div className="fixed bottom-60 w-9/12">
          <input
            className="bg-stone-300 p-2 rounded-l-md focus:outline-none w-4/5"
            onChange={handleLogChange}
            value={log}
            onKeyDown={handleKeyDown}
          />
          <button
            className="bg-stone-500 rounded-r-md p-2 w-1/6 hover:bg-stone-400 focus:bg-stone-600"
            onClick={addLog}
          >
            Add Log
          </button>
        </div>
      </div>
    </main>
  );
}
