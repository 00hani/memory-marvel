import logo from "./logo.svg";
import "./App.css";
import Divs from "./divs";

import Picturs from "./picturs";
function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{ fontSize: "70px", color: "white", textAlign: "center" }}>
        memory marvel
      </p>
      <Divs />
      <Picturs />
    </div>
  );
}

export default App;
