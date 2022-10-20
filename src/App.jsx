import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Face from "./Face/Face";
import Home from "./Home/Home";

const App = () => (
  <Router>
    <Routes>
      <Route path="*" element={<Home />}></Route>
    </Routes>
    <Face />
  </Router>
);

export default App;
