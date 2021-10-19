import "./App.css";
import ReactMarkdown from "react-markdown";

function App() {
  return (
    <div className="App">
      <div className="heading">
        <h1>Markdown Preview App</h1>
      </div>
      <div className="container">
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <ReactMarkdown>heloow</ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
