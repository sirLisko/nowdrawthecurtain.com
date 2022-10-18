import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";

import Face from "./Face/Face";
import Home from "./Home/Home";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="*" element={<Home />}></Route>
        </Routes>
        <Face />
      </div>
    </Router>
  );
}

export default App;
