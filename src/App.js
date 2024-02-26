import "./App.css";
import SideBar from "./component/SideBar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Setting from "./pages/Setting.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <div className="content">
          <Routes>
            <Route path="/setting" element={<Setting />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;