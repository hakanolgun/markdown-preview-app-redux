import "./App.css";
import ReactMarkdown from "react-markdown";
import { useSelector, useDispatch } from "react-redux";
import { changeContent } from "./redux/markdownSlice";

function App() {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.markdown.content);

  return (
    <div className="App">
      <div className="heading">
        <h1>Markdown Preview App</h1>
        <button className="example_btn">?</button>
      </div>
      <div className="container">
        <textarea
          className="text_area two"
          placeholder="Write here..."
          value={content}
          onChange={(e) => dispatch(changeContent(e.target.value))}
        />
        <ReactMarkdown className="markdown_area two" children={content} />
      </div>
    </div>
  );
}

export default App;
