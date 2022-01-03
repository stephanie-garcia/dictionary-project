import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            {" "}
            <a
              href="https://github.com/stephanie-garcia/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Open source project on GitHub
            </a>{" "}
            coded by{" "}
            <a
              href="https://github.com/stephanie-garcia"
              target="_blank"
              rel="noreferrer"
            >
              Steph Garcia{" "}
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
