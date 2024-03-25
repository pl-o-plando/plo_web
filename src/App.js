import "./App.css";
import { RecoilRoot } from "recoil";
import SideBar from "./component/SideBar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Setting from "./pages/Setting.js";
import SignIn from "./pages/SignIn.js";
import SignUp from "./pages/SignUp.js";
import Main from "./pages/Main.js";
import Statistics from "./pages/Statistics.js";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <BrowserRouter>
          <SideBar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route path="/signin" element={<SignIn />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
              <Route path="/setting" element={<Setting />}></Route>
              <Route path="/statistics" element={<Statistics />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </RecoilRoot>
  );
}

export default App;
