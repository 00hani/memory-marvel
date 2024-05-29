import logo from "./logo.svg";
import "./App.css";
import Divs from "./divs";

import Picturs from "./picturs";
function App() {
  return (
    <div className="App">
      <p style={{ fontSize: "70px", color: "white", textAlign: "center" }}>
        memory marvel
      </p>
      <Divs />
      <Picturs />
    </div>
  );
}

export default App;
