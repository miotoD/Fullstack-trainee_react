import { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [contents, setContents] = useState("");

  return (
    <>
      <h1 className="text-center text-4xl font-bold mb-4">
        Markdown Previewer
      </h1>
      <div className="h-screen w-screen flex">
        {/* Input for Markdown */}
        <div className="w-[50%] h-full">
          <textarea
            name="md"
            className="h-full w-full p-3"
            value={contents}
            onChange={(event) => setContents(event.target.value)}
          ></textarea>
        </div>

        {/* Markdown Preview */}
        <div className="w-[50%] h-full border-black border-[2px] p-3 overflow-auto">
          <ReactMarkdown>{contents}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}

export default App;
