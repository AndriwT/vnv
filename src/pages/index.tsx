import { Inter } from "next/font/google";
import { ChangeEvent, useState } from "react";
import { Interface } from "readline";

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
    setLogs([...logs, log]);
    setLog("");
  };

  return (
    <main className="flex flex-col items-center justify-between pr-56">
      <input
        className="text-white text-3xl bg-[#aaa5a2] focus:outline-none"
        type="text"
        value={title}
        onChange={handleTitleChange}
      />
      {logs?.map((log, index) => (
        <div>
          <p>{log}</p>
        </div>
      ))}
      <div>
        <input
          className="bg-stone-300 focus:outline-none"
          onChange={handleLogChange}
          value={log}
        />
        <button onClick={addLog}>Add Log</button>
      </div>
    </main>
  );
}
