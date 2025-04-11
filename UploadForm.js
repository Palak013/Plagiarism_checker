import { useState } from "react";
import axios from "axios";

export default function UploadForm({ setResult }) {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:8000/api/check/", { text });
    setResult(res.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        rows="8"
        cols="50"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your text here..."
      />
      <br />
      <button type="submit">Check Plagiarism</button>
    </form>
  );
}
