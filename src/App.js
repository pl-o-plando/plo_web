import "./App.css";
import SideBar from "./component/SideBar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Setting from "./pages/Setting.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn.js";
import SignUp from "./pages/SignUp.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <div className="content">
          <Routes>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/setting" element={<Setting />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;