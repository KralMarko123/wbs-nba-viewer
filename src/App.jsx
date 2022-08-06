import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTE_PATHS } from "./constants/routes";
import Home from "./pages/Home";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTE_PATHS.home} element={<Home />} />
        <Route path={ROUTE_PATHS.details} element={<Details />} />
        <Route path={ROUTE_PATHS.notFound} element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
