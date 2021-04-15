import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Routes } from "./Routes";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">this is the client app</div>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
