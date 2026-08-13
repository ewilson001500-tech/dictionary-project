import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultWord="sunset" />
        </main>
        <footer>
          <small>
            Coded by{" "}
            <a
              href="https://github.com/ewilson001500-tech"
              target="_blank"
              rel="noreferrer"
            >
              Erin Wilson
            </a>{" "}
            and opened-soured on{" "}
            <a
              href="https://github.com/ewilson001500-tech/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
