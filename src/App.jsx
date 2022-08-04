import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTE_PATHS } from "./constants/routes";
import Details from "./pages/Details";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTE_PATHS.home} element={<Home />} />
        <Route path={ROUTE_PATHS.details} element={<Details />} />
      </Routes>
    </Router>
  );
};

export default App;
