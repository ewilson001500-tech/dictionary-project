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
          <Dictionary />
        </main>
        <footer className="text-center pt-4">
          <small>Coded by Erin Wilson and opened-soured on GitHub</small>
        </footer>
      </div>
    </div>
  );
}
