import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Collection from "./Screens/Collection/Collection";
import Home from "./Screens/Home/Home";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/collection" Component={Collection} />
      </Routes>
    </Router>
  );
};

export default App;
