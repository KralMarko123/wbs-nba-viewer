import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/wbs-nba-viewer" element={<Home />} />
        <Route path="/wbs-nba-viewer/details" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default App;
