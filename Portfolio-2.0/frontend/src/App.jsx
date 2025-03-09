import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#242424] text-white/90 font-sans font-normal leading-normal min-h-screen flex flex-col items-center justify-center min-w-[320px]">
      <div className="flex justify-center gap-8">
        <a
          href="https://vite.dev"
          target="_blank"
          className="font-medium text-[#646cff] hover:text-[#535bf2] no-underline"
        >
          <img
            src={viteLogo}
            className="h-24 p-6 transition-all hover:drop-shadow-[0_0_1.5em_#646cffaa]"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          className="font-medium text-[#646cff] hover:text-[#535bf2] no-underline"
        >
          <img
            src={reactLogo}
            className="h-24 p-6 transition-all motion-safe:animate-[spin_20s_linear_infinite] hover:drop-shadow-[0_0_1.5em_#61dafbaa]"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-5xl leading-tight mt-8">Vite + React</h1>
      <div className="p-8 text-center">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="rounded-lg border border-transparent px-5 py-2.5 text-base font-medium bg-[#1a1a1a] cursor-pointer transition-colors hover:border-[#646cff] focus:outline-[4px_auto_-webkit-focus-ring-color] dark:bg-[#1a1a1a] dark:hover:border-[#646cff]"
        >
          count is {count}
        </button>
        <p className="mt-4">
          Edit{" "}
          <code className="font-mono bg-[#1a1a1a]/20 p-1 rounded">
            src/App.jsx
          </code>{" "}
          and save to test HMR
        </p>
      </div>
      <p className="text-[#888] text-sm">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
