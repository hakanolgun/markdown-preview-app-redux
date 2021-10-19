import "./App.css";
import ReactMarkdown from "react-markdown";
import { useSelector } from "react-redux";

function App() {
  const content = useSelector((state) => state.markdown.content);

  return (
    <div className="App">
      <div className="heading">
        <h1>Markdown Preview App</h1>
      </div>
      <div className="container">
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <ReactMarkdown children={content} />
      </div>
    </div>
  );
}

export default App;
