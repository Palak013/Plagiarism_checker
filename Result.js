export default function Result({ result }) {
    return result ? (
      <div>
        <h2>Plagiarism Score:</h2>
        <p>{result.plagiarism_score}%</p>
      </div>
    ) : null;
  }