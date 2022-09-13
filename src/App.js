import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary Project</h1>
        <Dictionary defaultWord="sunset" />
      </div>
    </div>
  );
}

export default App;
