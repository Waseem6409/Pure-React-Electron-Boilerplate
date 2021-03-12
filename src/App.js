import logo from "./logo.svg";
import "./App.css";

const { api } = window;

function App() {
  const handleClick = () => {
    api.send("working");
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleClick}>Test ipcRenderer</button>
        <p>check your console</p>
      </header>
    </div>
  );
}

export default App;
