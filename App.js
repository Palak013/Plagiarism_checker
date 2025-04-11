import { useState } from "react";
import UploadForm from "./components/UploadForm";
import Result from "./components/Result";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="App">
      <h1>Plagiarism Checker</h1>
      <UploadForm setResult={setResult} />
      <Result result={result} />
    </div>
  );
}

export default App;
